username=document.getElementById()

var firebaseConfig = {
    apiKey: "AIzaSyAuPiq8SiBYvPuPCl5EeLBD4Qj1qc5-CDo",
    authDomain: "kwitter2-6b430.firebaseapp.com",
    projectId: "kwitter2-6b430",
    storageBucket: "kwitter2-6b430.appspot.com",
    messagingSenderId: "502121007217",
    appId: "1:502121007217:web:fe572319ec126bddd973d0",
    measurementId: "G-H11XWVYKJS"
  };

  usernam=localStorage.getItem("username");
document.getElementById("user_nam").innerHTML = "Welcome " + usernam +"!";