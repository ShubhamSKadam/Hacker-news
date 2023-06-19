import React from "react";

const list = [
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

function Search() {
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" />
    </div>
  );
}

function List() {
  return (
    <>
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
    </>
  );
}

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <hr />
      <Search />
      <List />
    </div>
  );
}

export default App;
