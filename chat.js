
var myFirebase = new Firebase('https://chattest-269df.firebaseio.com/');
var usernameInput = document.querySelector('#username');
var textInput = document.querySelector('#text');
var postButton = document.querySelector('#post');

postButton.addEventListener('click', function(){
  var msgUser = usernameInput.value;
  var msgText = textInput.value;
  
});

