
//ADD YOUR FIREBASE LINKS HERE
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyCxgSo8p3KlunpOG81FFaAVFGj8Jw6pWFw",
      authDomain: "kwitter-practice-test.firebaseapp.com",
      databaseURL: "https://kwitter-practice-test-default-rtdb.firebaseio.com",
      projectId: "kwitter-practice-test",
      storageBucket: "kwitter-practice-test.appspot.com",
      messagingSenderId: "1062246051538",
      appId: "1:1062246051538:web:54bcbb67f8ade55376070b",
      measurementId: "G-1D9LVJKHQB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function add_room() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding room name"
      })

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room name - " + Room_names);

                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";

                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "light_messager_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}