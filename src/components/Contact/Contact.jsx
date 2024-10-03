import React from 'react';
import './Contact.scss';
import Logo from '../../assets/logo.png';
const Contact = () => {
    return (
        <div className="contact">
          <h1>Get Connected</h1>
          <h2>Feel free to ask any questions</h2>
          <div className="wrapper">
              <div className="contacts">
                <a href="#" >
                  <img src={Logo}/>
                  <h1>Bigbuilder<span>.com</span></h1>
                </a>
                <p>
                  431 Broadway, Floor 1-2<br/>
                  New York NY 10013<br/>
                  United States
                </p>
                <p>tel. <a href="#">+1 234 567 890</a></p>
                <p>mail to. <a href="#">info@bricks.io</a></p>
              </div>

            <form>
              <div>
                <input type="text"  placeholder="NAME"  required />
                <input type="email"  placeholder="EMAIL"  required />
              </div>
              <textarea placeholder="MESSAGE" required/>
              <a className='btn' type="submit" >SEND</a>
          </form> 
          </div>

     </div>
    );
}
export default Contact;