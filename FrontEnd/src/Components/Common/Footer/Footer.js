import Ufc from '../../../assets/ufc.png'
import Pet from '../../../assets/pet-si.png'

import './Footer.css'
export function Footer(){
    return(
        <div className="menu">
           <div className="logo">
                <div className="space">
                    <img src={Pet} alt="Ufc" className="pet"></img>
                </div>
                <div className="space">
                    <img src={Ufc} alt="Ufc" className="ufc"></img>
                </div>
                
           </div>
           <div className="fa copyright">&#xf1f9; <h1> Copyright PET-SI 2021</h1></div>
           <div className="Net-Work-social">
               <a className="fa instagram" href="https://www.instagram.com/petsi.ufc/">&#xf16d;</a>
               <a className="fa facebook-f" href="https://www.facebook.com/petsiufc">&#xf09a;</a>
               <a className="fa youtube" href="https://www.youtube.com/user/PETSIUFC">&#xf167;</a>
               <a className="fa linkedin" href="https://www.linkedin.com/groups/13863741/">&#xf08c;</a>
           </div>
        </div>
    )
}