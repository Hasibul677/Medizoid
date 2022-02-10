import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Header/Header";
import Hero from "./Pages/Header/Hero/Hero";
import Service from "./Pages/Service/Service";
import Health from "./Pages/Health/Health";
import Appointment from "./Pages/Appointment/Appointment";
import Doctor from "./Pages/Doctor/Doctor";
import Card from "./Pages/Card/Card";
import Article from "./Pages/Article/Article";
import Gallery from "./Pages/Gallery/Gallery";
import Footer from "./shared/Footer/Footer";
import Subscribe from "./Pages/Subscribe/Subscribe";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import DetailsService from "./components/DetailsService/DetailsService";
import DoctorDetails from "./components/DoctorDetails/DoctorDetails";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Hero></Hero>
              <Service></Service>
              <Health></Health>
              <Card></Card>
              <Article></Article>
              <About></About>
              <Gallery></Gallery>
              <Subscribe></Subscribe>
            </Route>
            <Route path="/home">
              <Hero></Hero>
              <Service></Service>
              <Health></Health>
              <Card></Card>
              <Article></Article>
              <About></About>
              <Gallery></Gallery>
              <Subscribe></Subscribe>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute exact path="/doctor">
              <Doctor></Doctor>
            </PrivateRoute>
            <PrivateRoute path="/service/:serviceId">
              <DetailsService></DetailsService>
            </PrivateRoute>
            <PrivateRoute path="/doctor/:doctorId">
              <DoctorDetails></DoctorDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
