var games = Array("http://www.shooter-bubble.com/bubbleshooter2.swf",
                  "http://www.shooter-bubble.com/puzzle-bobble.swf",
                  "http://www.shooter-bubble.com/number-lines.swf",
                  "http://randolphburt.github.io/Centipede-Angular/",
                  "https://www.solitr.com/");

var getGame = function(){
  return games[Math.floor(Math.random() * games.length)];
};
