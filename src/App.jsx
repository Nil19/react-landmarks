import React from 'react'
import Card from "./components/Card.jsx"
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Landmarks</h1>
      <h2>Click on the card to learn about a landmark in that city </h2>
    
      <div className='parent-card-div'>

      <div className='child-card-div'>
      <Card frontSideTitle="London"  backSideTitle="Buckingham Palace" frontSideImage={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Coat_of_Arms_of_The_City_of_London.svg/330px-Coat_of_Arms_of_The_City_of_London.svg.png"} backSideImage={"https://cdn.pixabay.com/photo/2016/10/05/02/08/buckingham-1715907_1280.jpg"} backSideText="Buckingham Palace is the royal residence of King Charles. It is located in the City of Westminister, the palace was built in 1703 and designed by William Winde in Neoclassical style."/>
      <Card frontSideTitle="Manchester" backSideTitle="Old Trafford" frontSideImage={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Arms_of_the_Manchester_City_Council.svg/1200px-Arms_of_the_Manchester_City_Council.svg.png"} backSideImage={"https://www.si.com/.image/t_share/MTkxMTk2ODg3MjA5MzU0NDc1/imago1011329909h.jpg"}backSideText="Old Trafford football stadium un the home of Manchester United. With a capacity of 74,310 it is now the largest in the UK. Originally built in the 1910. Famous players include David Beckham and Ronaldo."/>
      <Card frontSideTitle="Liverpool" backSideTitle="Liver Building" frontSideImage={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Coat_of_arms_of_Liverpool_City_Council.svg/939px-Coat_of_arms_of_Liverpool_City_Council.svg.png"} backSideImage={"https://upload.wikimedia.org/wikipedia/commons/e/ea/The_Royal_Liver_Buildings_-_geograph.org.uk_-_526323.jpg"}backSideText="The majestic Liver Building is part of the city's waterfront alongside the Cunard and Port of Liverpool. They are known as the three graces. It was build in 1908 and has been used as a backdrop for many movies including Batman."/>
      </div>

      <div className='child-card-div'>
      <Card frontSideTitle="Bath" backSideTitle="Roman Baths" frontSideImage={"https://mayorofbath.co.uk/wp-content/uploads/2020/09/logo.png"} backSideImage={"https://www.misstravelclogs.com/wp-content/uploads/2021/04/visit-roman-baths-bath-england-1.jpg"} backSideText="The Roman Baths are well-preserved baths in the city of Bath. A temple was constructed on the site between 60 and 70 AD in the first few decades of Roman Britain. Its presence led to the development of the small Roman urban settlement."/>
      <Card frontSideTitle="Cornwall" backSideTitle="Eden Project" frontSideImage={"https://www.heraldry-wiki.com/heraldrywiki/images/9/95/Cornwall.jpg"} backSideImage={"https://upload.wikimedia.org/wikipedia/commons/7/75/Eden_project.JPG"} backSideText="Dubbed the Eighth Wonder of the World by some, Eden is a dramatic global garden housed in tropical biomes that nestle in a crater the size of 30 football pitches."/>
      <Card frontSideTitle="Cardiff" backSideTitle="Cardiff Castle" frontSideImage={"https://upload.wikimedia.org/wikipedia/commons/f/fe/Coat_of_Arms_of_Cardiff_with_transparent_background.png"} backSideImage={"https://i2-prod.walesonline.co.uk/special-features/article24046213.ece/ALTERNATES/s615b/0_Castle6CardiffCastle-Exterior41-hi-A0013928.jpg"} backSideText="Cardiff Castle is a medieval castle and Victorian Gothic revival mansion located in the city centre of Cardiff, Wales. The original motte and bailey castle was built in the late 11th century by Norman invaders."/>
      </div>

      </div>

    </div>
  )
}

export default App