// Click listener for adding annotations
window.addEventListener('click', function (e) {
  const elem = document.elementFromPoint(e.clientX, e.clientY);
  const cls = prompt(`Enter annotation class name for ${elem.tagName}`, "");
  if (cls){
    elem.innerHTML = `<span class='${cls}'>${elem.innerHTML}</span>`;
    console.log("annotated element:");
    console.log(elem);
  }
}, true);
