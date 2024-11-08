// Boucle bouton 1 à 3
for (i=1;i<4;i++){
    b = document.createElement(`button`)
    b.innerHTML = `bouton ${i}`
    body = document.querySelector(`body`).append(b)
}

// Création de la div et de l'ul
ul = document.createElement(`ul`)
body = document.querySelector(`body`).append(ul)

// Boucle liste de 1 à 6
for (i=1;i<7;i++){
    liste = document.createElement('li')
    liste.innerHTML = `nouvelle liste ${i}`
    ul = document.querySelector(`ul`).append(liste)
}

b = document.querySelector('button:nth-child(2)')
function afficherMessage(event){
    alert('Bonjour zinedine')
    b.style.color = 'blue'
}
b.addEventListener('click',afficherMessage)