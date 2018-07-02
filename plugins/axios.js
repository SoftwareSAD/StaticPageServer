import * as axios from 'axios'

let options = {
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  withCredentials: true,
  // timeout : 10000,
}
// The server-side needs a full url to works
if (process.server) {
  options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
}

export default axios.create(options)
