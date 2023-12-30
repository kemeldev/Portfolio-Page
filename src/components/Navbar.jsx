import { useState } from 'react'
import githubLogo from '../assets/github_logo.png'
import linkedinLogo from '../assets/linkedin_logo.png'
import moonSvg from '../assets/moon.svg'
import sunSvg from '../assets/sun.svg'
import './Navbar.css'

export function Navbar () {
  const [toggleColor, setToggleColor] = useState(false)

  return (
    <>
      <header className='navbarContainer'>
        <nav className='navbarRoutes'>
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Projects</h3>
          <h3>Articles</h3>
        </nav>

        <nav className='navbarLogos'>
          <div>
            <img src={githubLogo} alt='GitHub Logo' style={{ width: '30px', height: '30px' }} />
            <img src={linkedinLogo} alt='LinkedIn Logo' style={{ width: '30px', height: '30px' }} />
          </div>

          <div>
            <img src={moonSvg} alt='Moon' style={{ width: '30px', height: '30px' }} />
            <img src={sunSvg} alt='Sun' style={{ width: '30px', height: '30px' }} />
          </div>
        </nav>
      </header>
    </>
  )
}
