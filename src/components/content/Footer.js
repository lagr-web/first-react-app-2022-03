import React from "react";

const Footer = (props) =>{

    

    return(

        <div className="footer">
 
          {props.name}| lagr@videndjurs.dk | {props.phone}

        </div>
    )
}
export default Footer;