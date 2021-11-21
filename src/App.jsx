import React , {useState} from 'react';
import data from "./data";
import List from "./List";

export default function App(){
  const [people, setPeople] = useState(data)
  return(
    <main>
      <section className="container">
        <h3>{people.lenght}Cumpleaños de Hoy</h3>
        <List people={people} />
        <button onClick={()=>([])}>Borrar todo</button>
      </section>
    </main>
  )
}

