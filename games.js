var games = Array("http://www.shooter-bubble.com/bubbleshooter2.swf",
                  "http://www.shooter-bubble.com/puzzle-bobble.swf",
                  "http://www.shooter-bubble.com/number-lines.swf",
                  "http://randolphburt.github.io/Centipede-Angular/",
                  "https://www.solitr.com/",
                  "https://gabrielecirulli.github.io/2048/",
                  "http://www.sudoku.com/",
                  "http://gariel.pythonanywhere.com/static/Gro.swf",
                  "http://slither.io/",
                  "http://elgoog.im/pacman/",
                  "http://afonsopacifer.github.io/egg-emergency/");

var getGame = function(){
  return games[Math.floor(Math.random() * games.length)];
};
