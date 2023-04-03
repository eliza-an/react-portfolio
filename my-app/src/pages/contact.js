import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faLinkedin, faBrands, faGithub } from '@fortawesome/free-brands-svg-icons'
import { fab, } from '@fortawesome/free-brands-svg-icons'


library.add( fas, faLinkedin, faGithub, fab, faEnvelope)


const Contact = () =>{
  return (
    <div>
      <h3>Contact</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div id="linkedin">
          <a href="https://www.linkedin.com/in/elizaveta-anufrieva/">
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
        </div>
          <div id="github">
            <a href="https://github.com/eliza-an">
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
          </div>
          <div id="mail">
            <a href="mailto:eliza.anufrieva@gmail.com" >
             <FontAwesomeIcon icon="fa-envelope" />
            </a>
          </div>
    </div>
  );
}
export default Contact;


