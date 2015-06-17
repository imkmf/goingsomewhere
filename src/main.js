var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {
  preload: preload,
  create: create,
  update: update
});

var dialog;
var setPause = false;
var pausing  = false;
var star;

function preload() {
  game.load.image('sky', 'assets/sky.png');
  game.load.image('star', 'assets/star.png');
  game.load.image('small-star', 'assets/small-star.png');
}

function starEffect() {
  star.x = Math.floor(Math.random(10) * 600);
  star.y = Math.floor(Math.random(10) * 300);
  var fade = game.add.tween(star);
  game.add.tween(star).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 0, true);
}

function stars() {
  setTimeout(function() {
    star = game.add.sprite(0,0,'star');
    star.alpha = 0;
    starEffect();
    stars();
  }, 1000);
}

function smallStars() {
  setTimeout(function() {
    star = game.add.sprite(0,0,'small-star');
    star.alpha = 0;
    starEffect();
    smallStars();
  }, 100);
}

function create() {
  game.add.sprite(0,0,'sky');
  game.add.sprite(0,100,'sky');
  game.add.sprite(0,200,'sky');
  game.add.sprite(0,300,'sky');
  game.add.sprite(0,400,'sky');
  dialog = game.add.text(20, 520, '', { fontSize: '16px', fill: '#FFF' });

  stars();
  smallStars();
}

// function update() {
//   if (setPause) {
//     pausing = true;
//     setPause = false;

//     setTimeout(function() {
//       pausing = false;
//     }, 50);
//   }

//   if (pausing) {
//     dialog.text = "";
//   } else {
//     dialog.text = currentLine().text;
//   }
// }

function update() {
  dialog.text = currentLine().text;
}
