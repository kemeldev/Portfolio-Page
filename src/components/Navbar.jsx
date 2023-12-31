import { useState, useEffect } from 'react'
import githubLogo from '../assets/github_logo.png'
import linkedinLogo from '../assets/linkedin_logo.png'
import moonSvg from '../assets/moon.svg'
import sunSvg from '../assets/sun.svg'
import './Navbar.css'
import { useThemeSwitcher } from '../hooks/useThemeSwitcher'
import { useScroll } from '../context/scrollContext'

export function Navbar () {
  const [mode, setMode] = useThemeSwitcher()
  const { scrollToSection } = useScroll()
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480)

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 480)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <main className={`navbar ${mode}`}>
        <header className='navbarContainer'>
          {
        isMobile
          ? (
            <div className='mobileMenu'>
              <h5>Hamburguer menu</h5>
            </div>
            )
          : (
            <nav className='navbarRoutes'>
              <h3 onClick={() => scrollToSection('home')}>Home</h3>
              <h3 onClick={() => scrollToSection('about')}>About</h3>
              <a href='#projects'>Projects</a>
            </nav>
            )
}

          <nav className='navbarLogos'>
            <div>
              <img src={githubLogo} alt='GitHub Logo' style={{ width: '25px', height: '25px' }} />
              <img src={linkedinLogo} alt='LinkedIn Logo' style={{ width: '25px', height: '25px' }} />
            </div>

            <div onClick={() => setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))}>
              {mode === 'dark'
                ? (
                  <img src={sunSvg} alt='Sun' style={{ width: '25px', height: '25px' }} />
                  )
                : (
                  <img src={moonSvg} alt='Moon' style={{ width: '25px', height: '25px' }} />
                  )}
            </div>
          </nav>
        </header>
      </main>
    </>
  )
}
