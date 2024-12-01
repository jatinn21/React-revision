import React, { useState, useEffect } from "react";

export default function LiftingUpTheStateEx1() {
  const [sort, setSort] = useState(true);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "1: John Doe",
      age: 30,
    },
    {
      id: 2,
      name: "2: Jatin Sharma",
      age: 33,
    },
    {
      id: 3,
      name: "3: Vishnu Chomal",
      age: 27,
    },
  ]);

  const handleSort = () => {
    setSort((pre) => !pre);
    console.log(sort, "sorted");
  };

  return (
    <div className="p-4 bg-blue-500 flex gap-5 flex-col items-center">
      <div>Parent State</div>
      <button
        className="bg-black text-yellow-50 px-4 py-1 rounded-lg"
        onClick={handleSort}
      >
        Sort
      </button>

      <SiblingComponent1 sort={sort} />
      <SiblingComponent2 sort={sort} users={users} updateUsers={setUsers} />
    </div>
  );
}

function SiblingComponent1({ sort }) {
  return (
    <div className="bg-white w-auto px-10 text-black-200">
      <p> Sort by {sort ? "Age" : "Name"} </p>
    </div>
  );
}

function SiblingComponent2({ sort, users, updateUsers }) {
  const sortUsersByAge = () => {
    const sortedUsers = [...users].sort((a, b) => a.age - b.age); 
    updateUsers(sortedUsers); 
  };

  // Function to sort users by name
  const sortUsersByName = () => {
    const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name)); 
    updateUsers(sortedUsers); 
  };

  useEffect(() => {
    if (sort) {
      sortUsersByAge();
    } else {
      sortUsersByName(); 
    }
  }, [sort]);

  return (
    <div className="p-4 bg-yellow-200 flex gap-1 flex-col items-start justify-start">
      <h1>Child State</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} , Age : {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
