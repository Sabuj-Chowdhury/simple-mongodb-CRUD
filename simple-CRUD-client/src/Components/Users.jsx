import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();

  const handleDelete = (_id) => {
    console.log("delete id : ", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("user deleted!");
        }
      });
  };
  return (
    <div>
      <p>Users : {users.length}</p>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email} .. ID:{user._id}
            <button onClick={() => handleDelete(user._id)} className="btn ml-3">
              X
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
