import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";
import Game from "./Components/Game/Game";
const App = () => {
      return (<div className="grid">
          < Header />
          < Nav />
          < Profile />
          < Footer/>

          </div>
      )

};

export default App;
