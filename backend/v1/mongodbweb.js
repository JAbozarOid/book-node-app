import { createServer } from 'node:http'
import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017/'
const dbName = 'nodeappdb'
const client = new MongoClient(url)

// connect to database
try {
  await client.connect()
  console.log('Successfully connected to database!')
} catch (err) {
  console.error('Error connecting to database:', err)
}

// create an HTTP server, like we did before:
const server = createServer(async (req, res) => {
  const db = client.db(dbName) // select databse
  const users = db.collection('users') // select users collection from databse

  const usersList = await users.find().toArray()

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(usersList))
})

const port = 3000

server.listen(port, () => {
  console.log(`Server listening on http://${'localhost'}:${port}`)
})
