import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
// import Input from 'react-bootstrap/InputGroup';






const Com = () => {
    const navigate = useNavigate()
    function Post(){
      console.log(Username,Email,Password)
      const requestOptions = {
        method: 'POST',
        headers: {'accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "username":Username,
          "email": Email,
          "password": Password
        })
    };
    fetch('http://192.168.1.12:5000/api/users/register', requestOptions)
    .then(data=>{
          // setData(data)
          console.log(data)
          console.log(data.statusText)
          console.log(data.status)
          const returnedstatus = data.statusText;
        })
    
        // .then(data => this.setState({ postId: data.id }));
          
    
    
    }



    const [Username, setUsername] = useState([{}])
    const [Email, setEmail] = useState([{}])
    const [Password, setPassword] = useState([{}])



  // useEffect(()=>{
    // fetch("http://192.168.1.12:5000/api/users/register").then(response=>{
    // console.log(response)
    // // return response  
    // // response=>res.json()
    // }).then(
    //   data=>{
    //     setData(data)
    //     console.log(data)
    //   }
    // )
    // Simple POST request with a JSON body using fetch
  //   const requestOptions = {
  //       method: 'POST',
  //       headers: {'accept': 'application/json', 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         "username": "rrdfffdfd",
  //         "email": "owdfdffens@rr.rr",
  //         "password": "boodffdtylovhjkdfgsdssd444fghfgdfger69"
  //       })
  //   };
  //   fetch('http://192.168.1.12:5000/api/users/register', requestOptions)
  //   .then(data=>{
  //         // setData(data)
  //         console.log(data)
  //       })

  //       // .then(data => this.setState({ postId: data.id }));
  // }, []  )


  return (
    <div className="App">
      <header className="App-header">
        <Button onClick = {()=> navigate("/")}>Go Home</Button>
        <input className = "form-control" style={{width:"200px", margin:"20px"}} placeholder="Username" onChange={(text)=>{setUsername(text.target.value)}}></input>
        <input className = "form-control" style={{width:"200px", margin:"20px"}} placeholder="Email" onChange={(text)=>{setEmail(text.target.value)}}></input>
        <input className = "form-control" style={{width:"200px", margin:"20px"}} placeholder="Password" onChange={(text)=>setPassword(text.target.value)}></input>
        <button class="btn" onClick = {Post} type="button" className="btn btn-primary">Register</button>
        
        
        

      </header>
    </div>
  );
}

export default Com;



