import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
// import Input from 'react-bootstrap/InputGroup';









const Com = () => {



  const [ReturnDes, setDes] = useState()
  const [ReturnNum, setNum] = useState()

  const navigate = useNavigate()
  function Post() {
    console.log(Username, Email, Password)
    var post_data = JSON.stringify({
      "username": Username,
      "email": Email,
      "password": Password,
      "bankbalance": "4000"
    });
    const requestOptions = {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: post_data
    };
    fetch('http://192.168.1.12:5000/api/users/register', requestOptions)
      .then(data => {

        // const Results = JSON.parse(data);

        console.log(data)
        setDes(data.statusText)
        setNum(data.status)
        const returnedstatus = data.statusText;
        // console.log(Results)
      })

    // .then(data => this.setState({ postId: data.id }));



  }



  const [Username, setUsername] = useState([{}])
  const [Email, setEmail] = useState([{}])
  const [Password, setPassword] = useState([{}])




  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => navigate("/")}>Go Home</Button>
        <input className="form-control" style={{ width: "200px", margin: "20px" }} placeholder="Username" onChange={(text) => { setUsername(text.target.value) }}></input>
        <input className="form-control" style={{ width: "200px", margin: "20px" }} placeholder="Email" onChange={(text) => { setEmail(text.target.value) }}></input>
        <input className="form-control" style={{ width: "200px", margin: "20px" }} placeholder="Password" onChange={(text) => setPassword(text.target.value)}></input>
        <button class="btn" onClick={Post} type="button" className="btn btn-primary">Register</button>
        {ReturnDes}
        {ReturnNum}
        { }


      </header>
    </div>
  );
}

export default Com;



