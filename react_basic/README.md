React App with Vite

Introduction

This is a basic React application created using Vite. The purpose of this project is to demonstrate essential React concepts, including JSX, lists, routing, keys, props, forms, components, and conditional rendering.

Setup Instructions

Prerequisites

Ensure you have Node.js installed. You can download it from Node.js.

Installation

Create a new React project using Vite:

npm create vite@latest my-react-app --template react

Navigate to the project folder:

cd my-react-app

Install dependencies:

npm install

Start the development server:

npm run dev

History of React

React was developed by Facebook (now Meta) and released in 2013. It was created to improve the performance and maintainability of complex user interfaces. React introduced a component-based architecture that allows developers to build reusable UI components efficiently. Over time, React has grown in popularity and has become a leading JavaScript library for building modern web applications.

React Concepts

JSX (JavaScript XML)

JSX is a syntax extension for JavaScript that looks similar to HTML but is used to describe UI elements in React. It allows developers to write components in a declarative way.

const element = <h1>Hello, React!</h1>;

Lists and Keys

Lists in React are used to display multiple elements dynamically. Keys help React identify which items have changed, are added, or are removed.

const items = ['Apple', 'Banana', 'Orange'];
return (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

Routing

React Router is used for navigation between different pages in a React app.

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
export default App;

Props (Properties)

Props allow components to receive data from their parent components.

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

<Greeting name="John" />

Forms in React

Forms in React use controlled components where form elements are controlled by React state.

import { useState } from 'react';

function MyForm() {
  const [inputValue, setInputValue] = useState('');
  
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted: ${inputValue}`);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

Components

Components are the building blocks of a React application. They can be functional or class-based.

function Welcome() {
  return <h1>Welcome to React!</h1>;
}

Conditional Rendering

Conditional rendering in React allows rendering elements based on conditions.

function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>;
}

Conclusion

This project provides a basic introduction to React with Vite, covering fundamental concepts. You can further explore state management, hooks, and advanced topics to build more complex applications.