import React from "react";
import Image from "next/image";

const Footer = () => {
  return ( 
    <div className="bg-slate-200 p-5 flex flex-col items-center">
        <Image  src="/Logo.png" alt="Logo do Rivale Hotels" width={133} height={23}/>
        <p className="text-xs text-color03 font-light">Todos os direitos reservados - DosSantosDev@2023</p>
    </div>
   );
}
 
export default Footer;