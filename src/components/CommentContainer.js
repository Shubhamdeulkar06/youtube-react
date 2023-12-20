import React from "react";
import CommentsList from "./CommentsList";

const CommentContainer = () => {
  const commentData = [
    { id: 1, name: "Shubham Deulkar", text: "hi, what's cooking", replies: [] },
    {
      id: 2,
      name: "Alice Smith",
      text: "Hey, what's simmering?",
      replies: [
        {
          id: 21,
          name: "Shubham Deulkar",
          text: "Not much, just chilling.",
          replies: [
            {
              id: 101,
              name: "Shubham Deulkar",
              text: "nested comment",
              replies: [],
            },
          ],
        },
        {
          id: 22,
          name: "Emma Johnson",
          text: "Cooking up some ideas for the project!",
          replies: [],
        },
      ],
    },
    {
      id: 3,
      name: "John Doe",
      text: "Hey there! What's cooking in your world?",
      replies: [
        {
          id: 31,
          name: "Shubham Deulkar",
          text: "Just catching up on some reading.",
          replies: [],
        },
        {
          id: 32,
          name: "Chris Anderson",
          text: "Working on a new coding project!",
          replies: [],
        },
      ],
    },
    {
      id: 4,
      name: "John Doe",
      text: "Hey there! What's cooking in your world?",
      replies: [
        {
          id: 41,
          name: "Shubham Deulkar",
          text: "Just catching up on some reading.",
          replies: [],
        },
        {
          id: 42,
          name: "Chris Anderson",
          text: "Working on a new coding project!",
          replies: [],
        },
      ],
    },
    {
      id: 5,
      name: "Elena Rodriguez",
      text: "Hola! ¿Qué se cocina?",
      replies: [
        {
          id: 51,
          name: "Shubham Deulkar",
          text: "Solo estoy relajándome.",
          replies: [],
        },
        {
          id: 52,
          name: "Carlos Martinez",
          text: "Preparando una deliciosa cena.",
          replies: [],
        },
      ],
    },
  ];

  return (
    <div className="px-1 md:px-5 md:pl-36 w-[70%]">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
