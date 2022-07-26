import { useNavigate } from 'react-router-dom';
import image1 from './images/220156854.webp';

import LandingModule from './Landing.module.css'
import NavBar from './navBar';


const Landing = () => {

  const navigate =useNavigate();

  const LoginAdmin =()=>{
navigate('/AdminLogin')
  }
  const LoginUser =()=>{
navigate('/UserLogin')
  }
  return (
    <div className={LandingModule.body}>

      <NavBar />
      <div className={LandingModule.main}>
      <img src={image1}></img>
      <div className={LandingModule.button}>
      <button className={LandingModule.admin} onClick={LoginAdmin}>Admin</button>
      <button className={LandingModule.user} onClick={LoginUser}>User</button>
      </div>

      <div className={LandingModule.find}>
      <h2>Welcome To Place To Be</h2>
        <h3>You are tired! We know,Get yourself a perfect and affordable place to rest </h3>
      </div>
      </div>
     
      <div className={LandingModule.whyUs}>
        <h2 className={LandingModule.h2}>Why Choose Us</h2>

        <div >
          <h2>Best Price Guarantee</h2>
          <p>xcdc vddrghrth rthrthrt rthrthr rthrthrr
            rthth rrht trhhy rthyry ryrh accesskey="rrr rh
            rrhrt rhy rfrthjuthrrtr tghrthjsk skjhewdhbc
            eyceydhc tghrthjskdbdchb
            brthrt
            "</p>

        </div>
        <div >
          <h2>Best Price Guarantee</h2>
          <p>xcdc vddrghrth rthrthrt rthrthr rthrthrr
            rthth rrht trhhy rthyry ryrh accesskey="rrr rh
            rrhrt rhy rfrthjuthrrtr tghrthjsk skjhewdhbc
            eyceydhc tghrthjskdbdchb
            brthrtuyiyuiykh
            ljkl</p>

        </div>
        <div >
          <h2>World Class Services</h2>
          <p>xcdc vddrghrth rthrthrt rthrthr rthrthrr
            rthth rrht trhhy rthyry ryrh accesskey="rrr rh
            rrhrt rhy rfrthjuthrrtr tghrthjsk skjhewdhbc
            eyceydhc tghrthjskdbdchb
            brthrt
            "</p>

        </div>
    </div>
    </div>
  );
}
export default Landing;