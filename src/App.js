import { useState } from 'react';
import UsersList from './components/UsersList';

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Luis',
      username: 'Bret',
      phone: '1-770-736-8031 x56442',
      email: 'correo1@example.com',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
    },
    {
      id: 2,
      name: 'Maria',
      username: 'Antonette',
      phone: '1-770-36-8031 x56442',
      email: 'correo2@example.com',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
    },
    {
      id: 3,
      name: 'Pedro',
      username: 'Pedro123',
      phone: '1-70-736-8031 x56442',
      email: 'correo3@example.com',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
    },
    {
      id: 4,
      name: 'Mario',
      username: 'Mario123',
      phone: '1-770-736-8031 x6442',
      email: 'correo4@example.com',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
    },
    {
      id: 5,
      name: 'Ana',
      username: 'Ana123',
      phone: '1-770-76-8031 x56442',
      email: 'correo5@example.com',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
    },
    {
      id: 6,
      name: 'Lucia',
      username: 'Lucia123',
      phone: '1-770-736-8031 x5642',
      email: 'correo6@example.com',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
    },
  ]);

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
      <UsersList users={users} />
    </div>
  );
};

export default App;
