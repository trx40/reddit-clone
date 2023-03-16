import { Stack } from "@chakra-ui/react";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilValue } from "recoil";
import { CommunityState } from "../atoms/communitiesAtom";
import { Post } from "../atoms/postsAtom";
import CreatePostLink from "../components/Community/CreatePostLink";
import PageContent from "../components/Layout/PageContent";
import PostItem from "../components/Posts/PostItem";
import PostLoader from "../components/Posts/PostLoader";
import { auth, firestore } from "../firebase/clientApp";
import usePosts from "../hooks/usePosts";

export default function Home() {
  const [user, loadingUser] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const communityStateValue = useRecoilValue(CommunityState);
  const {
    postStateValue,
    setPostStateValue,
    onDeletePost,
    onSelectPost,
    onVote,
  } = usePosts();

  const buildUserHomeFeed = () => {
    // fetch some posts from each community the user is part of
  };

  const buildNoUserHomeFeed = async () => {
    setLoading(true);
    try {
      const postQuery = query(
        collection(firestore, "posts"),
        orderBy("voteStatus", "desc"),
        limit(10)
      );

      const postDocs = await getDocs(postQuery);
      const posts = postDocs.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPostStateValue((prev) => ({
        ...prev,
        posts: posts as Post[],
      }));
    } catch (error) {
      console.error("buildNoUserHomeFeed error", error);
    }
    setLoading(false);
  };

  const getUserPostVotes = () => {};

  // useEffects to govern logic
  useEffect(() => {
    // user not found and no attempt made to auth user -> display no user feed
    if (!user && !loadingUser) buildNoUserHomeFeed();
  }, [user, loadingUser]);

  return (
    <PageContent>
      <>
        <CreatePostLink />
        {loading ? (
          <PostLoader />
        ) : (
          <Stack>
            {postStateValue.posts.map((post) => (
              <PostItem
                post={post}
                onVote={onVote}
                userVoteValue={
                  postStateValue.postVotes.find(
                    (item) => item.postId === post.id
                  )?.voteValue
                }
                onSelectPost={onSelectPost}
                onDeletePost={onDeletePost}
                userIsCreator={user?.uid === post.creatorId}
                homePage
                key={post.id}
              />
            ))}
          </Stack>
        )}
      </>
      <>{/* Recommendations */}</>
    </PageContent>
  );
}
