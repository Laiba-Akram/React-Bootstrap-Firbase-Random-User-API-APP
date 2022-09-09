import '../App.css';
import React,{useState} from 'react';
import {Button} from 'react-bootstrap';
import {Form,Alert} from 'react-bootstrap';
import { Link ,useNavigate} from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { Container,Row,Col } from 'react-bootstrap';
import {useUserAuth} from '../context/UserAuthContext';
import './Login.css';
const  Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
const {logIn,googleSignIn} = useUserAuth();
const navigate = useNavigate();
  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
 try{
  await logIn(email,password);
  navigate("/Home");
 }catch (err) {
  setError(err.message);
 }
 };
 const handleGoogleSignIn = async (e) => {
  e.preventDefault();
  setError("");
  try{
await googleSignIn();
 navigate("/Home");
  }catch (err){
    setError(err.message);
  }
 }



  return (
  <div className='bgimg'>
 <div className="hero"> 
  </div>
  
      <Container className='dfg'>
        {error && <Alert variant="danger" >{error}</Alert>} 
        <Row>
          

        <Form onSubmit={handleSubmit}>
          <Col>
          <Form.Group className="mb-3 pt-5"  controlId="formBasicEmail">
        <Form.Label className='text-white'>Email address</Form.Label>
        <Form.Control  className="border border-0 bg-transparent border-bottom text-white" type="email" placeholder="Enter email" 
        onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
          </Col>
      <Col >
       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-white'>Password</Form.Label>
        <Form.Control  className="border border-0 bg-transparent border-bottom text-white" type="password" placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      </Col>
     <Col >
      <div className="form-group text-center">

      <Button variant='primary' type='Submit'>Submit</Button>
          </div>
     
     </Col>
       
     <hr/>

     <Col align="center">
     
         <div className="mb-3">  
      <GoogleButton className="g-btn" type="dark" onClick={handleGoogleSignIn} />
     </div>
     
     </Col>
 <Col align="center">
<p>Don't have an account? <Link to="/Signup" >Sign up now</Link></p>

 </Col>
            
       
   </Form>  </Row>
     </Container>
   
     </div>
  
  );
};  

export default Login;
