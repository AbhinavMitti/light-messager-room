//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      })
      document.getElementById("msg").value = " ";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();
