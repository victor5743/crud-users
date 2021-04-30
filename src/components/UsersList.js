import { Link } from 'react-router-dom';

const UsersList = ({ users, deleteUser }) => {
  const usersList = users.map((user) => {
    return (
      <div
        key={user.id}
        className="bg-white p-4 rounded-lg mt-4 shadow-lg cursor-pointer w-72"
      >
        <Link to={`/user/details/${user.id}`}>
          <p>
            <span className="font-bold">Name:</span> {user.name}
          </p>
          <p>
            <span className="font-bold">Username:</span> {user.username}
          </p>
          <p>
            <span className="font-bold">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-bold">Phone:</span> {user.phone}
          </p>
          <p>
            <span className="font-bold">Street:</span> {user.address.street}
          </p>
          <p>
            <span className="font-bold">City:</span> {user.address.city}
          </p>
        </Link>
        <button
          onClick={() => deleteUser(user.id)}
          className="bg-red-500 text-white px-2 py-1 rounded-lg mt-2 focus:outline-none scale"
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold">Users list</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        {usersList}
      </div>
    </div>
  );
};

export default UsersList;
