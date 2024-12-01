import React, { useState } from "react";

export default function DerivedState() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      age: 30,
    },
    {
      id: 2,
      name: "Jatin Sharma",
      age: 33,
    },
    {
      id: 3,
      name: "Vishnu Chomal",
      age: 27,
    },
  ]);

  const totalUser = users.length;

  const averageAge = users.reduce((acc, user) => acc + user.age, 0) / totalUser;

  console.log(users);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}> {user.name} </li>
        ))}
      </ul>
      <br />
      <p>Total users: {totalUser} </p>
      <br />
      <p>Average Age: {averageAge} </p>
    </div>
  );
}
