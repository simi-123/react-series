import { useEffect , useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON from response
      })
      .then((data) => {
        setTodos(data); // Log the fetched data to see if it works
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <>
  <h1>Hi, This is React</h1>
  
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Completed</th>
      </tr>
    </thead>
    <tbody>
      {todos.map((todo) => (
        <tr key={todo.id}>
          <td>{todo.id}</td>
          <td>{todo.title}</td>
          <td>{todo.completed ? 'True' : 'false'}</td>
        </tr>
      ))}
    </tbody>
  </table>
</>
  );
}

export default App;
