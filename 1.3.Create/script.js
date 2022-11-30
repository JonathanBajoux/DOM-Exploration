function addElement() {
    let learnerArray = [
        "Arno Volts",
        "Aurélien Mariaule",
        "Aurore Lemaire",
        "Benjamin Porsont",
        "Céline Verreydt",
        "Corentin Miserque",
        "Dominique Coppée",
        "Edouard de Romrée de Vichenet",
        "Hugo Goorickx",
        "Jofrey Houyoux",
        "Jonathan Manes",
        "Jonathan Bajoux",
        "Laura Wilhelmi",
        "Lysie Soyez",
        "Marnie Benalia",
        "Mathilde Cornelis",
        "Milo Bonnet",
        "Nadim El Nakadi",
        "Nathalie Vanden Abeele",
        "Nathalie Goffette",
        "Nour Everaert",
        "Pierre Mauriello",
        "Quentin Bource",
        "Virginie Dourson"];
        learnerArray.sort(function(){return 0.5 - Math.random()});
    for (let learner of learnerArray) {
        let newSection = document.createElement("section");
        let newParag = document.createElement("p");
        let colorIntensity = getRandomColor();
        newSection.style.backgroundColor = colorIntensity[0];
        newParag.innerText = learner; 
        newSection.appendChild(newParag);
        document.body.getElementsByTagName("article")[0].appendChild(newSection);
        if(colorIntensity[1] <=90){
            newParag.style.color = "white";
        }
    }

}
function getRandomColor() {
    let r = Math.floor(Math.random() * 255); 
    let g = Math.floor(Math.random() * 255); 
    let b = Math.floor(Math.random() * 255); 
    return [("rgb(" + r + "," + g + "," + b + ")"),getBrightness(r,g,b)]
}
function getBrightness(r, g, b) {
    return (0.2126 * r + 0.7152 * g + 0.0722 * b);
}
addElement()

