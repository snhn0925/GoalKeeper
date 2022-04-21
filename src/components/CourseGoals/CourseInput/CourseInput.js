import React, { useState } from 'react';
//import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// const FormControl = styled.div`
 
//   margin: 0.5rem 0;
//   background-color: #eee8d5;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => (props.invalid ? 'red' : 'black')};
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => (props.invalid ? 'red' : 'black')};
//   background-color: ${props => (props.invalid ? '#ffcccb' : '#4a9af585')};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #4a9af585;
//   border-color: #111E6C;
// }
// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setisValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setisValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0){
      setisValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
