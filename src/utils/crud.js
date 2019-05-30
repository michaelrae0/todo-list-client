import axios from 'axios'

const getMany = () => {
  axios.get('http://localhost:2990/item')
    .then(res => console.log(res))
}

export {
  getMany
}