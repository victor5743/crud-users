import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  const getData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      const newUser = [...user, res.data];
      setUser(newUser);
    });
  };

  useEffect(() => {
    getData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const printUser = user.map((item, index) => {
    return (
      <li key={index}>
        <p>
          <span className="font-bold">Name:</span> {item.name}
        </p>
        <p>
          <span className="font-bold">Username:</span> {item.username}
        </p>
        <p>
          <span className="font-bold">Email:</span> {item.email}
        </p>
        <p>
          <span className="font-bold">Phone:</span> {item.phone}
        </p>
        <p>
          <span className="font-bold">Street:</span> {item.address.street}
        </p>
        <p>
          <span className="font-bold">City:</span> {item.address.city}
        </p>
      </li>
    );
  });

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold mb-2">User details</h2>

      <ul>{printUser}</ul>
    </div>
  );
};

export default UserDetails;
