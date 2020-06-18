import Axios from 'axios'

const baseUrl = 'http://localhost:3003'

const getData = async () => {
  const data = await Axios.get(baseUrl)
  return data.data
}

export default { getData }