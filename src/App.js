import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MyComponent from "./component/MyComponent";
// import LoginForm from "./component/LoginForm";
// import Welcome from "./component/Welcome";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
/**
 * 2 components: class components / fuction components ( function , arrow )
 * JSX
 */
/*
arrow function
 const App = () =>{ 
} */

// function sayHii() {
//   alert("Hi React Js");
// }
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}
//   const user = { id: 1, name: "admin" };
//   return (
//     <div
//       className="App"
//       style={{ borderWidth: 1, borderColor: "red", borderStyle: "solid" }}
//     >
//       {/* <h1>Hello </h1>
//       <Hello name="Phuong Oanh" cssStyle="red"/>
//       <Hello name= "Cao dang FPT "  cssStyle="green"/>
//       <LoginForm hi= {sayHii} />
//       <Welcome user={{id:1 , name:"ADMIN"}} /> */}
//       <MyComponent />
//       {/* <WelcomeAdmin name={user.name} id={user.id} cssStyle="red" hi={sayHii} />
//       <WelcomeAdmin {...user} cssStyle="green" hi={sayHii} /> */}
//     </div>
//   );
// }
// function WelcomeAdmin(props) {
//   const { id, ...other } = props;
//   return (
//     <div>
//       <p>Hello {props.id} </p>
//       <Hello {...other} />
//     </div>
//   );
// }
// function Hello(props) {
//   let style =
//     props.cssStyle == "red"
//       ? { color: "red", fontSize: 40 }
//       : { color: "green", fontSize: 40 };
//   return (
//     <div>
//       <p> {props.name} </p>
//       <p style={style}>Hello ReactJS</p>
//       <p onClick={props.hi}>Click</p>
//     </div>
//   );
// }

export default App;
