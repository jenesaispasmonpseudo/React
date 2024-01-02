import styles from "./Main/Main.module.css";
import { useLayoutEffect, useState } from "react";  

function Main({name, age, professions,childClickHandler}) {
    const [visible, setVisible] = useState(true);
    let [inputValue, setInputValue] = useState("")
    const [ProfileInfo, setContactInfo] = useState({
        name: "",
        email: "",
        naissance: "",
        });
    const onSubmitHandler = () => {


    }
        
    return (
    <>
      <div className={styles.main}>Main</div>
      <div className={styles.attribut}>Nom = {name} </div>
      <div className={styles.attribut}>email = {age} </div>
      <div className={styles.attribut}>Telephone = {professions} </div>
      <button
        onClick={() => {
          setVisible(!visible);
          childClickHandler("test");
        }}
      >
        click me !
      </button>

      <br />
      <br />
      <br />
      {!visible && (
        <div className="form-container">
 <form onSubmit={onSubmitHandler}>
    <div>
        <h3>Modifier le Profile</h3>
        </div>
        <div>
        <input
        type="text"
        name="name"
        placeholder="Name"
        value ={ProfileInfo.name}
        />
        </div>
        <div>
            <input
            type="email"
            name="email"
            placeholder="Email"
            value ={ProfileInfo.email}
            />
        </div>
        <div>
            <input
            type="naissance"
            name="naissance"
            placeholder="naissance"
            value ={ProfileInfo.naissance}
            />
        </div>
        <div>
            <button type="button">Submit Contact</button>
        </div>
        </form>
    </div>
      )}
    </>
  );
}

export default Main;
