//selectionne tout les élement enfant d'un élement parent
const ol = document.querySelector('ol')
//selectionne le dernier élément enfant d'un element parent
const lastElement = ol.lastElementChild;
//insert le dernier élément enfant avant le premier élément enfant
ol.insertBefore(lastElement,ol.firstElementChild);

//selectionne l'element donnée d'une page
const section = document.querySelectorAll('section');
//selectionne un element enfant(1) de l'element parent[1]
const h2Section1 = section[1].querySelector('h2');
//selectionne un element enfant(1) de l'element parent[2]
const h2Section2 = section[2].querySelector('h2');
//switch l'element enfant(1) de l'element parent[2]
section[2].children[0].insertBefore(h2Section1, h2Section2);
//switch l'element enfant(1) de l'element parent[1]
section[1].insertBefore(h2Section2, section[1].lastElementChild);

// donnée un nom a sa variable = selectionnée(l'element parent et le dernier element enfant)
const section3 = document.querySelector('main section:last-child');
//utilisé la variable pour -supprimer- (l'element enfant)
section3.remove(section);