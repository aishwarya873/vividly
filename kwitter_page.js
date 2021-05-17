//YOUR FIREBASE LINKS
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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send(){
msg=document.getElementById("msg").value;
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
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+ name +"<img class='user_tick' src='tick.png'>";
message_with_tag="<h4 class='message_h4'>"+ message + "</h4>";
like_button="<button class='btn btn-warning' id="+ firebase_message_id +" onclick='update(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+ like +"</span></button><hr>";
row= name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML +=row;
//End code
      } });  }); }
getData();
function update(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes

      });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
