import React, { useState, useEffect } from "react";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";

import { useAuth } from "../context/useAuth";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  doc,
  query,
  serverTimestamp,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import Moment from "react-moment";

const Post = ({ id, username, userImg, img, caption }) => {
  const [comment, setComment] = useState("");
  const [totalComments, setTotalComments] = useState();
  const [likes, setLikes] = useState();
  const [hasLiked, setHasLiked] = useState(false);
  const { user } = useAuth();

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "post", id, "comments"),
          orderBy("timestamp", "asc")
        ),
        (snapshot) => {
          setTotalComments(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        }
      ),

    [db, id]
  );

  useEffect(
    () =>
      onSnapshot(collection(db, "post", id, "likes"), (snapshot) => {
        setLikes(snapshot.docs);
      }),
    [db, id]
  );

  useEffect(
    () => setHasLiked(likes?.findIndex((like) => like.id === user.uid) !== -1),
    [likes, user]
  );

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "post", id, "likes", user.uid));
    } else {
      await setDoc(doc(db, "post", id, "likes", user.uid), {
        username: user.displayName,
      });
    }
  };

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "post", id, "comments"), {
      comment: commentToSend,
      userName: user.displayName,
      userImage: user.photoURL,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className="bg-white my-7 border rounded-sm shadow-sm">
      <div className="flex items-center p-5">
        <img
          src={userImg}
          loading="lazy"
          className="rounded-full object-contain border p-1 mr-3 h-12 w-12 justify-between"
          alt="profile-pic"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </div>
      <img src={img} alt="post-image" className="object-cover w-full" />
      {user ? (
        <div className="flex items-center justify-between px-4 pt-4">
          <div className="flex space-x-4 items-center">
            {hasLiked ? (
              <HeartIconFilled
                onClick={likePost}
                className="btn text-red-500"
              />
            ) : (
              <HeartIcon onClick={likePost} className="btn" />
            )}

            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn rotate-45 hover:rotate-90" />
          </div>

          <BookmarkIcon className="btn" />
        </div>
      ) : null}
      <p className="p-5 trancate">
        {console.log(likes?.length)}
        {likes?.length > 0 ? (
          <p className="font-bold mb-1">
            {likes.length} {likes.length === 1 ? "like" : "likes"}
          </p>
        ) : null}
        <span className="font-bold mr-1">{username}</span> {caption}
      </p>
      {totalComments?.length > 0 ? (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {totalComments.map((commentData) => {
            return (
              <div
                key={commentData.id}
                className="flex items-center space-x-2 mb-3"
              >
                <img
                  className="h-7 rounded-full"
                  src={commentData.userImage}
                  alt="profile-pic"
                />
                <p className="text-sm flex-1">
                  <span className="font-bold">
                    {commentData.userName.split(" ")[0]}:
                  </span>{" "}
                  {commentData.comment}
                </p>
                <Moment interval={1000} fromNow className="pr-5 text-xs">
                  {commentData.timestamp?.toDate()}
                </Moment>
              </div>
            );
          })}
        </div>
      ) : null}
      {user ? (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            placeholder="Add a Comment ..."
            className="border-none flex-1 focus:ring-0"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            disabled={!comment.trim()}
            onClick={sendComment}
            type="submit"
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      ) : null}
    </div>
  );
};

export default Post;
