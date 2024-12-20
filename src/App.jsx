import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    const updatedPeople = people.filter((person) => person.id !== id);
    setPeople(updatedPeople);
  };

  const isEmpty = people.length === 0;

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} removePerson={removePerson} />

        {!isEmpty && (
          <button
            type="button"
            className="btn btn-block"
            onClick={() => setPeople([])}
          >
            Clear All
          </button>
        )}

        {isEmpty && (
          <button
            type="button"
            className="btn btn-block"
            style={{
              backgroundColor: "#90EE90",
              color: "#fff",
            }}
            onClick={() => setPeople(data)}
          >
            Reset
          </button>
        )}
      </section>
    </main>
  );
};

export default App;
