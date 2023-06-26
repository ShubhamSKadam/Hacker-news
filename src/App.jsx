import React from "react";
import { useState, useEffect } from "react";

// Search Component
const Search = ({ onSearch, search }) => {
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" onChange={onSearch} value={search} />
    </div>
  );
};

// Item component
const Item = ({ title, url, author, num_comments, points }) => {
  return (
    <li>
      <span>
        <a href={url}>{title} </a>
      </span>
      <span>Author : {author}, </span>
      <span>Comments : {num_comments}, </span>
      <span>Points : {points}</span>
    </li>
  );
};

// List component
const List = ({ list }) => (
  <div>
    {list.map(({ objectID, ...item }) => {
      return <Item key={objectID} {...item} />;
    })}
  </div>
);

// App component

const App = () => {
  const [searchTerm, setSearchTerm] = useStorageState("React");

  const useStorageState = (key,initialState) => {
    const [value, setValue] = useState(
      localStorage.getItem(key) || initialState
    );
    useEffect(() => {
      localStorage.setItem(key, value);
    }, [value,key]);

    return [value, setValue];
  };

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
