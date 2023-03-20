import React from 'react'
import Card from "./components/Card.jsx"
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Landmarks</h1>
      <h2>Click on the card to learn more about the landmark</h2>

      <div className='parent-card-div'>

      <div className='child-card-div'>
      <Card frontSideTitle="London"  backSideTitle="Buckingham Palace" frontSideImage={"https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg"} backSideImage={""} />
      <Card frontSideTitle="Manchester" backSideTitle="Old Trafford" frontSideImage={""} backSideImage={""}/>
      <Card frontSideTitle="Liverpool" backSideTitle="Royal Albert Hall" frontSideImage={""} backSideImage={""}/>
      </div>

      <div className='child-card-div'>
      <Card frontSideTitle="Bath" backSideTitle="Roman Baths" frontSideImage={""} backSideImage={""}/>
      <Card frontSideTitle="Cornwall" backSideTitle="Eden Project" frontSideImage={""} backSideImage={""}/>
      <Card frontSideTitle="Wales" backSideTitle="Snowdonia National Park" frontSideImage={""} backSideImage={""}/>
      </div>

      </div>

    </div>
  )
}

export default App
