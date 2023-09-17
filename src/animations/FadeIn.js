let elementsArray = document.getElementsByClassName("fade-in-element");
console.log(elementsArray);
window.addEventListener('scroll', fadeIn ); 
function fadeIn() {

    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("is-visible");
        } else {
            elem.classList.remove("is-visible");
        }
    }
}

export default fadeIn