import React, { useState, useEffect } from "react";
import { createPokemon, getTypes } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import bgimg from "../../utils/images/createimg.png"

import "./Create.css";

function formValidation(input) {
  let formErrors = {};
  if (!input.name) {
    formErrors.name = "The Name is required";
  }
  if (input.healthPoints < 0 || input.healthPoints > 100) {
    formErrors.healthPoints = "The Health Points must be between 1 y 100";
  }
  if (input.speed < 0 || input.speed > 100) {
    formErrors.speed = "The Speed Points must be between 1 y 100";
  }
  if (input.attack < 0 || input.attack > 100) {
    formErrors.attack = "The Attack Points must be between 1 y 100";
  }

  if (input.defense < 0 || input.defense > 100) {
    formErrors.defense = "The Defense Points must be between 1 y 100";
  }
  if (input.height < 0 || input.height > 100) {
    formErrors.height = "The Height must be between 1 y 100";
  }
  if (input.weight < 0 || input.weight > 100) {
    formErrors.weight = "The Weight must be between 1 y 100";
  }
  if (input.types.length > 2) {
    formErrors.types = "You can only choose 2 Types!";
  }
  return formErrors;
}

export default function Create() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    img: "",
    healthPoints: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
  });

  //--------useEffect--------------///

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  //---------Handle-------////

  function handleDelete(e) {
    setInput({
      ...input,
      types: input.types.filter((type) => type !== e),
    });
  }
  function handleSelect(e) {
    if (input.types.length < 2) {
      setInput({
        ...input,
        types: [...input.types, e.target.value],
      });
    } else {
      alert("You can only choose 2 Types!");
    }
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      formValidation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(errors).length > 0 || input.name === "") {
      alert("Please fill the required Fields!");
    } else {
      dispatch(createPokemon(input));
      alert("Pokemon Created!!");
      setInput({
        name: "",
        healthPoints: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
      });
      //   history.push("/home");
    }
  }

  return (
    
    <div>
      <img className="imgbg" src={bgimg} alt="www"/>
      <div className="formDiv">
        <h3>Create your pokemon!</h3>
        <form className="formCss" onSubmit={(e) => handleSubmit(e)}>
          <div className="divForm">
            <label>Name:</label> <br /> 
            <input
              className="inputForm"
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div className="divForm">
            <label>health Points:</label> <br />
            <input
              className="inputForm"
              type="number"
              value={input.healthPoints}
              name="healthPoints"
              onChange={(e) => handleChange(e)}
            />
            {errors.healthPoints && <p>{errors.healthPoints}</p>}
          </div>
          <div className="divForm">
            <label>Attack Points:</label> <br />
            <input
              className="inputForm"
              type="number"
              value={input.attack}
              name="attack"
              onChange={(e) => handleChange(e)}
            />
            {errors.attack && <p>{errors.attack}</p>}
          </div>
          <div className="divForm">
            <label>Defense Points:</label> <br />
            <input
              className="inputForm"
              type="number"
              value={input.defense}
              name="defense"
              onChange={(e) => handleChange(e)}
            />
            {errors.defense && <p>{errors.defense}</p>}
          </div>
          <div className="divForm">
            <label>Speed:</label> <br />
            <input
              className="inputForm"
              type="number"
              value={input.speed}
              name="speed"
              onChange={(e) => handleChange(e)}
            />
            {errors.speed && <p>{errors.speed}</p>}
          </div>
          <div className="divForm">
            <label> Height:</label> <br />
            <input
              className="inputForm"
              type="number"
              value={input.height}
              name="height"
              onChange={(e) => handleChange(e)}
            />
            {errors.height && <p>{errors.height}</p>}
          </div>
          <div className="divForm">
            <label> Weight:</label> <br />
            <input
              className="inputForm"
              type="number"
              value={input.weight}
              name="weight"
              onChange={(e) => handleChange(e)}
            />
            {errors.weight && <p>{errors.weight}</p>}
          </div>
          <div className="divForm">
            <select onChange={(e) => handleSelect(e)}>
              <option value="default">-Selection of Type-</option>
              {types &&
                types.map((poketypes) => (
                    
                  <option value={poketypes}  key={poketypes.id}>
                    {poketypes}
                
                  </option>
                  
                ))}
                {errors.types && <p>{errors.types}</p>}
            </select>
            <div className="div">
              {input.types.map((el) => {
                return (
                  <div className="div_types" key={el}>
                    <h4 className="h4">{el}</h4>
                    <button
                      className="x_button"
                      onClick={() => {
                        handleDelete(el);
                      }}
                    >
                      ✖
                    </button>
                  </div>
                );
              })}
            </div>
            <br />

          </div>
          <button className="buttonCreate" type="submit">
            Create Pokemon!
          </button>
          <br /><br />
          {/* <button disabled type="submit">Rellena los campos!</button> */}
          <Link to={"/home"}>
            <button className="buttonVolverForm">Back</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
