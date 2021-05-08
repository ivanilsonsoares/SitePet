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
               <div className="fa instagram">&#xf16d;</div>
               <div className="fa facebook-f">&#xf09a;</div>
               <div className="fa youtube">&#xf167;</div>
               <div className="fa linkedin">&#xf08c;</div>
           </div>
        </div>
    )
}