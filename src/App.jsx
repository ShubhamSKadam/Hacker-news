import React from "react";
import { useState } from "react";

// Search Component
const Search = (props) => {
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        onChange={props.onSearch}
        value={props.search}
      />
    </div>
  );
};

// Item component
const Item = (props) => {
  return (
    <li key={props.listItem.objectID}>
      <span>
        <a href={props.listItem.url}>{props.listItem.title} </a>
      </span>
      <span>Author : {props.listItem.author}, </span>
      <span>Comments : {props.listItem.num_comments}, </span>
      <span>Points : {props.listItem.points}</span>
    </li>
  );
};

// List component
const List = (props) => (
  <div>
    {props.list.map((item, index) => {
      return <Item key={index} listItem={item} />;
    })}
  </div>
);

// App component

const App = () => {
  const [searchTerm, setSearchTerm] = useState("redux");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // stories object data
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const searchedStories = stories.filter((story) => {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <hr />
      <Search search={searchTerm} onSearch={handleSearch} />
      <List list={searchedStories} />
    </div>
  );
};
export default App;
