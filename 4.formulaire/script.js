//exercice 1
let input = document.getElementById("firstname");
let span = document.getElementById("display-firstname");

input.addEventListener('keyup', () => {
    span.textContent = input.value
})

//exercice 2

let number1 = document.getElementById('age');
let number2 = document.getElementById('a-hard-truth');

number1.addEventListener('keyup', () => {
    if (number1.value >= 18) {
        number2.setAttribute("style", "visibility: visible");
    }
});

//exercice 3    

let mdp1 = document.getElementById('pwd');
let mdp2 = document.getElementById('pwd-confirm');

mdp1.addEventListener('keyup', () =>{

    if (mdp1.value.length > 6 ) {
        mdp1.setAttribute("style", "background-color:green");
    }
    else {
        mdp1.setAttribute("style", "background-color:red");
    }
});

mdp2.addEventListener('keyup', () => {
    if(mdp2.value!== mdp1.value){
        mdp2.setAttribute('style', "background-color:red");
    }
    else{
        mdp2.setAttribute('style', 'background-color:green');
    }
});

// exercice 4

let toggleDarkMode = document.getElementsByTagName('toggle-darkmode');