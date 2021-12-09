//YOUR FIREBASE LINKS
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA_buQYz8X-_pEiZHjB8c6iSE-xj36K1Nk",
      authDomain: "chat-output.firebaseapp.com",
      databaseURL: "https://chat-output-default-rtdb.firebaseio.com",
      projectId: "chat-output",
      storageBucket: "chat-output.appspot.com",
      messagingSenderId: "1061202241000",
      appId: "1:1061202241000:web:4da9fb9062736edff8b05d",
      measurementId: "G-VD6L2V95RW"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function  send(){
          msg=document.getElementById("msg").value;
          console.log("sendbutton");
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";

    } 
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}