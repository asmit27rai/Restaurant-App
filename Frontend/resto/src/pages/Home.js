import React from "react"
import Navbar from '../components/Navbar';
import MainP from '../components/MainP';
import Body from '../components/Body';
import Foot from '../components/Foot';
const Home = ()=> {
    return (
    <>
      <Navbar />
      <MainP />
      <h1 style={{textAlign:"center"}} className="shadow-sm p-3 mb-5 bg-white rounded"><u>LET'S LOOK AT THE DELICIOUS DISHES TO ORDER</u></h1>
      <Body />
      <Foot />
    </>
    );
}

export default Home