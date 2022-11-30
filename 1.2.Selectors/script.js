let jobs = document.querySelectorAll(".important")
for (elem of jobs) {
    elem.title = "This is an important item"
}

function main() {

    let imageList = document.getElementsByTagName("img");
    for (let img of imageList) {
        if (img.className != "important") {
            img.style.display = "none";
        }
    }let parag1 = document.querySelectorAll("p")
for (let parag2 of parag1) {
    console.log(parag2.innerText)
    if (parag2.className == false) {
        parag2.style.color = getRandomColor();
    }else{
        console.log(parag2.className)
    }

}
}
main()
function getRandomColor() { let r = Math.floor(Math.random() * 255); let g = Math.floor(Math.random() * 255); let b = Math.floor(Math.random() * 255); return ("rgb(" + r + "," + g + "," + b + ")") }









