function createGrid() {
  console.log("ran");
  var rowDepth = parseInt(prompt("How many squares should the grid be on the top?"));
  for (i=0; i < rowDepth; i++) {
    var content = document.querySelector('#container');
    const div = document.createElement("div");
    div.setAttribute("class", "gridRow");
    div.setAttribute("style", "width: 100%; height: 100px; display: flex; flex-flow: row; flex-wrap: wrap");
    content.appendChild(div);
  }
}

function fillRow() {
  var rowWidth = parseInt(prompt("How many squares should the grid be on the side?"));
  rows = document.querySelectorAll(".gridRow");

  rows.forEach(function(row) {
    for (i=0; i < rowWidth; i++) {
      const div = document.createElement("div");
      div.setAttribute("class", "gridBox");
      div.setAttribute("style", "width: 60px; height: 60px; margin-left: 20px; margin-top: 20px; order: " + i);
      div.addEventListener("mouseover", function() {
        div.style.backgroundColor = "green";
      })
      row.appendChild(div);
    }
  }
)}

createGrid();
fillRow();

var button = document.querySelector('#clear');
button.setAttribute("style", "margin-right: 90%");
button.addEventListener("click", function() {
  var content = document.querySelector('#container');
  var row = document.querySelectorAll('.gridRow');
  row.forEach((row) => {
    content.removeChild(row);
  })
  createGrid();
  fillRow();
})