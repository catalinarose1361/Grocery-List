import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Checkbox } from 'antd';


function App() {
  const [groceries, setGroceries] = useState([
    {
      item: '',
      amount: '',
      category: '',
    }
  ])

  const [grocery, setGrocery] = useState(
    {
      item: '',
      amount: '',
      category: '',
    }
  )

    //fetch the data from the route and return a json
    useEffect(() => {
      fetch('/groceries').then(res => {
        if(res.ok) {
          return res.json()
        }
        //take json response and set state equal to the json response
      }).then(jsonRes => setGroceries(jsonRes))
    })
   
    function handleChange(e) {
      //deconstruct the event
      const {name, value} = e.target;

      setGrocery(prevInput => {
        return(
          {
            ...prevInput,
            [name]: value
            
          }
        )
      })
    }

  function addGrocery(e) {
    e.preventDefault();

    const newGrocery = {
      item: grocery.item,
      amount: grocery.amount,
      category: grocery.category
    }

    axios.post('/newgrocery', newGrocery)
    alert("Grocery Item Added To List");
  }

  function deleteGrocery(id) {
    axios.delete('/delete/' + id);
    alert("Grocery Item Deleted From List")
  }

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <div className="App">
      <h1>ADD ITEM TO GROCERY LIST</h1>
      <form>
        <input onChange={handleChange} name="item" value={grocery.item}></input>
        <input onChange={handleChange} name="amount" value={grocery.amount}></input>
        <input onChange={handleChange} name="category" value={grocery.category}></input>
        <button onClick={addGrocery}>ADD ITEM</button>
      </form>
      {groceries.map(grocery => {
        return (
        <div>
          <Checkbox onChange={() => deleteGrocery(grocery._id)}></Checkbox>
          <h1>{grocery.item}</h1>
          <p>{grocery.amount}</p>
          <p>{grocery.category}</p>
          {/* <button onClick={() => deleteGrocery(grocery._id)}>DELETE</button> */}

        </div>
        )
      })}
    </div>
  );
}

export default App;
