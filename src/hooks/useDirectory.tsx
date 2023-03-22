import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaReddit } from "react-icons/fa";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  CommunityState,
  defaultCommunityState,
} from "../atoms/communitiesAtom";
import {
  defaultMenuItem,
  DirectoryMenuItem,
  directoryMenuState,
} from "../atoms/directoryMenuItem";

const useDirectory = () => {
  const [directoryState, setDirectoryState] =
    useRecoilState(directoryMenuState);
  const setCommunityStateValue = useSetRecoilState(CommunityState);
  const communityStateValue = useRecoilValue(CommunityState);
  const router = useRouter();

  const onSelectMenuItem = (menuItem: DirectoryMenuItem) => {
    if (menuItem === defaultMenuItem) {
      setCommunityStateValue(defaultCommunityState);
    }
    setDirectoryState((prev) => ({
      ...prev,
      selectedMenuItem: menuItem,
    }));

    router.push(menuItem.link);
    if (directoryState.isOpen) {
      toggleMenuOpen();
    }
  };

  const toggleMenuOpen = () => {
    setDirectoryState((prev) => ({
      ...prev,
      isOpen: !directoryState.isOpen,
    }));
  };

  useEffect(() => {
    const { currentCommunity } = communityStateValue;
    console.log("router.asPath", router.asPath);
    if (router.asPath === "/") return;
    if (currentCommunity) {
      setDirectoryState((prev) => ({
        ...prev,
        selectedMenuItem: {
          displayText: `r/${currentCommunity.id}`,
          link: `/r/${currentCommunity.id}`,
          icon: FaReddit,
          iconColor: "brand.100",
          imageURL: currentCommunity.imageURL,
        },
      }));
    }
  }, [communityStateValue.currentCommunity, router]);

  return { directoryState, toggleMenuOpen, onSelectMenuItem };
};
export default useDirectory;
