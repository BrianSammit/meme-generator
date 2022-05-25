import memeLogo from '../assets/Memes.png'
import './header.css'

export default function Header () {
  return (
    <header>
      <img src={memeLogo} alt="meme" />
      <h2>Meme Generator</h2>
    </header>
  )
}
