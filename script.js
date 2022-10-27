

  function pushNumber() {
    var num = +document.getElementById("number").value;
    arr.push(num);
  
    document.getElementById("number").value = "";
  }
  
  
  function arr_zadatak(min, max) {
       
      var najveci = arr[0];
      for (var i = 1; i < 10; i++) {    
          if ( arr[i] > najveci ) {
              var najveci = arr[i];
          }
      }
      console.log(arr);
      console.log(najveci);
  }
  arr_zadatak();
  
  
  document.getElementById("btnn1").addEventListener("click", function () {
    pushNumber();
  });
  document.getElementById("btnn2").addEventListener("click", function () {
    arr_zadatak()
  });
  
  
  document.getElementById("number").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      pushNumber();
    }
  });
  
  
  