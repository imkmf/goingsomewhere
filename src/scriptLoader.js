function buildLine(text, character) {
  return {
    text: text,
    character: character
  }
}

function one(text) {
  return buildLine(text, "one");
}

function two(text) {
  return buildLine(text, "two");
}

function buildScript(lines, meta) {
  return {
    chapter: meta.chapter,
    lines: lines
  }
}

function startGame() {
  return [
    chapterOne(),
    chapterTwo()
  ]
}

function endGame() {
  console.log('game over');
}

var instance = startGame();
var state = {
  chapter: 0,
  line: 0
}

function currentLine() {
  return instance[state.chapter].lines[state.line];
}

function advance() {
  if (instance[state.chapter].lines[state.line+1]) {
    state.line += 1;
  } else {
    if (instance[state.chapter+1]) {
      state.line = 0;
      state.chapter += 1;
    } else {
      endGame();
    }
  }
}

$(function() {
  $('#game').click(function() {
    setPause = true;
    advance();
  });
});
