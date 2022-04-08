// ! FILES
import React, { useState } from 'react';
import '../styles/normalize.css';
import '../styles/app.css';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName('');
      setEmail('');
    }
  };

  return (
    <article className='form-article'>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form-row'>
          <label htmlFor='firstname' className='form-label'>
            Prénom:
          </label>
          <input
            type='text'
            id='firstname'
            name='firstname'
            className='form-input'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email:
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='form-input'
          />
        </div>
        <button className='btn btn-block'>Ajouter à la liste</button>
      </form>

      {people.map((person) => {
        const { id, firstName, email } = person;

        return (
          <div key={id} className='item'>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        );
      })}
    </article>
  );
};

export default Form;
