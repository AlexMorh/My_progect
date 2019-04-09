// function([string1, string2],target id,[color1,color2])    
 consoleText(['Hello World', 'Welcome to my site', 'Made with Love by SOFIKA'], 'text',['green','rebeccapurple','lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var i = 0;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])

  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      i = i + 1;
      console.log(i);
        if ( i > 2 ) {
        return i;
        }
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 100)
 window.setInterval(function() {
    if (i === 3) { return i; }
    if (visible === false) {
      con.className = 'console-underscore hidden'
      visible = true;
    } else  {
      con.className = 'console-underscore'
      visible = false;
    }
  }, 400)
};

window.addEventListener('load', () => {
  setTimeout(() => {
    const preloader = document.getElementsByClassName('console-container')[0];
    TweenLite.to(preloader, 1, { opacity: 0, display: 'none', delay: 0, ease: Power0.easeIn  })
  }, 12000)
});

document.body.onload=function(){
setTimeout(function(){
var preloader = document.getElementById('preloader');
console.log(preloader);

var color = document.getElementById('color');
preloader.style.opacity=0;
preloader.style.visibility='hidden';
setTimeout(function(){
tmark();

})
setTimeout(function(){
clearInterval();
clearInterval();
color.style.opacity=0;
color.style.visibility='hidden';
body.style.overflow='visible';
});
},13000)
}

