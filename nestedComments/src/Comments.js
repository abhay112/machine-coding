import React, { useState } from "react";
import Comment from "./Comment";

const Comments = () => {
  let [commentInput, setCommentInput] = useState("");
  let [comments, setComments] = useState([]);
  const newComments =(text)=> {
    return {
      id: new Date().getTime(),
      display: text,
      children: [],
    };
  }
  const addReply =(commnetId, replyText)=> {
    let commentsWithNewReply = [...comments];
    insertComment(commentsWithNewReply, commnetId, replyText);
    setComments(commentsWithNewReply);
  }
  const insertComment =(comments, parentId, text)=> {
    for (let i = 0; i < comments.length; i++) {
      let comment = comments[i];
      if (comment.id === parentId) {
        comment.children.unshift(newComments(text));
      }
    }
    for (let i = 0; i < comments.length; i++) {
      let comment = comments[i];
      insertComment(comment.children, parentId, text);
    }
  }
  return (
    <>
      <div className="commnet-box">
        <textarea
          row="4"
          cols="50"
          value={commentInput}
          onChange={(e) => {
            setCommentInput(e.target.value);
          }}
        />
        <br />
        <button
          onClick={() => {
            setComments([newComments(commentInput), ...comments]);
            setCommentInput("");
          }}
        >
          Submit
        </button>
      </div>
        <ul>
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} addReply={addReply} />
          ))}
        </ul>
    </>
  );
};

export default Comments;
