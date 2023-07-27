import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  const pagePaths = ['/','/bio','/books','/contact','/support']
  const pageNames = ['Home','Bio','Books','Contact','Support Me']

  return (
    <div id='navbar'>
      {/* div for logo */}
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
      {/* div for appBar links */}
    </div>
  )
}

export default NavBar