import React from "react"


const Header = ({user, setLogin}) => {
    
  return (
    <>
      <div>Header</div>
      {!user.logged_in &&
            <a href={user.sign_in_route} rel="noreferrer">
              <button>
                    Sign In
              </button>
            </a>
      }
      {user.logged_in &&
            <a href={user.sign_out_route} rel="noreferrer">
              <button onClick={() => setLogin(false)}>
                    LOGOUT
              </button>
            </a>
      }
    </>
  )
}

export default Header