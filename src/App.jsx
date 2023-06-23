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

const List = (props) => (
  <div>
    {props.list.map((item) => {
      return <Item listItem={item} />;
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
      <List list={stories} />
    </div>
  );
};
export default App;
