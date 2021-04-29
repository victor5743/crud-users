const UsersList = ({ users }) => {
  const usersList = users.map((user) => {
    return (
      <li
        className="bg-white p-4 rounded-lg mt-4 shadow-lg scale cursor-pointer w-64"
        key={user.id}
      >
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
      </li>
    );
  });

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold">Users list</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {usersList}
      </ul>
    </div>
  );
};

export default UsersList;
