import React from 'react';
import logo from '../../images/logo.png'
import {GrCart} from "react-icons/gr";

const Header = () => {


  return (
    <>

      <div>
        <div className="emporiodacerveja-emporio-theme-1-x-mensCust  fr w-100">
          <div className="vtex-rich-text-0-x-container vtex-rich-text-0-x-container--notificationBar flex tc items-start justify-start t-body c-on-base">
            <div className="vtex-rich-text-0-x-wrapper vtex-rich-text-0-x-wrapper--notificationBar">
              <p className="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--notificationBar">
                A Maior <a className="vtex-rich-text-0-x-link vtex-rich-text-0-x-link--notificationBar" >
                  Loja Especializada de Cervejas</a>
                 do Brasil.</p>
            </div>
          </div>
        </div>
      </div>


      <div className="header">
        <img src={logo} alt={logo} />
         <p><GrCart size={25}/>
         </p>
        </div>

    </>
  );
}

export default Header;