import { createServer } from 'node:http'

// The createServer function is asynchronous, so it requires us to pass a callback function to it
const server = createServer((req, res) => {
  // res.statusCode == 200
  res.setHeader('Content-Type', 'text/plain')
  res.write('Hello HTTP world!')
  res.end()
})

// After defining the server, we need to make sure to listen on a certain host and port
// const host = 'localhost'
const port = 4000

server.listen(port, () => {
  console.log(`Server listening on http://${'localhost'}:${port}`)
})
