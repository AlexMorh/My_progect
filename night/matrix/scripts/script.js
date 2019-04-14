(function() {
  var br = "<br>"
  var nbsp = "&nbsp;"
  var curlyBraceLeft = "{"
  var semicolon = ";"
  var spanText = new Array;

  window.start = function() {
    var str = "var start = " + start.toString();
    var arr = str.split("");
    var speed = 5;
    var iter = 0;
    
    (function() {
      var i = 0;
      while(i < arr.length) {
        if (arr[i] == curlyBraceLeft || arr[i] == semicolon) {
          arr[i] += br;
        } else if (arr[i] == " ") {
          arr[i] = nbsp;
        };

        i++;
      };
    })();

    var deleteCode = function() {
      if (iter <= 0) {
        return false;
      } else if (iter < speed) {
        iter -= speed - iter;
      } else {
        iter -= speed;
      };
    };

    var addCode = function() {
      var i = iter;
      while(i < iter + speed) {
        if (arr[i] != undefined) {
          spanText.push(arr[i]);
        };
        i++;
      };

      if (iter >= arr.length) {
        return false;
      } else if (arr.length - iter < speed)  {
        iter += arr.length - iter ;
      } else {
        iter += speed;
      };
    };

    var render = function() {
      document.documentElement.scrollTop = 99999;
      document.getElementById("test").innerHTML = spanText.join("");
    };

    document.onkeydown = function(key) {
      if (key.key === 'Backspace' || key.key === 'Delete') {
        deleteCode();
        spanText.splice(spanText.length-speed, speed);
      } else {
        addCode();
      };
      render();
    };
  };
})()

start()
