import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <p>Users : {users.length}</p>
      <div>
        {users.map((user) => (
          <p key={user._id}>{user.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Users;
