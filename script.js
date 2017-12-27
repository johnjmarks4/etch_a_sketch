for (i=0; i < 256; i++) {
  var content = document.querySelector('#container');
  content.setAttribute("style", "display: flex; flex-flow: row; flex-wrap: wrap");
  const div = document.createElement("div");
  div.setAttribute("style", "width: 60px; height: 60px; margin-left: 20px; margin-top: 20px; background-color: green; order: " + i);
  content.appendChild(div);
}