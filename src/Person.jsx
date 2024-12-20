import React from "react";

const Person = (props) => {
  const { id, image, name, age, removePerson } = props;
  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
        <button
          type="button"
          className="btn btn-danger"
          style={{ float: "right", background: "#ff3e62" }}
          onClick={() => removePerson(id)}
        >
          Remove
        </button>
      </div>
    </article>
  );
};

export default Person;
