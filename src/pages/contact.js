
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { fab, } from '@fortawesome/free-brands-svg-icons'
import "./contact.css"


library.add( fas, faLinkedin, faGithub, fab, faEnvelope)


const Contact = () =>{
  return (
    <div>
      <h3>Contact</h3>

        <p className='textcontact'>Please feel free to contact me using the following links</p>
        <div className='links'>
        <div id="linkedin" className='icon'>
          <a href="https://www.linkedin.com/in/elizaveta-anufrieva/">
          <FontAwesomeIcon icon="fa-brands fa-linkedin" className='yeet'/>
          </a>
        </div>
          <div id="github" className='icon'>
            <a href="https://github.com/eliza-an">
              <FontAwesomeIcon icon="fa-brands fa-github" className='yeet' />
            </a>
          </div>
          <div id="mail" className='icon'>
            <a href="mailto:eliza.anufrieva@gmail.com" >
             <FontAwesomeIcon icon="fa-envelope" className='yeet'/>
            </a>
          </div>
    </div>
    </div>
  )
}
export default Contact;


