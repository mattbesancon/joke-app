import './main.scss'
import axios from 'axios'
import laughingAsset from './assets/laughing-emoji.jpeg'

document.getElementById('laughingEmoji').src = laughingAsset

createJoke = () => {
  const config = {
    headers: {
      accept: 'application/json',
    },
  }

  axios.get('https://icanhazdadjoke.com', config)
    .then(response => {
        document.getElementById('joke').innerHTML = response.data.joke
  })
}

document.getElementById('btn').addEventListener('click', createJoke)
createJoke()
