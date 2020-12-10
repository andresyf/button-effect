const animatedclassname = "animated";
const elements = document.querySelectorAll(".hover");
const elements_span = [];

elements.forEach((element, index) => {
    let addAnimation = false;
    if(element.classList[1] == "flash") {
        element.addEventListener("animationend", e => {
            element.classList.remove(animatedclassname);
        });
        addAnimation = true;
    }
    if(!elements_span[index])
    elements_span[index] = element.querySelector("span");

    element.addEventListener("mouseover", e => {
        elements_span[index].style.left = e.pageX - element.offsetLeft + "px";
        elements_span[index].style.top = e.pageY - element.offsetTop + "px";

        if(addAnimation)
        element.classList.add(animatedclassname);
    });

    element.addEventListener("mouseout", e => {
        elements_span[index].style.left = e.pageX - element.offsetLeft + "px";
        elements_span[index].style.top = e.pageY - element.offsetTop + "px";
    });
});