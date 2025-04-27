"use client";
import React from "react";
import UserList from "../components/userJSON/UserList";
import UserListaxios from "../components/axiosUserData/UserList"

function AllUsers() {
  return (
    <div>
      <div>
        <UserList />
      </div>
      <div>
        <p>using axios</p>
        <UserListaxios />
      </div>
    </div>
  );
}

export default AllUsers;
