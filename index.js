const express = require('express')
const app = express()

app.get('/', function (req, res) {
  var linkIndex = ['http:\/\/localhost:3000/sound_of_silence.html'];
  res.send(linkIndex)
})


app.use(express.static('public'));
app.use('/assets', express.static(__dirname + '/assets'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
