
  var config = {
    apiKey: "AIzaSyDvMwIzC6KSZdW_jatP37kphVEDXNgfZpE",
    authDomain: "traintime-75dac.firebaseapp.com",
    databaseURL: "https://traintime-75dac.firebaseio.com",
    projectId: "traintime-75dac",
    storageBucket: "traintime-75dac.appspot.com",
    messagingSenderId: "489495187649"
  };
  firebase.initializeApp(config);

var databse = firebase.database();

$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  var trName = $("#train-name-input").val().trim();
  var trDest = $("#destination-input").val().trim();
  var trTime = moment($("#time-input").val().trim(), "HH:mm").format("X");
  var trFreq = $("#frequency-input").val().trim();

  var nextTr = {
    name: trName,
    destination: trDest,
    time: trTime,
    frequency: trFreq
  };

  database.ref().push(nextTr);

  console.log(nextTr.name);
  console.log(nextTr.destination);
  console.log(nextTr.time);
  console.log(nextTr.frequency);

  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("frequency-input").val("");
});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  var trName = childSnapshot.val().name;
  var trDest = childSnapshot.val().destination;
  var trTime = childSnapshot.val().time;
  var trFreq = childSnapshot.val().frequency;

  console.log(trName);
  console.log(trDest);
  console.log(trTime);
  console.log(trFreq);

  var trTimePretty = moment.unix(trTime).format("HH:mm");

  //Determine the 
})