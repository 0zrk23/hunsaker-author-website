import React from 'react'
import { Link } from 'react-router-dom';
import { Auth } from '../../utils/Auth';

function NavBar() {
  const pagePaths = ['/','/bio','/books','/contact','/support']
  const pageNames = ['Home','Bio','Books','Contact','Support Me']

  const handleLogout = () => {
    Auth.logout();
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
        Auth.loggedIn() && (
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