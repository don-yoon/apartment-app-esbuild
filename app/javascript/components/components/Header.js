import React from "react"


const Header = ({user, setLogin}) => {
    
  return (
    <>
      <div className="flex space-x-10 my-auto">
        <div>Header</div>
        {!user.logged_in &&
              <a href={user.sign_in_route} rel="noreferrer">
                <button className="bg-transparent py-2 px-4 border border-blue-500 text-blue-700">
                      Sign In
                </button>
              </a>
        }
        {user.logged_in &&
          <>
            <div> userinfo: {user.current_user.email} </div>
              <a href={user.sign_out_route} rel="noreferrer">
              <button className="bg-transparent py-2 px-4 border border-blue-500 text-blue-700" onClick={() => setLogin(false)}>
                LOGOUT
              </button>
            </a>
          </>
        }
      </div>
    </>
  )
}

export default Header