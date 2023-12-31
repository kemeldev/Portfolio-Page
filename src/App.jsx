import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Footer } from './components/Footer'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { ScrollProvider } from './context/scrollContext'

function App () {
  return (
    <>
      <ScrollProvider>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Footer />
      </ScrollProvider>
    </>
  )
}

export default App
