import React from 'react';
import './App.css';
import Hello from './Hello';

function App({name, age}) {
return <div> hello from app.js<strong> {name}</strong> age = {age - 8}
<br/>
<h2>An Unordered HTML List</h2>

<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>  

<h2>An Ordered HTML List</h2>

<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol> 

<Hello firstName={name} ></Hello>

</div>
}

export default App;
