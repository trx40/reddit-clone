import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { useRecoilState } from "recoil";
import { Post, postState } from "../atoms/postsAtom";
import { firestore, storage } from "../firebase/clientApp";

const usePosts = () => {
  const [postStateValue, setPostStateValue] = useRecoilState(postState);

  const onVote = async (post: Post, vote: number, communityId: string) => {
    if (newVote) {
      // add/subtract 1 to/from post.voteStatus
      // create a new postVote document
    }
    // Existing vote - they have voted on the post before
    else {
      // Removing their vote ( up -> neutral OR down -> neutral)
      if (removingVote) {
        // add/subtract 1 to/from post.voteStatus
        // delete the postVote document
      } else {
        // add/subtract 2 to/from post.voteStatus
        // updating the existing postVote document
      }
    }
  };

  const onSelectPost = () => {};

  const onDeletePost = async (post: Post): Promise<boolean> => {
    try {
      // check if the post has an image, delete
      if (post.imageURL) {
        const imageRef = ref(storage, `posts/${post.id}/image`);
        await deleteObject(imageRef);
      }

      // delete post document itself
      const postDocRef = doc(firestore, "posts", post.id);
      await deleteDoc(postDocRef);

      // update recoil post state
      setPostStateValue((prev) => ({
        ...prev,
        posts: prev.posts.filter((item) => item.id !== post.id),
      }));
    } catch (error) {
      return false;
    }
    return true;
  };

  return {
    postStateValue,
    setPostStateValue,
    onVote,
    onDeletePost,
    onSelectPost,
  };
};
export default usePosts;
