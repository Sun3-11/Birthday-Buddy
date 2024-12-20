import React from "react";
import Person from "./Person";
const List = ({ people, removePerson }) => {
  return (
    <section>
      {people.map((person) => {
        return (
          <Person key={person.key} {...person} removePerson={removePerson} />
        );
      })}
    </section>
  );
};

export default List;
