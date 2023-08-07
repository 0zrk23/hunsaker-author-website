import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { LOGIN } from '../../utils/mutations';
import { Auth } from '../../utils/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { loggedIn } from '../../redux/loginSlice';

function AuthorLogin() {
  // const {loggedIn} = useSelector((state) => state.login);
  const [formState, setFormState] = useState({username: '', password: ''});
  const dispatch = useDispatch();
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
      const {data} = await login({
        variables: formState
      });
      dispatch(loggedIn({token: data.login.token}));
      // Auth.login(data.login.token);
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