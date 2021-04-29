import axios from 'axios';
import { useEffect, useState } from 'react';
import UsersList from './components/UsersList';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center space-y-6 py-6 min-h-screen bg-gray-100 text-text">
      <h1 className="font-semibold text-4xl text-center">Crud - Users</h1>

      {/* Link to create a new user */}
      <a
        href="#"
        className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-lg scale"
      >
        <svg
          className="h-6 w-6 text-gray-700 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
        </svg>
        <p>Add new user</p>
      </a>

      {/* Users list */}
      {users && <UsersList users={users} />}
    </div>
  );
};

export default App;
