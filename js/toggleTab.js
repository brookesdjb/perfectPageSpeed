export default function toggleTab(el) {
let element = document.getElementById(el);
let elements = document.querySelectorAll('.tabs');
elements.forEach(function(elementx) {
  elementx.classList.remove("open");
});
    element.classList.add("open");

      console.log("hello" + el);
}
