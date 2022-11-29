let docTitle = document.title;
console.log(docTitle);

document.title = 'Modifying the DOM';

document.body.style.backgroundColor = ('#FF69B4');

document.body.style.backgroundColor = "rgb(179,27,27)";

let list_children = document.body.children
for(let children of list_children) {
  console.log(children)  
}
