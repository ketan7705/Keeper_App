import React from "react";

function Footer(){
   const currentYear = new Date().getFullYear();
   return (<footer>
       <p>
       K10 Copyright © {currentYear} 
   </p>
   </footer>
   );
}

export default Footer;