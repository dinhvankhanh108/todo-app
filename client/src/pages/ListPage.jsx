import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const CC = styled.div`
  background-color: red
`;

const listUser = [
  {
    id: 1,
    name: "John Smith",
    address: "123 Main St, New York, NY 10001",
    classes: ["Math", "Science", "History"],
  },
  {
    id: 2,
    name: "Jane Doe",
    address: "456 Park Ave, Los Angeles, CA 90001",
    classes: ["English", "Art", "Music"],
  },
  {
    id: 3,
    name: "Bob Wilson",
    address: "789 Oak Rd, Chicago, IL 60601",
    classes: ["Physics", "Chemistry", "Biology"],
  },
  {
    id: 4,
    name: "Mary Johnson",
    address: "321 Pine St, Houston, TX 77001",
    classes: ["Geography", "Literature", "Spanish"],
  },
  {
    id: 5,
    name: "James Brown",
    address: "654 Maple Dr, Seattle, WA 98101",
    classes: ["Computer Science", "Calculus", "Statistics"],
  },
];

const ListPage = () => {
  const [lists, setLists] = useState(listUser);
  const [resultValue, setResultValue] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const result = lists.filter((list) =>
      list.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setResultValue(result || {});
  };

  const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search users..."
        className="border-default"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSearch}
      >
        Submit
      </button>

      {isEmptyObject(resultValue) ? (
        <div>No results found</div>
      ) : (
        resultValue?.map((result) => {
          <h3>Search Result:</h3>
          return (
            <CC key={result.id}>
              <p>id: {result.id}</p>
              <p>Name: {result.name}</p>
              <p>Address: {result.address}</p>
              <p>Classes: {result.classes?.join(", ")}</p>
            </CC>
          )
        })
      )}
    </>
  );
};

export default ListPage;
