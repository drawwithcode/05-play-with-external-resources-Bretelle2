var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var query = "&q=harambe";
var song;

function preload() {
song = loadSound("harambe_song.mp3")
}

function setup() {
  var url = api + apiKey + query;
  loadJSON(url, gotData);
  song.play()
  createCanvas(200, 200)
}

function draw () {
  textFont('Gloria Hallelujah')
  textSize(15)
  text('is this a meme?', 10, 10);
}

function gotData(giphy) {
  for (var i = 0; i <= 10; i++) {
    createImg(giphy.data[0].images.original.url);
    createImg(giphy.data[10].images.original.url);
  }

}
