import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [groceries, setGroceries] = useState([
    {
      item: '',
      amount: '',
      category: '',
    }
  ])

    //fetch the data from the route and return a json
    useEffect(() => {
      fetch('/groceries').then(res => {
        if(res.ok) {
          return res.json()
        }
        //take json response and set state equal to the json response
      }).then(jsonRes => setGroceries(jsonRes))
    })
    
  return (
    <div className="App">
      {groceries.map(grocery => {
        return (
        <div>

          <h1>{grocery.item}</h1>
          <p>{grocery.amount}</p>
          <p>{grocery.category}</p>
          <button>DELETE</button>
        </div>
        )
      })}
    </div>
  );
}

export default App;
