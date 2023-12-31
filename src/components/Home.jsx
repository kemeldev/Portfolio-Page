import myPhoto from '../assets/myPhoto.jpg'
import KevinResume from '../assets/KevinResume.pdf'
import './Home.css'
import { saveAs } from 'file-saver'

export function Home () {
  return (
    <main className='home'>
      <div className='homeContainer'>

        <img src={myPhoto} alt='Picture of Kevin' />

        <section className='homeMainText'>
          <h2>Kevin </h2>
          <h2>Bolanos</h2>
          <h4>Front-End Developer</h4>
          <p>I am a software engineer who loves technology.</p>
          <p>Let's create some amazing projects together!</p>
          <DownloadButton />
          <ContactButton />
        </section>
      </div>
    </main>
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
