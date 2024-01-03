import classes from "./Main/Main.module.css";

import React, { useState, useEffect, useReducer } from 'react';
import Button from "./Button";
import Card from "./Card";

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const Main = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [visible, setVisible] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

    setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid
     );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });

    setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <>
       <button
        onClick={() => {
          setVisible(!visible);
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
