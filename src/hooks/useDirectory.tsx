import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { FaReddit } from "react-icons/fa";
import { useRecoilState, useRecoilValue } from "recoil";
import { CommunityState } from "../atoms/communitiesAtom";
import {
  DirectoryMenuItem,
  directoryMenuState,
} from "../atoms/directoryMenuItem";

const useDirectory = () => {
  const [directoryState, setDirectoryState] =
    useRecoilState(directoryMenuState);
  const communityStateValue = useRecoilValue(CommunityState);
  const router = useRouter();

  const onSelectMenuItem = (menuItem: DirectoryMenuItem) => {
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
  }, [communityStateValue.currentCommunity]);

  return { directoryState, toggleMenuOpen, onSelectMenuItem };
};
export default useDirectory;
