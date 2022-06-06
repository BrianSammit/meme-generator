import React from 'react'
import './meme.css'

export default function Meme () {
 const [memeImage, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg"
  })
  
 const [allMeme, setAllMeme] = React.useState([])

  
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMeme(data.data.memes))
  }, [])
  
  function handleChange(event) {
    const {name, value} = event.target
    setMemeImage(prevMemeImage => ({
      ...prevMemeImage,
      [name]: value

    }))
    
  }

  function handleClick(event) {
    event.preventDefault()

    const randomNum = Math.floor(Math.random() * allMeme.length)
    const imageUrl = allMeme[randomNum].url

    setMemeImage(prevMeme => ({
      ...prevMeme,
      randomImage: imageUrl
    }))
  }

  return (
    <main>
      <form className='form'>
          <input 
            type="text"
            className='form--input'
            placeholder='Top text'
            name='topText'
            onChange={handleChange}
            value={memeImage.topText}
          />
          <input 
            type="text"
            className='form--input'
            placeholder='Botton text'
            name='bottomText'
            onChange={handleChange}
            value={memeImage.bottomText}
          />
          <button onClick={handleClick} className='form--button'>Get a new meme image 🖼</button>
      </form>
        <div className='meme'>
          <img className='meme_img' src={memeImage.randomImage} alt='meme' />
          <h2 className='top_text'>{memeImage.topText}</h2>
          <h2 className='bottom_text'>{memeImage.bottomText}</h2>

       </div>
    </main>
  )

}
