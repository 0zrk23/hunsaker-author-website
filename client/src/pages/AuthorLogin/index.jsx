import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { LOGIN } from '../../utils/mutations';
import { Auth } from '../../utils/Auth';

function AuthorLogin() {
  const [formState, setFormState] = useState({username: '', password: ''});
  // const [isShown, setIsShown] = useState(false);
  const [login] = useMutation(LOGIN);
  // const [isCorrect, setIsCorrect] = useState(true);


  const handleChange= (event) => {
    const {name, value} = event.target;
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // console.log(auth.isTokenExpired())
      const {data} = await login({
        variables: formState
      })
      Auth.login(data.login.token);
      Auth.isTokenExpired();
      console.log(Date.now()/1000);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='author-login'>
      <h2>
        Login
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input name='username' type='text' placeholder='3x@mpleUsername'onChange={handleChange}/>
        </div>
        <div>
          <label>Password</label>
          <input name='password' type={'password'} placeholder='***********' onChange={handleChange}/>
        </div>
        <button className='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AuthorLogin