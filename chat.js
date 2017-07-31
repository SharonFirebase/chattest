var sharonFirebase = new Firebase('https://chattest-269df.firebaseio.com/');
var usernameInput = document.querySelector('#username');
var textInput = document.querySelector('#text');
var postButton = document.querySelector('#post');

postButton.addEventListener('click', function(){
  var msgUser = usernameInput.value;
  var msgText = textInput.value;
  sharonFirebase.push({username:msgUser,text:msgText});
  textInput.value = "";
   
});
//source https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithEmailAndPassword
firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode === 'auth/wrong-password') {
    alert('Wrong password.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});
//end authentication with email and password 

//start listening once signed in
var beginListening = function() {
      sharonFirebase.on('child_added',function(snapshot){
      var msg = snapshot.val(); 
      var msgUsernameElement = document.createElement("b");
      msgUsernameElement.textContent = msg.username;
      var msgTextElement = document.createElement("p");
      msgTextElement.textContent = msg.text;
      var msgElement = document.createElement("div");
      msgElement.appendChild(msgUsernameElement);
      msgElement.appendChild(msgTextElement);
      msgElement.className = "msg";
      document.getElementById("results").appendChild(msgElement);
    
    });
  
}
beginListening();
