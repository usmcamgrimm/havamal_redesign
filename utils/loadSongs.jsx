const songQuery = require('./send-query')

const loadSongs = `
    query {
        data {
            songNum
            songTitle
            albumTitle
            albumSongNum
        }
    }
`

exports.handler = async () => {
  const { data, errors } = await songQuery(loadSongs)

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      songs: data.allSongs.data
    })
  }
}
