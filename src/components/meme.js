import React from 'react'
import './meme.css'
import memesData from './memesData.js'

export default function Meme () {
 const [memeImage, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg"
  })
  
 const [allMemeImage, setAllMemeImage] = React.useState(memesData)

  function handleClick() {
    const memesArray = allMemeImage.data.memes
    const randomNum = Math.floor(Math.random() * memesArray.length)
    const imageUrl = memesArray[randomNum].url

    setMemeImage(prevMeme => ({
      ...prevMeme,
      randomImage: imageUrl
    }))
  }

  return (
    <main>
      <div className='form'>  
          <input 
            type="text"
            className='form--input'
            placeholder='Top text'
          />
          <input 
            type="text"
            className='form--input'
            placeholder='Botton text'
          />
          <button onClick={handleClick} className='form--button'>Get a new meme image 🖼</button>
      </div>
      <img className='meme_img' src={memeImage.randomImage} alt='meme' />
    </main>
  )

}
