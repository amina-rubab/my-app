import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Hello.css'

function Hello({firstName}) {
return <p className = "myDesign">This is a paragraph in hello.js name: {firstName}</p>
}

export default Hello;
