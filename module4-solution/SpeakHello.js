
(function (window){ 
var helloSpeaker = {};
var speakWord = "Hello";


 helloSpeaker.speak = function(i){
  console.log(speakWord + " " + i);
}
window.helloSpeaker=helloSpeaker;
})(window);
