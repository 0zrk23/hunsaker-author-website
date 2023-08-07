import React from 'react'
import { Link } from 'react-router-dom';
import { Auth } from '../../utils/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { loggedOut } from '../../redux/loginSlice';

function NavBar() {
  const {loggedIn} = useSelector((state) => state.login)
  const dispatch = useDispatch();
  const pagePaths = ['/','/bio','/books','/contact','/support']
  const pageNames = ['Home','Bio','Books','Contact','Support Me']


  

  const handleLogout = () => {
    dispatch(loggedOut());
  }

  return (
    <>
      <div id='navbar'>
        {/* logo */}
        <div id='page-links'>
          {
            pagePaths.map((page,index) => (
              <Link
              key={page}
              to={page}
              >
                {pageNames[index]}
              </Link>
            ))
          }
        </div>
      </div>
      {
        loggedIn && (
          <button
            onClick={handleLogout}
          >
            Log Out
          </button>
        )
      }
      {/* appbar */}
    </>
  )
}

export default NavBar