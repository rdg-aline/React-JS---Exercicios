import logo from '../images/logo-instagram.png';
import { FiUser } from "react-icons/fi";
import useReducerUser from '../hooks/useReducerUser';


function Header() {


  const name =   useReducerUser()
    

    return (
        <div className="header">
            <header>
                <img src={logo} alt="Logo Instagram" />
                <div className="top-info">
                    <span>
                        <FiUser />
                        {name}
                    </span>
                </div>
            </header>
        </div>
    )
}
export default Header