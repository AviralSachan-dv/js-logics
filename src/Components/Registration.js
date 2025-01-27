import React, { useState, useEffect } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); 
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email) {
      const newEntry = { name, email };
      setIsLoading(true); 
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newEntry),
        });
        const result = await response.json();
        setData([...data, result]);
        setName('');
        setEmail('');
      } catch (error) {
        console.error('Error adding data:', error);
      } finally {
        setIsLoading(false); 
      }
    }
  };

  const handleDelete = async (id) => {
    setIsLoading(true); 
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      const updatedData = data.filter((entry) => entry.id !== id);
      setData(updatedData);
    } catch (error) {
      console.error('Error deleting data:', error);
    } finally {
      setIsLoading(false); 
    }
  };

  const handleEdit = async (id) => {
    const entryToEdit = data.find((entry) => entry.id === id);
    setName(entryToEdit.name);
    setEmail(entryToEdit.email);
    handleDelete(id); 
  };

  return (
    <div>
      <h1>CRUD Operations with Dummy API</h1>

      {isLoading && <div className="loader">Loading...</div>} 

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Entry</button>
      </form>

      <h2>Entries</h2>

      {data.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>
                  <button onClick={() => handleEdit(entry.id)}>Edit</button>
                  <button onClick={() => handleDelete(entry.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No entries available</p>
      )}
    </div>
  );
};

export default App;