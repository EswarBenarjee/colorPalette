//Proper Random Function
function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function copied(location) {
  var a = location.lastElementChild.innerHTML;
  document.getElementById('copyCut').style.display = "None";
  document.getElementById('copy').style.display = "Block";
  setTimeout(function() { uncopied(); } , 4000);

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(a);

  /* Show that text is copied */
  document.getElementById('clipboard').innerHTML = a;
  document.getElementById('copy').style.backgroundColor = a;
}

function uncopied() {
  document.getElementById('copyCut').style.display = "Block";
  document.getElementById('copy').style.display = "None";
}

function makeid(length) {
  var result           = '';
  var mainChar = '0123456ABCDEF';
  var maincharactersLength = mainChar.length;
  for ( var i = 0; i < length; i++ ) {
      result += mainChar.charAt(Math.floor(Math.random()*maincharactersLength));
  }
  return '#'+result;
}

function random() {
  for (var i = 0; i < 5; i++) {
    var r = makeid(6);
    document.getElementById('c'+i).style.backgroundColor = r;
    document.getElementById('color'+i).innerHTML = r;
  }
}

random();

document.addEventListener("keypress", function(event) {
  if (event.keyCode == 32) {
    random();
  }
});
