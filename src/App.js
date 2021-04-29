import axios from 'axios';
import { useEffect, useState } from 'react';
import Home from './views/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddUser from './views/AddUser';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center space-y-6 py-6 min-h-screen bg-gray-100 text-text">
      {/* Title */}
      <h1 className="font-semibold text-5xl text-center">Crud - Users</h1>

      {/* Routes */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Home users={users} />
          </Route>
          <Route path="/new-user">
            <AddUser />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
