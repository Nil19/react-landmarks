import React from 'react'
import Card from "./components/Card.jsx"
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Landmarks</h1>
      <h2>Click on the card to learn more about the landmark</h2>
      <Card frontSide="London" backSide="Buckingham Palace"/>
      <Card frontSide="Manchester" backSide="Old Trafford"/>
      <Card frontSide="Liverpool" backSide="Royal Albert Hall"/>
      <Card frontSide="Bath" backSide="Roman Baths"/>
      <Card frontSide="Cornwall" backSide="Eden Project"/>
      <Card frontSide="Wales" backSide="Snowdonia National Park"/>

    </div>
  )
}

export default App
