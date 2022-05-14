import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Form from './components/Form';

function App() {
  const expense = [
    {
      id: 1,
      title:"ToiletPaper",
      subtitle:"About us sir",
      amount: 94,
      date: 4566,
      paragrah: "Lorem ipsum dolor sit ipsum",
    },
    {
      id: 2,
      title:"ToiletPaper2",
      amount: 94,
      date: 456789,
      paragrah: "My message here"
    },
  ]
  return (
    <div className="App">
      <div>
      <Form />
      <ExpenseItem title={expense[0].title} subtitle={expense[0].subtitle} amount={expense[0].amount} date={expense[0].date} paragrah={expense[0].paragrah} />
      <ExpenseItem title={expense[1].title} subtitle={expense[1].subtitle} amount={expense[1].amount} date={expense[1].date} paragrah={expense[1].paragrah} />
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
