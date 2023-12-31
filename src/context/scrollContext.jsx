import { createContext, useContext } from 'react'

const ScrollContext = createContext()

export function ScrollProvider ({ children }) {
  const sections = {}

  const registerSection = (name, ref) => {
    sections[name] = ref
  }

  const scrollToSection = (name) => {
    if (sections[name]) {
      sections[name].current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const value = { registerSection, scrollToSection }

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  )
}

export function useScroll () {
  return useContext(ScrollContext)
}
