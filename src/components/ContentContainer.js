import React from "react";

import TopNav from "./TopNav";
import { BsPlusCircleFill } from "react-icons/bs";

const ContentContainer = () => {
  return (
    <div className="content-container">
      <TopNav />
      <div className="content-list">
        <Post
          name="Kat"
          timestamp="2 weeks ago"
          text={`This is my first post in here #hellothere 🖐   `}
        />
        <Post name="DERz" timestamp="3 days ago" text={`Hi @Kat welcome`} />
        <Post
          name="LorzZZ"
          timestamp="2 weeks ago"
          text={`Heeyy therrree !! `}
        />
        <Post
          name="TheBe$t"
          timestamp="2 week ago"
          text={`Did you saw the new vdo game? 🎮  `}
        />
        <Post
          name="Liza"
          timestamp="1 week ago"
          text={`Nice discord dashbord clone 😉  `}
        />
        <Post
          name="TessSa"
          timestamp="1 week ago"
          text={`yeaaaa i like it 2 🙂   `}
        />
        <Post
          name="Bob"
          timestamp="1 week ago"
          text={`Say you come from where 🤔 , im from 🇺🇸 `}
        />
        <Post
          name="The_$killer"
          timestamp="5 days ago"
          text={`Im from 🇺🇸 2 nice to meet you 😄  `}
        />
        <Post
          name="ThE_ImPosterR"
          timestamp="4 days ago "
          text={`I visited the 🇺🇸 its nice out there , im from 🇫🇷 `}
        />
        <Post name="Coyz" timestamp="3 days ago" text={`Hello from 🇹🇳 `} />
        <Post
          name="GedAZ"
          timestamp="2 days ago "
          text={`did you all heard about the "metaverse 🤩  `}
        />
        <Post name="HUlk" timestamp="1 day ago " text={`The 🌐 is changing `} />
      </div>
      <BottonBar />
    </div>
  );
};

const BottonBar = () => (
  <div className="bottom-bar">
    <PlusIcon />
    <input
      type="text"
      placeholder="Enter message..."
      className="bottom-bar-input"
    />
  </div>
);

const Post = ({ name, timestamp, text }) => {
  const seed = Math.round(Math.random() * 100);
  return (
    <div className={"post"}>
      <div className="avatar-wrapper">
        <img
          src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`}
          alt=""
          className="avatar"
        />
      </div>

      <div className="post-content">
        <p className="post-owner">
          {name}
          <small className="timestamp">{timestamp}</small>
        </p>
        <p className="post-text">{text}</p>
      </div>
    </div>
  );
};

const PlusIcon = () => (
  <BsPlusCircleFill
    size="22"
    className="text-green-500 dark:shadow-lg mx-2 dark:text-primary"
  />
);
export default ContentContainer;
