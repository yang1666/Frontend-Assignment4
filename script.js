(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {

      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }

    function getGreeting(name) {
        var firstLetter = name.charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            return byeSpeaker.speakSimple(name);
        } else {
            return helloSpeaker.speakSimple(name);
        }
    }
    
    var greetings = names.map(getGreeting);
    console.log(greetings);
    
    })();