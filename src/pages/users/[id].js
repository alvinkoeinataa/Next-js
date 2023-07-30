import axios from "axios";
import React from "react";

const UsersDetails = ({ user }) => {
  console.log(user);
  return (
    <div className="max-w-screen-xl mx-auto h-screen flex item-center justify-center gap-4">
      <h1 className="text-xl fontbold">{user.name}</h1>
      <p className="text-base">{user.username}</p>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const data = await res.data;
  return {
    props: { user: data },
  };
}

export default UsersDetails;
