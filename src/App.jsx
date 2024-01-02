import { Profiler, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/profile.jsx'
import PropsExample from './components/PropsExample/PropsExample.jsx'


// En react tous les composant sont des fonctions
// Tout composant doit retourner un element JSX
function App() {

  // Ce sont des fonctions qui commence par use (convention)
  const [name,setName] = useState("React");

  function onClickHandler()
  {
    setName("vite");

    // On peut utilier une fonction pour mettre a jour le state
    // Cette syntaxe est utile quand on veut emttre un state dont la valeur depend de la valeur precedente
    setName((prev) => {
      return prev + " vite";
    } )
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Profile />
      <div className="card">{name}</div>
      <PropsExample/>
      <button onClick={onClickHandler}> click me !</button>
    </>

  )
}

export default App
