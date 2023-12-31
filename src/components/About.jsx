import { useRef, useEffect } from 'react'
import './About.css'
import { useScroll } from '../context/scrollContext'

export function About () {
  const sectionRef = useRef()
  const { registerSection } = useScroll()

  useEffect(() => {
    registerSection('about', sectionRef)
  }, [registerSection])

  return (
    <>
      <div className='aboutContainer' ref={sectionRef}>
        <h3>About me</h3>
        <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est cupiditate et excepturi ducimus odit illum deleniti, dolor veniam soluta provident dicta quis necessitatibus architecto tenetur totam consequatur nemo alias voluptatem!</h4>

        <h3>Tech Stack</h3>
        <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est cupiditate et excepturi ducimus odit illum deleniti, dolor veniam soluta provident dicta quis necessitatibus architecto tenetur totam consequatur nemo alias voluptatem!</h4>
      </div>
    </>
  )
}
