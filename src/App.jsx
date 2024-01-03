/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from './components/Main';
import Home from './components/Home';


// En react tous les composants sont des fonctions*
// Tout composant doit retourner un élément JSX
function App() {
  // React nous permet de mettre a jour le DOM avec
  // des outils appeles hooks

  // Ce sont des fonctions qui commencent par use (convention)
  const [name, setName] = useState("React");

  function onClickHandler(test) {
    setName("Vite");
    console.log("je proviens du composant enfant: ", test);

    // On peut aussi utiliser une fonction pour mettre a jour le state
    // Cette syntaxe est utile quand on veut mettre un state dont
    // la valeur depend de la valeur precedente
    setName((prev) => {
      return prev + "Vite";
    });
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <>

      <Header isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Main onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>


      <Footer  />


      {/* <PropsExample name={name} childClickHandler={onClickHandler} /> */}
      
    </>
  );
}

export default App;