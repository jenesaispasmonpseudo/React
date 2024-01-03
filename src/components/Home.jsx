import React, { useState, useEffect } from 'react';

import Card from '../components/Card';
import classes from './Home/Home.module.css';

const Home = (props) => {
    const [name,setName] = useState("jeremie")
    const [lastname,setlastname] = useState("Bouchot")
    const [age,setAge] = useState("jeremie")
    const [profile,setProfile] = useState({
        name : "Jeremie",
        lastname : "Bouchot",
        age : "20",
    })

    const onSubmitHandler = (event) => {


   }

  return (
    <Card className={classes.home}>
      <h1>Profile</h1>
      
    </Card>
  );
};

export default Home;
