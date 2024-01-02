import { useLayoutEffect, useState } from "react";

// Les composants React communiquent entre eux avec des props
// Tout composant peut recevoir des props en parametre
// Les props sont des objets dont l'utilisation est
// similaire a celle des attributs HTML

export default function PropsExample({ name, childClickHandler }) {

  const [visible, setVisible] = useState(true);
  return (
    <>
      <div className="card">{name}</div>
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
        <ul>
            <label>
                Nom :
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Envoyer" />
            <br />
            <label>
                Proffession : 

            </label>
            <select>
                <option value="Developpeur">Developpeur</option>
                <option value="Administrateur">Administrateur</option>
                <option selected value="Chomage">Chomage</option>
            </select>   
        </ul>
      )}
    </>
  );
}