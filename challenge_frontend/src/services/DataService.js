import Axios from 'axios'

const baseUrl = 'http://localhost:3003'

const getData = async (test) => {
  if (test) {
    console.log(test)
    return test
  }
  const data = await Axios.get(baseUrl)
  return data.data
}

export default { getData }