 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCNxG1yPPL5SmpgfoVqXj2vM8XzuPnXrhM",
  authDomain: "fwitter-f56fa.firebaseapp.com",
  databaseURL: "https://fwitter-f56fa-default-rtdb.firebaseio.com",
  projectId: "fwitter-f56fa",
  storageBucket: "fwitter-f56fa.appspot.com",
  messagingSenderId: "777849594267",
  appId: "1:777849594267:web:349e142b21921c3ba1413e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "index_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "index_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
