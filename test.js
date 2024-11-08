bouton = document.querySelector(`button`);
console.log(bouton);
maDiv = document.getElementById(`#bonjour`);
console.log(maDiv);

lis = document.querySelectorAll(`li`);
console.log(lis)

li1 = document.querySelector(`ul li:first-child`);
setInterval (()=>{
    li1.classList.toggle(`red`)
}, 100)

secondeList = document.querySelector('ul li:nth-child(2)');
secondeList.style.color=`yellow`
secondeList.style.fontWeight=`bold`
secondeList.style.textDecoration= `underLine`
console.log(secondeList);
console.log(getComputedStyle(bouton).color)
console.log(getComputedStyle(secondeList).fontFamily)
//Création d'un élément
newListe=document.createElement(`li`);
para =document.createElement(`p`)
para.innerHTML = `mon nouveau paragraphe`
//Ecrire du texte dans le nouvelle élément créé
newListe.innerHTML = `nouvelle liste`
//Ajouter l'élément dans la liste ul
ul = document.querySelector(`ul`).append(newListe);
ul = document.querySelector(`ul`).append(para);