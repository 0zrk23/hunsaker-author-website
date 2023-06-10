import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  const test = () => {
    console.log('this is a test');
  }

  return (
    <div id='navbar'>
      <Link
        to='/'
        onClick={test}
      >
        test
      </Link>
    </div>
  )
}

export default NavBar