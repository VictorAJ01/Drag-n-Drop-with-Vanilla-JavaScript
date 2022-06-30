(function () {
  let dragged;

  // The eventListeners for the dragtarget
  document.addEventListener("drag", Drag);
  document.addEventListener("dragstart", dragStart);
  document.addEventListener("dragend", dragEnd);
  // The eventListeners for the droptarget
  document.addEventListener("dragover", dragOver);
  document.addEventListener("dragenter", dragEnter);
  document.addEventListener("dragleave", dragLeave);
  document.addEventListener("drop", onDrop);

  function Drag(event) {
    dragged = event.target;
    console.log("dragging");
  }

  function dragStart(event) {
    event.target.classList.add("dragging");
  }

  function dragEnd(event) {
    event.target.classList.remove("dragging");
  }

  function dragOver(event) {
    event.preventDefault();
  }

  function dragEnter(event) {
    if (event.target.classList.contains("dropzone")) {
      event.target.classList.add("dragover");
    }
  }

  function dragLeave(event) {
    if (event.target.classList.contains("dropzone")) {
      event.target.classList.remove("dragover");
    }
  }

  function onDrop(event) {
    event.preventDefault();
    if (event.target.classList.contains("dropzone")) {
      event.target.classList.remove("dragover");
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }
  }
})();
