let jobs = document.querySelectorAll(".important")
for (elem of jobs) {
    elem.title = "This is an important item"
}

function cacher() {

    let imageList = document.getElementsByTagName("img");
    for (let img of imageList) {
        if (img.className != "important") {
            img.style.display = "none";
        }
    }
}
cacher()

let paragList = document.querySelectorAll("p")
for (let parag of paragList) {
    if (parag.className == false) {
        // a faire après
    } else {
        console.log(parag.innerText)
    }
    /**a changer */
}
