import React, { useState } from "react";
import "./Login.css";
import useAuth from './../../hooks/useAuth';
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useHistory, useLocation } from "react-router";


const Login = () => {

  const [success, setSuccess] = useState("");
  const [showState, setShowState] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail]= useState("")
  const { googleSignIn,  loginWithEmail , setError, setUser, error, setIsLoading} = useAuth();
  const location = useLocation();
  const history = useHistory();

  const redirect_url = location?.state?.from || '/';

  // process login function 
  const processLogin = () => {
    loginWithEmail(email, password)
      .then(result => {
        setUser(result.user);
        setError("");
        history.push(redirect_url);
      }).catch(err => {
        if (err.message.includes("user-not-found")) {
          setError("Invalid Email and Password");
        }
    })
  }
// handle google sign in
const handleGoogleSignIn=()=>{
  setIsLoading(true);
  googleSignIn()
  .then((result) => {
    setUser(result.user);
    setError('');
    history.push(redirect_url);
  })
  .catch((error) => {
    setError(error.message);
  })
  .finally(() => setIsLoading(false));
}


// handle login submit 
  const handleSubmit = (e) => {
    e.preventDefault();
    processLogin();
  }

// email validation function 
  const handleEmil = (e) => {
    const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    if (!emailRegex.test(e.target.value)) {
      setError("Invalid Email Address");
    } else {
      setError(" ");
      setEmail(e.target.value);
    }
  };
  
  
  return (
    <div id='login' className="marginTop">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} xl={5} className="mx-auto">
            <div className="login-container p-5 my-5 rounded-1 ">
              <h2 className="font-monospace fw-bold text-center">Login</h2>
              <br />
              <p className="text-center">Or Sign Using </p>
              <div className="icon-parent">
              <button onClick={handleGoogleSignIn} className='btn'><img className="iconImage mb-4" src="/images/form/1.png" alt="" /></button>
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <p className="text-center text-success">
                    <span className="text-white">he</span>
                    {success}{" "}
                    {success.length > 1 && (
                      <i className="far fa-check-circle"></i>
                    )}
                  </p>
                  <Form.Label>Your Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepen">
                      <i className="far fa-envelope-open text-primary"></i>
                    </InputGroup.Text>
                    <Form.Control
                      onBlur={handleEmil}
                      className="input-field"
                      id="login-email"
                      type="email"
                      placeholder="Enter your name"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </InputGroup>
                </Form.Group>
                <br />
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      <i className="fas fa-unlock-alt text-primary"></i>
                    </InputGroup.Text>
                    <Form.Control
                      className="input-field"
                      id="login-password"
                      onBlur={(e) => setPassword(e.target.value)}
                      type={showState ? "text" : "password"}
                      placeholder="Enter your password"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <InputGroup.Text
                      onClick={() => setShowState(!showState)}
                      className="toggleIcon"
                      id="inputGroupPrepend"
                    >
                      <i
                        className={
                          showState ? "far fa-eye-slash" : "far fa-eye"
                        }
                      ></i>
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <p className="text-end my-3 forgot-text">Forgot password?</p>

                <p className="text-danger d-block">
                  <span className="text-white">h</span>
                  {error}
                </p>
                <button className="btn btn-primary">LOGIN</button>

                <p className="text-center mt-5">
                  Are You New ?{" "}
                  <NavLink to="/register">Rlease Register</NavLink>
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;