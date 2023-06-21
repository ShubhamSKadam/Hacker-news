import React from "react";

const Search = () => {
  const handleChange = (event) => {
    console.log(event);
    // value of the target
    console.log(event.target.value);
  };
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" onChange={handleChange} />
    </div>
  );
};

const List = () => (
  <div>
    {list.map((Element) => {
      return (
        <li key={Element.objectID}>
          <span>
            <a href={Element.url}>{Element.title} </a>
          </span>
          <span>Author : {Element.author}, </span>
          <span>Comments : {Element.num_comments}, </span>
          <span>Points : {Element.points}</span>
        </li>
      );
    })}
  </div>
);

const App = () => {
  // test
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
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <hr />
      <Search />
      <List />
    </div>
  );
};
export default App;
