
(function () {

var names = ["Kriti", "Jacqueline", "Ashika", "Shikha", "Jenifer", "Alexander", "Lina", "Kripa", "jeena", "Deepika"];

for (var i = 0; i < names.length; i++) {

 
  var firstLetter = names[i].charAt(0).toLowerCase();

  
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();
