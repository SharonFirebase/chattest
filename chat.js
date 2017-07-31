var sharonFirebase = new Firebase('https://chattest-269df.firebaseio.com/');
var usernameInput = document.querySelector('#username');
var textInput = document.querySelector('#text');
var loginPassword = document.querySelector('#password');
var loginEmail = document.querySelector('#loginemail');
var postButton = document.querySelector('#post');
var loginButton = document.querySelector('#login');

//event listener for login button
loginButton.addEventListener('click', function(){
  alert('clicked');
  var password = password.value;
  var loginEmail = loginemail.value;
  sharonFirebase.push({password:loginPassword,loginemail:loginEmail});
  loginPassword.value = "";
  loginEmail.value = "";
   
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

//event listener for posting
postButton.addEventListener('click', function(){
  var msgUser = usernameInput.value;
  var msgText = textInput.value;
  sharonFirebase.push({username:msgUser,text:msgText});
  textInput.value = "";
   
});


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
