import UsersList from '../components/UsersList';
import { Link } from 'react-router-dom';

const Home = ({ users, deleteUser }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Link to create a new user */}
      <Link
        to="/new-user"
        className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-lg scale mb-4"
      >
        <svg
          className="h-6 w-6 text-gray-700 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
        </svg>
        <p>Add new user</p>
      </Link>

      {/* Users list */}
      {users && <UsersList users={users} deleteUser={deleteUser} />}
    </div>
  );
};

export default Home;
