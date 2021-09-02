import React from "react";
import "./Users.css";

const Users = ({ users, posts }) => {
  return (
    <div className="Users">
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <h3>{user.name}</h3>
              <h3>{user.email}</h3>
              {posts.map((post) => {
                if (user.id === post.userId) {
                  return (
                    <div key={post.id}>
                      <h4>{post.title}</h4>
                      <p>{post.body}</p>
                    </div>
                  );
                }
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
