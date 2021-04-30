import axios from 'axios';
import { useEffect, useState } from 'react';
import Home from './views/Home';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import AddUser from './views/AddUser';
import UserDetails from './views/UserDetails';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setUsers(res.data);
    });
  }, []);

  /* Delete user from list */
  const deleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <div className="flex flex-col items-center space-y-6 py-6 min-h-screen bg-gray-100 text-text">
      <Router>
        {/* Title */}
        <Link to="/" className="font-semibold text-5xl text-center">
          Crud - Users
        </Link>

        {/* Routes */}

        <Switch>
          <Route exact path="/">
            <Home users={users} deleteUser={deleteUser} />
          </Route>
          <Route path="/new-user">
            <AddUser />
          </Route>
          <Route path="/user/details/:id">
            <UserDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
