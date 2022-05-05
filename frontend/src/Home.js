
import React, { Component, useEffect, useState } from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Com from './com';
// import Route from 'react';
import { useNavigate } from "react-router-dom";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import realcookie from "./realcookie.png";
import TestGrid from "./grid";
import munch from "./munch.mp3";
// import Input from "react-bootstrap/Input";
import Cookies from "js-cookie";
import Login from "./login";


// function incrementValue() {
//   const AudioMunch = new Audio(munch)
//   setCookie(cookiecount++)
// var value = parseInt(document.getElementById('number').value, 10);
// value = isNaN(value) ? 0 : value;
// value++;
// document.getElementById('number').value = value;
// AudioMunch.play();

// function Cost_Calculate(x){
//18 total upgrades exist
//   Price = Base_Cost * 1.15^Amount_Owned
//   return Price
// }
var upgrade_array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const Home = () => {

  // const [soft_upgrade_array, setUA] = useState(upgrade_array);
  // const Change_UA = () => {
  // }


  const AudioMunch = new Audio(munch)
  var [fishcount, setFish] = useState(0)
  useEffect(()=>{
    const s_interval=setInterval(() => {
      //set
      // console.log("sex")
      
      setFish(fishcount+((CPS/100)*1.33))
      console.log(fishcount)

    } , 10 );
    return () => clearInterval(s_interval);
  },[fishcount]);


  // var upgrade_array = []
  // var upgrade_array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // const upgrade_array = [];
  // console.log(upgrade_array)
  // console.log(length(upgrade_array))
  // const buffer = new ArrayBuffer(8);
  // const uint8 = new Uint8Array(buffer);

  const upgrade1 = { index: 0, Name: "scrub", BaseCost: 15, BaseCPS: .1 }
  const upgrade2 = { index: 1, Name: "grandma", BaseCost: 100, BaseCPS: 1 }
  const upgrade3 = { index: 2, Name: "U3", BaseCost: 1100, BaseCPS: 8 }
  const upgrade4 = { index: 3, Name: "U4", BaseCost: 12000, BaseCPS: 47 }
  const upgrade5 = { index: 4, Name: "U5", BaseCost: 130000, BaseCPS: 260 }
  const upgrade6 = { index: 5, Name: "U5", BaseCost: 1400000, BaseCPS: 1400 }
  const upgrade7 = { index: 6, Name: "U5", BaseCost: 20000000, BaseCPS: 7800 }
  const upgrade8 = { index: 7, Name: "U5", BaseCost: 300000000, BaseCPS: 44000 }
  const upgrade9 = { index: 8, Name: "U5", BaseCost: 130000, BaseCPS: 260 }
  const upgrade10 = { index: 9, Name: "U5", BaseCost: 130000, BaseCPS: 260 }
  const upgrade11 = { index: 10, Name: "U5", BaseCost: 130000, BaseCPS: 260 }
  const upgrade12 = { index: 11, Name: "U5", BaseCost: 130000, BaseCPS: 260 }
  const upgrade13 = { index: 12, Name: "U5", BaseCost: 130000, BaseCPS: 260 }
  const upgrade14 = { index: 13, Name: "U5", BaseCost: 130000, BaseCPS: 260 }
  const upgrade15 = { index: 14, Name: "U5", BaseCost: 130000, BaseCPS: 260 }
  const upgrade16 = { index: 15, Name: "U5", BaseCost: 130000, BaseCPS: 260 }
  const upgrade17 = { index: 16, Name: "U5", BaseCost: 130000, BaseCPS: 260 }
  const upgrade18 = { index: 17, Name: "U5", BaseCost: 130000, BaseCPS: 260 }

  const cps_array = [upgrade1.BaseCPS, upgrade2.BaseCPS, upgrade3.BaseCPS, upgrade4.BaseCPS, upgrade5.BaseCPS, upgrade6.BaseCPS]



  function Reset_Array() {
    upgrade_array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    console.log(upgrade_array)
    Cookies.set("UA", upgrade_array)
  }

  function Load_Fish() {
    var loaded_fish = Cookies.get("Fish_Count")
    var loaded_fish_int = parseInt(loaded_fish)

    setFish(loaded_fish_int)
    console.log("Loaded in Fish: ", loaded_fish_int)
  }

  function Load_UA() {
    var loaded_UA = Cookies.get("UA")
    console.log(loaded_ua_array)
    var loaded_ua_array = loaded_UA.split(",")
    var numberArray = []


    for (var i = 0; i < 18; i++)
      numberArray.push(parseInt(loaded_ua_array[i]));
    // Instead of parseInt(), Number()
    // can also be used
    // console.log(numberArray[i])
    // if (isNaN(numberArray[i])) numberArray[i]=0;


    var fixed_array = [];
    numberArray.forEach((e) => !isNaN(e) ? fixed_array.push(e) : fixed_array.push(0))
    upgrade_array = fixed_array

    console.log("Loaded in Upgrades: ", upgrade_array)
  }


  window.onload = function () {
    Load_Fish();
    Load_UA();
  }


  function incrementValue() {
    const AudioMunch = new Audio(munch)
    // AudioMunch.play();
    value = isNaN(value) ? 0 : value;
    var value = fishcount + 1
    
    console.log("Current Value: ", value)
    setFish(value)
    // console.log(fishcount)
    Cookies.set("Fish_Count", value)
    // console.log(Cookies.get("Fish_Count"))
    // document.getElementById("number").value = fishcount
  }


  function reset_fish() {
    setFish(0)
    Cookies.set("Fish_Count", 0)
  }


  function buybutton_display(x) {
    if (True_Cost(x) <= fishcount) {
      return (
        <button onClick={() => buyentity(x)} class="btn" type="button" className="btn btn-primary">Buy!</button>
      );
    }

  }

  function fish_deduct(x) {

    var value = fishcount - True_Cost(x)

    setFish(value)
    Cookies.set("Fish_Count", value)

  }


  function Upgrade_Func(x) {
    if (x == upgrade1 || upgrade_array[x.index - 1] >= 1) {
      return (
        <div id="parent">
          <div class="child">
            {buybutton_display(x)}
            {/* <button onClick={() => buyentity(x)} class="btn" type="button" className="btn btn-primary">Buy!</button> */}
          </div>
          <div class="child"> <input class="buycounter" type="text" id={x.Name} value={upgrade_array[x.index]} /> </div>
          <div class="child"> {x.Name} </div>
          <div class="child"> {True_Cost(x)} </div>
          <div class="child"> {x.BaseCPS} </div>
        </div>
      );
    }
  }

  function buyentity(x) {
    fish_deduct(x);
    // var value = x.BaseCost;
    var value = upgrade_array[x.index]
    value++;
    document.getElementById(x.Name).value = value;

    upgrade_array[x.index] = value;
    console.log(upgrade_array)
    Cookies.set("UA", upgrade_array)
  }

  function True_Cost(x) {
    // 18 total upgrades exist
    // console.log("base cost: ",x.BaseCost)
    var AmountOwned = upgrade_array[x.index]
    // console.log(AmountOwned)
    var secondhalf = (Math.pow(1.15, AmountOwned))
    // console.log(secondhalf)

    var Price = x.BaseCost * secondhalf
    // console.log(Price)
    return Math.round(Price)
  }

  // console.log(True_Cost(upgrade1))




  // window.setInterval(
  //   function () {
  //     fishcount = fishcount + CPS;
  //     // setFish(newcount)
  //     // var fishbox = document.getElementById("number").value
      
  //   }, 1000);


    // var x = setInterval(function() {


      
    //   document.getElementById("number").innerHTML = fishcount+CPS

    // },1000);




  var CPS_Total_Array_Raw = []
  for (let i = 0; i < 18; i++) {
    CPS_Total_Array_Raw.push(upgrade_array[i] * cps_array[i])
  }


  var CPS_Total_Array = [];
  CPS_Total_Array_Raw.forEach((e) => !isNaN(e) ? CPS_Total_Array.push(e) : CPS_Total_Array.push(0))

  // console.log(
  // [1, 2, 3, 4].reduce((a, b) => a + b, 0)
  // )

  // console.log(CPS_Total_Array)

  var CPS = CPS_Total_Array.reduce((a, b) => a + b, 0)



  // console.log(CPS);


  return (
    <header className="App-header">
      <div class="container-fluid">
        <div class="row" style={{ height: "95vh" }}>

          <div class="col align-items-center center-block d-flex" style={{ background: "beige", justifyContent: "center" }}>

            <div>

              <input className="CPSCounter" type="text" value={CPS.toFixed(1)} />
              <input class="CookieCounter" type="text" id="number" value={fishcount.toFixed(0)} />
              <button className="btnC" onClick={incrementValue}><img src={realcookie} className="Hentai-logo" alt="logo" /></button>

            </div>


          </div>
          <div class="col" style={{ background: "grey", justifyContent: "center" }}>

            {Upgrade_Func(upgrade1)}
            {Upgrade_Func(upgrade2)}
            {Upgrade_Func(upgrade3)}
            {Upgrade_Func(upgrade4)}
            {Upgrade_Func(upgrade5)}
            {Upgrade_Func(upgrade6)}
            {Upgrade_Func(upgrade7)}
            {Upgrade_Func(upgrade8)}
            {Upgrade_Func(upgrade9)}
            {Upgrade_Func(upgrade10)}
            {Upgrade_Func(upgrade11)}
            {Upgrade_Func(upgrade12)}
            {Upgrade_Func(upgrade13)}
            {Upgrade_Func(upgrade14)}
            {Upgrade_Func(upgrade15)}
            {Upgrade_Func(upgrade16)}
            {Upgrade_Func(upgrade17)}
            {Upgrade_Func(upgrade18)}

          </div>
          </div>
          <div class="row" style={{ height: "5vh" }}>
          <div className="col" style={{ background: "blue", justifyContent: "center" }}>
                <Link to="/" className="btn">Home</Link>
                <Link className="btn" to="/Com">Register</Link>
                <Link className="btn" to="/login">Login</Link>
                <Link className="btn" to="/grid">TestGrid</Link>

                <button onClick={() => reset_fish()} class="btn" type="button" className="btn btn-primary">Reset Cookies</button>
                <button onClick={() => Reset_Array()} class="btn" type="button" className="btn btn-primary">Reset Upgrade Array</button>
          </div>




        </div>
      </div>
    </header>
  );
};

export default Home;








