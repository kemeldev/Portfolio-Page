import myPhoto from '../assets/myPhoto.jpg'
import KevinResume from '../assets/KevinResume.pdf'
import './Home.css'
import { saveAs } from 'file-saver'

export function Home () {
  return (
    <div className='homeContainer'>

      <img src={myPhoto} alt='Picture of Kevin' />

      <section className='homeMainText'>
        <h1>Front-End Developer</h1>
        <h2>Kevin</h2>
        <h3>Convert ideas in reality!</h3>
        <DownloadButton />
        <ContactButton />
      </section>
    </div>
  )
}

const DownloadButton = () => {
  const handleDownload = () => {
    saveAs(KevinResume, 'KevinResume.pdf')
  }

  return (
    <button className='downloadButton' onClick={handleDownload}>
      Download Resume
    </button>
  )
}

const ContactButton = () => {
  const handleContact = () => {
    window.location.href = 'mailto:kemel.developer@gmail.com'
  }

  return (
    <button className='contactButton' onClick={handleContact}>
      Contact Me
    </button>
  )
}
