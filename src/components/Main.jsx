import classes from "./Main/Main.module.css";

import React, { useState, useEffect } from 'react';
import Button from "./Button";
import Card from "./Card";

const Main = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [visible, setVisible] = useState(true);

const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <>
       <button
        onClick={() => {
          setVisible(!visible);
          childClickHandler("test");
        }}
      >
        click me !
      </button>
      {!visible && (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
      )}
    </>
  );
};

export default Main;

// function Main({name, age, professions,childClickHandler}) {
//     const [visible, setVisible] = useState(true);
//     const [enteredName, setenteredName] = useState('');
//     const [enteredEmail, setenteredEmail] = useState('');
//     const [enteredNaissance, setenteredNaissance] = useState('');
//     const onSubmitHandler = () => {


//     }
    
//     const nameChangeHandler = (event) => {
//         setenteredName(event.target.value);
//         // setUserInput({
//         //   ...userInput,
//         //   enteredAmount: event.target.value,
//         // });
//       };

//       const emailChangeHandler = (event) => {
//         setenteredEmail(event.target.value);
//         // setUserInput({
//         //   ...userInput,
//         //   enteredTitle: event.target.value,
//         // });
//         // setUserInput((prevState) => {
//         //   return { ...prevState, enteredTitle: event.target.value };
//         // });
//       };
//       const naissanceChangeHandler = (event) => {
//         setenteredNaissance(event.target.value);
//         // setUserInput({
//         //   ...userInput,
//         //   enteredDate: event.target.value,
//         // });
//       };
//     return (
//     <>
//       <div className={styles.main}>Main</div>
//       <div className={styles.attribut}>Nom = {name} </div>
//       <div className={styles.attribut}>email = {age} </div>
//       <div className={styles.attribut}>Telephone = {Telephone} </div>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//           childClickHandler("test");
//         }}
//       >
//         click me !
//       </button>

//       <br />
//       <br />
//       <br />
//       {!visible && (
//         <div className="form-container">
//  <form onSubmit={onSubmitHandler}>
//     <div>
//         <h3>Modifier le Profile</h3>
//         </div>
//         <div>
//         <label>Name</label>
//             <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             onChange={nameChangeHandler}
//             />
//         </div>
//         <div>
//             <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             onChange={emailChangeHandler}
//             />
//         </div>
//         <div>
//             <input
//             type="naissance"
//             name="naissance"
//             placeholder="naissance"
//             onChange={naissanceChangeHandler}
//             />
//         </div>
//         <div>
//             <button type="button">Submit Contact</button>
//         </div>
//         </form>
//     </div>
//       )}
//     </>
//   );
// }

// export default Main;
