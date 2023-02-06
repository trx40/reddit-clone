import React from "react";
import { useRecoilState } from "recoil";
import { Community, CommunityState } from "../atoms/communitiesAtom";

const useCommunityData = () => {
  const [communityStateValue, setCommunityStateValue] =
    useRecoilState(CommunityState);

  const onJoinOrLeaveCommunity = (
    communityData: Community,
    isJoined: boolean
  ) => {
    // if the user is not signed in
    //  open auth modal

    if (isJoined) {
      leaveCommunity(communityData.id);
      return;
    }
    joinCommunity(communityData);
  };
  const joinCommunity = (communityData: Community) => {};

  const leaveCommunity = (communityId: string) => {};

  return {
    // data and functions

    communityStateValue,
    onJoinOrLeaveCommunity,
  };
};
export default useCommunityData;
