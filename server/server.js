const SpotifyWebAPINode = require('spotify-web-api-node')
const express = require('express')
const cors = require("cors")

const app = express()
app.use(cors())

// This file is copied from: https://github.com/thelinmichael/spotify-web-api-node/blob/master/examples/tutorial/00-get-access-token.js

const scopes = [
  'user-top-read',
  'user-library-read',
  'playlist-read-private',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-modify-private',
]

// credentials are optional
var spotifyApi = new SpotifyWebAPINode({
  clientId: '41994b49692d44b4baf224ccd8554cef',
  clientSecret: '70635349bbd2460f9b90ae0a23b54f4f',
  redirectUri: 'http://localhost:3001/callback',
})

app.get('/login', (req, res) => {
  console.log("testing login endpoint - server")

  res.redirect(spotifyApi.createAuthorizeURL(scopes))
})

app.get('/callback', (req, res) => {
  const error = req.query.error
  const code = req.query.code
  const state = req.query.state

  if (error) {
    console.error('Callback Error:', error)
    res.send(`Callback Error: ${error}`)
    return
  }

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      const access_token = data.body['access_token']
      const refresh_token = data.body['refresh_token']
      const expires_in = data.body['expires_in']

      spotifyApi.setAccessToken(access_token)
      spotifyApi.setRefreshToken(refresh_token)

      console.log('access_token:', access_token)
      console.log('refresh_token:', refresh_token)

      console.log(
        `Sucessfully retreived access token. Expires in ${expires_in} s.`,
      )
      res.send('Success! You can now close the window.')

      setInterval(async () => {
        const data = await spotifyApi.refreshAccessToken()
        const access_token = data.body['access_token']

        console.log('The access token has been refreshed!')
        console.log('access_token:', access_token)
        spotifyApi.setAccessToken(access_token)
      }, (expires_in / 2) * 1000)
    })
    .catch((error) => {
      console.error('Error getting Tokens:', error)
      res.send(`Error getting Tokens: ${error}`)
    })
})

app.listen(3001, () => {
  console.log('Server live on port 3001')
})
