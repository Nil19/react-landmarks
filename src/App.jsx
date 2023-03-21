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
      <Card frontSideTitle="London"  backSideTitle="Buckingham Palace" frontSideImage={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Coat_of_Arms_of_The_City_of_London.svg/330px-Coat_of_Arms_of_The_City_of_London.svg.png"} backSideImage={"https://cdn.pixabay.com/photo/2016/10/05/02/08/buckingham-1715907_1280.jpg"} backSideText="London Info Here"/>
      <Card frontSideTitle="Manchester" backSideTitle="Old Trafford" frontSideImage={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Arms_of_the_Manchester_City_Council.svg/1200px-Arms_of_the_Manchester_City_Council.svg.png"} backSideImage={"https://www.si.com/.image/t_share/MTkxMTk2ODg3MjA5MzU0NDc1/imago1011329909h.jpg"}backSideText="Manchester Info Here"/>
      <Card frontSideTitle="Liverpool" backSideTitle="Liver Building" frontSideImage={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Coat_of_arms_of_Liverpool_City_Council.svg/939px-Coat_of_arms_of_Liverpool_City_Council.svg.png"} backSideImage={"https://upload.wikimedia.org/wikipedia/commons/e/ea/The_Royal_Liver_Buildings_-_geograph.org.uk_-_526323.jpg"}backSideText="Liverpool Info Here"/>
      </div>

      <div className='child-card-div'>
      <Card frontSideTitle="Bath" backSideTitle="Roman Baths" frontSideImage={"https://mayorofbath.co.uk/wp-content/uploads/2020/09/logo.png"} backSideImage={"https://www.misstravelclogs.com/wp-content/uploads/2021/04/visit-roman-baths-bath-england-1.jpg"}backSideText="Bath Info Here"/>
      <Card frontSideTitle="Cornwall" backSideTitle="Eden Project" frontSideImage={"https://www.heraldry-wiki.com/heraldrywiki/images/9/95/Cornwall.jpg"} backSideImage={"https://upload.wikimedia.org/wikipedia/commons/7/75/Eden_project.JPG"}backSideText="Cornwall Info Here"/>
      <Card frontSideTitle="Cardiff" backSideTitle="Cardiff Castle" frontSideImage={"https://upload.wikimedia.org/wikipedia/commons/f/fe/Coat_of_Arms_of_Cardiff_with_transparent_background.png"} backSideImage={"https://i2-prod.walesonline.co.uk/special-features/article24046213.ece/ALTERNATES/s615b/0_Castle6CardiffCastle-Exterior41-hi-A0013928.jpg"}backSideText="Carfiff Info Here"/>
      </div>

      </div>

    </div>
  )
}

export default App
