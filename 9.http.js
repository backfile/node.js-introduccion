const http = require('node:http')

const server = http.createServer((req, res) => {
  console.log('request receive')
  res.end('Hola mundo')
})

server.listen(0, () => {
  console.log(`server listening on port ${server.address().port}`)
})
