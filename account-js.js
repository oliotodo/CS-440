function bye() {
  alert ("Your item was deleted.");
}

function byeAccount() {
  alert ("Your account is deleted.");
}

var onImg= "redheart.png";
var offImg= "heart.png";

function logout() {
  var txt;
  if (confirm("Are you sure you want to logout?")) {
    txt = "You successfully logged out.";
  }
  else {
    txt = "You hit cancel and are still logged in.";
  }
  document.getElementById("demo").innerHTML = txt;
}
