
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyATOzGF7b339yddF8RnB8mW-_CVtbHYQT8",
      authDomain: "aishwarya-lgapdw.firebaseapp.com",
      databaseURL: "https://aishwarya-lgapdw-default-rtdb.firebaseio.com",
      projectId: "aishwarya-lgapdw",
      storageBucket: "aishwarya-lgapdw.appspot.com",
      messagingSenderId: "44627566237",
      appId: "1:44627566237:web:26938569e6f8ac5bce7e74",
      measurementId: "G-1FHRM4ST57"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    function addRoom(){
          room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
    }


    document.getElementById("user_name").innerHTML="welcome" + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room_names - "+Room_names);
row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}
function logout(){
     localStorage.removeItem("user_name") ;
     localStorage.removeItem("room_name");
     window.location="index.html";
}
