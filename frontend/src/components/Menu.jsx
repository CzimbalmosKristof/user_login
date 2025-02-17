import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import UserContext from "../context/UserContext"
import { useContext } from "react"

function Menu() {
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);
  const token = sessionStorage.getItem("usertoken");

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 dark:bg-white">
      <div className="sm:w-fit xs:w-[90%] sm:px-4  py-2 rounded-sm flex md:flex-no-wrap xs:flex-wrap md:gap-4 xs:gap-1 justify-center dark:bg-gray-200 bg-gray-800 text-white dark:text-black cursor-pointer md:text-lg md:font-semibold xs:text-sm">
        <div className="px-4 border-b-2 dark:border-blue-500 border-yellow-600 hover:border-b-2 hover:border-yellow-600 rounded-b-md">
          <Link to="/" className="text-xl"> Gészi Frontend </Link></div>
        <nav>
          {token ? <>
            <div className="px-4 hover:border-b-2 dark:hover:border-blue-500 hover:border-yellow-600 rounded-b-md"><Link to="/vedett">Védett Infó</Link></div>
            <div className="px-4 hover:border-b-2 dark:hover:border-blue-500 hover:border-yellow-600 rounded-b-md"><a onClick={()=>{logout();navigate("/")}}>Kilépés</a></div>

          </>
            :
            <>
              <div className="px-4 hover:border-b-2 dark:hover:border-blue-500 hover:border-yellow-600 rounded-b-md"><Link to="/login">Login</Link></div>
              <div className="px-4 hover:border-b-2 dark:hover:border-blue-500 hover:border-yellow-600 rounded-b-md"><Link to="/register">Register</Link></div>
            </>
          }
        </nav >
      </div>
    </div>
    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YjM3MTlmZGY4OWQyNzUyNWRlNjNjNCIsImlhdCI6MTczOTgxNTIwNCwiZXhwIjoxNzM5ODE4ODA0fQ.fA3VS5Fa2YqptbSFWM3oBBIJmPf86YP-OJtxTHwsp48
  )
}

      export default Menu