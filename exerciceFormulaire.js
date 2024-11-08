// formulaire = document.getElementById("formulaire")
// nom = document.getElementById("nom")
// sexe = document.getElementById("sexe")
// message = document.getElementById("message")

// formulaire.addEventListener("submit", afficherMessage)

// function afficherMessage(e){
//     e.preventDefault();
//     genre = sexe.value;
//     prenom =nom.value;
//     if (genre == "homme"){
//         message.textContent=`Bienvenue monsieur ${prenom} sur notre site`;
//     }else if (genre == "femme"){
//         message.textContent=`Bienvenue madame ${prenom} sur notre site`;
//     }else{
//         message.textContent="Veuillez remplir les cases manquantes ou mal définis"
//     }
// }


// formulaire = document.getElementById("formulaire")
// iddentifiant = document.getElementById("iddentifiant")
// montant = document.getElementById("montant")
// message = document.getElementById("message")

// formulaire.addEventListener("submit",afficherMessage)

// function afficherMessage(e){
//     e.preventDefault()
//     monnaie = 500   
//     prix = montant.value
//     if (prix<=monnaie && prix>0){
//         message.textContent=`Vous avez pu retirer avec succès vos ${prix}€`
//     }else if(prix>monnaie){
//         message.textContent=`Vous n'avez pas pu retirer vos ${prix}€`
//     }else{
//         message.textContent=`Montant incorect, veillez réessayer`
//     }
// }

formulaire = document.getElementById("formulaire")
code = document.getElementById("iddentifiant")
montant = document.getElementById("montant")
message = document.getElementById("message")

formulaire.addEventListener("submit",afficherMessage)

function afficherMessage(e){
    e.preventDefault()
    monnaie = 500   
    prix = montant.value
    if (prix<=monnaie && prix>0){
        message.textContent=`Vous avez pu retirer avec succès vos ${prix}€`
    }else if(prix>monnaie){
        message.textContent=`Vous n'avez pas pu retirer vos ${prix}€`
    }else{
        message.textContent=`Montant incorect, veillez réessayer`
    }
}