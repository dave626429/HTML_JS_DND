let dragAreas = document.querySelectorAll(".dragarea");
let dragItem = document.querySelector(".dragitem");
let dragParent = null;

function dragEnter(e) {
  console.log("dragEnter");
}

function dragOver(e) {
  console.log("dragOver");
  e.target.classList.add("dragover");
  e.preventDefault();
}

function dragLeave(e) {
  console.log("dragLeave");
  e.target.classList.remove("dragover");
}

function drop(e) {
  console.log("drop");
  e.target.append(dragItem);
  e.target.classList.remove("dragover");
}

function onDrag(e) {
  e.target.classList.add("drag");
}

function onDragEnd(e) {
  console.log("onDragEnd");
  e.target.classList.remove("drag");
  dragParent.classList.remove("drag-start");
}
function onDragStart(e) {
  console.log("onDragStart");
  dragParent = e.target.parentElement;
  dragParent.classList.add("drag-start");
}
