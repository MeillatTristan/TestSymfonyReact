import React from 'react';
import '../styles/normalize.css';
import '../styles/app.css';

const User = ({ users }) => {
  return (
    <section className='users-container'>
      {users.map((user) => {
        const { id, name, description, imageURL: image } = user;
        return (
          <article className='user' key={id}>
            <div className='img-container'>
              <img className='img' src={image} alt={name} />
            </div>
            <h1 className='name'>{name}</h1>
            <p>{description}</p>
          </article>
        );
      })}
    </section>
  );
};

export default User;
