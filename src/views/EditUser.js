import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const EditUser = ({ edit }) => {
  let history = useHistory();
  const { id } = useParams();

  /* State */
  const [user, setUser] = useState([]);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');

  const getData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      const newUser = [...user, res.data];
      setUser(newUser);
    });
  };

  useEffect(() => {
    getData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id, name, username, email, phone, address: { street, city } };
    edit(newUser);
    history.push('/');
  };

  return (
    <div>
      {user.map((item, index) => {
        return (
          <form
            onSubmit={(e) => handleSubmit(e)}
            key={index}
            className="flex flex-col space-y-2 bg-white p-4 rounded-lg"
          >
            <div className="flex flex-col">
              <label className="font-bold">Name:</label>
              <input
                className="px-2 py-1 rounded-lg text-lg bg-gray-100 border border-tranparent focus:border-gray-400 focus:outline-none"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold">Username:</label>
              <input
                className="px-2 py-1 rounded-lg text-lg bg-gray-100 border border-tranparent focus:border-gray-400 focus:outline-none"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold">Email:</label>
              <input
                className="px-2 py-1 rounded-lg text-lg bg-gray-100 border border-tranparent focus:border-gray-400 focus:outline-none"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold">Phone:</label>
              <input
                className="px-2 py-1 rounded-lg text-lg bg-gray-100 border border-tranparent focus:border-gray-400 focus:outline-none"
                type="number"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold">Street:</label>
              <input
                className="px-2 py-1 rounded-lg text-lg bg-gray-100 border border-tranparent focus:border-gray-400 focus:outline-none"
                type="text"
                onChange={(e) => setStreet(e.target.value)}
                value={street}
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold">City:</label>
              <input
                className="px-2 py-1 rounded-lg text-lg bg-gray-100 border border-tranparent focus:border-gray-400 focus:outline-none"
                type="text"
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </div>

            <div className="flex justify-center mt-4">
              <button className="bg-green-500 focus:outline-none text-white px-2 py-1 rounded-lg scale">
                Update
              </button>
            </div>
          </form>
        );
      })}
    </div>
  );
};

export default EditUser;
