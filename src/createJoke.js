import axios from 'axios'

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

export default createJoke
