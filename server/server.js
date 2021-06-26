const express = require('express')
const SpotifyWebAPINode = require('spotify-web-api-node')

const app = express()

app.listen(3001, () => {
  console.log("Server live on port 3000")
})