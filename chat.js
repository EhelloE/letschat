var firebaseConfig = {
    apiKey: "AIzaSyD8K_XSdI4eppmdaJOB54hWdOB2yYT9JOc",
    authDomain: "letschat-690bb.firebaseapp.com",
    databaseURL: "https://letschat-690bb-default-rtdb.firebaseio.com",
    projectId: "letschat-690bb",
    storageBucket: "letschat-690bb.appspot.com",
    messagingSenderId: "1010761956345",
    appId: "1:1010761956345:web:9641b9ca382cfc0be4db28"
  };
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}
function getData () {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room names=childKey;
//startcodde
//End code
});});}
getData();
firebase.databas().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tak = "<h4> class='message_h4'>" +message + "</h4>";
like_button = "<button class='btn btn-warning' id='"+firebase_message_id"' value-'"+like+"'onclick='updateLike(this.id)'>";
span_with_tak = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row = name_with_tag+message_with_tag+like_button+span_with_tag;