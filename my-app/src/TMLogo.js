import Logo from './JR_logo.png'
import React from 'react';
import ReactDOM from 'react-dom';


console.log(Logo); // /logo.84287d09.png
function TMLogo() {
  // Import result is the URL of your image
  return <img src={Logo} alt="Logo" 
        width="100" height="100"/>;
}
export default TMLogo;