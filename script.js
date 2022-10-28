var arr = []
var najveci;

function pushBroj() {
  var num = +document.getElementById("number").value;
  arr.push(num);

  document.getElementById("number").value = "";
}


function arr_zadatak() {
  najveci = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > najveci) {
      najveci = arr[i];
    }
  }
  document.getElementById("list").textContent = "ovo su svi upisani brojevi " + arr;
  document.getElementById("max").textContent = "najveci broj je " + najveci;
}


document.getElementById("btnn1").addEventListener("click", function () {
  pushBroj();

});
document.getElementById("btnn2").addEventListener("click", function () {
  arr_zadatak()


});
document.getElementById("btnn3").addEventListener("click", function () {
  var list = document.getElementById("list");
  list.innerHTML = "Najveci pocetni broj je: 0";
  arr = [];
  najveci = [];
});




document.getElementById("number").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    pushBroj();
  }
});

