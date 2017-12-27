function createGrid() {
  for (i=0; i < 256; i++) {
    var content = document.querySelector('#container');
    content.setAttribute("style", "display: flex; flex-flow: row; flex-wrap: wrap");
    const div = document.createElement("div");
    div.setAttribute("class", "gridBox");
    div.setAttribute("style", "width: 60px; height: 60px; margin-left: 20px; margin-top: 20px; order: " + i);
    div.addEventListener("mouseover", function() {
      div.style.backgroundColor = "green";
    })
    content.appendChild(div);
  }
}

createGrid();

var button = document.querySelector('#clear');
button.setAttribute("style", "margin-right: 90%");
button.addEventListener("click", function() {
  var content = document.querySelector('#container');
  var grid = document.querySelectorAll('.gridBox');
  console.log(grid);
  grid.forEach((div) => {
    content.removeChild(div);
  })
  createGrid();
})