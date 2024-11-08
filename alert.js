/*alert("Bonjour Javascript")
var prenom="Théo";
var prenom="Quentin";
console.log(prenom);

var marque,model,nbreDePlace,annee;
marque=prompt("La marque ?");
model=prompt("Le model ?");
nbreDePlace=prompt("Le nombre de place ?") ;
annee=prompt("L'année ?") ;
console.log("Voici ma belle BMW"+" "+marque+" "+model+" "+nbreDePlace+" "+annee);

var a=parseInt(prompt("Valeur de a")),b=parseInt(prompt("Valeur de b"));
resultat1=a+b;
resultat2=a-b;
resultat3=a*b;
resultat4=a/b;
console.log("a+b="+resultat1+" a-b="+resultat2+" a*b="+resultat3+" a/b="+resultat4);
alert("a+b="+resultat1+" a-b="+resultat2+" a*b="+resultat3+" a/b="+resultat4);

var note_de_fr,note_de_ang,note_de_js,note_de_php;
note_de_fr=parseInt(prompt("Sélectionner la note de français:"));
note_de_ang=parseInt(prompt("Sélectionner la note de anglais:"));
note_de_js=parseInt(prompt("Sélectionner la note de javascript:"));
note_de_php=parseInt(prompt("Sélectionner la note de php:"));
note_moy=(note_de_fr+note_de_ang+note_de_js+note_de_php)/4;
console.log("La note moyenne est de"+" "+note_moy);
alert("La note moyenne est de"+" "+note_moy);

var ht;
ht=parseFloat(prompt("Renseigner un prix hors taxe:"));
ttc=ht*1.2;
console.log("Le prix TTC est de"+" "+ttc)
alert("Le prix TTC est de"+" "+ttc.toFixed(2))

var prenom, nom;
prenom=prompt("Renseigner votre prénom:");
nom=prompt("Renseigner votre nom:")
alert("Bonjour"+" "+prenom+""+nom+", "+"comment allez-vous ?")


Les ARRAY

Pour stocker dans une seule variable plusieurs informations de mêmes types ou de types différents

var couleurs=new Array();
couleurs[0]="bleu";
couleurs[1]="blanc";
couleurs[2]="rouge";
console.log(couleurs);
//équivaut à faire ceci
var fruits=["banane", "mangue", "orange", "pomme"];
console.log(fruits);
Si il y a 2 Théo dans la classe on peut le marquer 2 fois et ca donnerais ca :

var listeAuditeur=new Array();
listeAuditeur[0]="Manon";
listeAuditeur[1]="Théo";
listeAuditeur[2]="Théo";
listeAuditeur[3]="Roger";
listeAuditeur[4]="Ahmed";

.shift = permet de supprimer le premier élément          tab = 1,2,3,4,5 --> *,2,3,4,5
.delete = permet de supprimer à un endroit spécifique    tab = 1,2,3,4,5 --> 1,*,3,*,5
.pop = permet de supprimer le dernier élément            tab = 1,2,3,4,5 --> 1,2,3,4,*
.splice = permet de supprimer l'élément choisit ET le nombre d'élément apres lui     tab = 1,2,3,4,5 --> 1,2,*,*,*
.length = affiche moi la taille du tableau
.push = permet d'ajouter à la fin de la liste            tab = 1,2,3 --> 1,2,3,'4','5'
.unshift = permet d'ajouter au début de la liste         tab = 3,4,5 --> '1','2',3,4,5
.reverse = permet de faire un reverse                    tab = 1,2,3,4,5 --> 5,4,3,2,1
.sort = permet de faire un trie par orde alphabetique    tab = E,B,A,D,C --> A,B,C,D,E
.indexOf = permet de savoir où se trouve un élément      SI -1 c'est qu'il existe pas
.include = permet de dire si 'oui' ou 'non' l'élément s'y trouve

const monTableau = [1,2,3,4,5];
alert(monTableau.length);

const x = monTableau.splice(1,1);

console.log(`monTableau values: ${monTableau}`);
console.log(`variable x value: ${x}`);
alert(monTableau.length);

== égal
=== strictement égal
> supérieur
< inférieur
>= égal ou sup
<= égal ou infé
!= différent
!== strictement différent

var note
note=parseFloat(prompt("Quel est ta note ?:"))
switch(true){
    case note == 0:
        alert("Va réviser!!!")
        console.log(`La note choisit est ${note}`)
    break
    case note >= 1 && note <= 9:
        alert("Ajourné!!!")
        console.log(`La note choisit est ${note}`)
    break
    case note >= 10 && note <= 11:
        alert("Passable")
        console.log(`La note choisit est ${note}`)
    break
    case note >= 12 && note <= 13:
        alert("A bien")
        console.log(`La note choisit est ${note}`)
    break
    case note >= 14 && note <= 16:
        alert("Bien")
        console.log(`La note choisit est ${note}`)
    break
    case note >= 17 && note <= 19:
        alert("Très bien")
        console.log(`La note choisit est ${note}`)
    break
    case note == 20:
        alert("Excelent")
        console.log(`La note choisit est ${note}`)
    break
    default: alert("Noter une note comprise entre 0 et 20")
    console.log(`La note choisit est ${note} et elle est incorrecte`)
}

resultat=Math.floor(Math.random()*(80000-15000))+15000;
do{
    prix=parseFloat(prompt('Veuillez deviner le prix entre 15000€ et 80000€:'));
    if(prix == resultat){
        alert(`gg beau gosse`)
    }else if((prix < resultat)&&(prix >= 15000)){
        alert(`Dommage c'est plus`)
    }else if((prix > resultat)&&(prix <= 80000)){
        alert(`Dommage c'est moins`)
    }else{
        alert(`Tu n'as pas mis un nombre entre 15000€ et 80000€`)
    }
}while (prix != resultat)

Les boucles
while = tant que ...
do ... while = faire ... tant que ...


poids=parseFloat(prompt("Quel poids faites vous ?"));
taille=parseFloat(prompt("Quel taille faites vous ?"));
imc=poids/(taille*taille);
alert(imc)
switch(true){
    case imc < 16.5 && imc > 0:
        alert("Maigreur extrême - dénutrition")
    break
    case imc < 18.5 && imc >= 16.5:
        alert("Maigreur")
    break
    case imc < 25 && imc >= 18.5:
        alert("Corpulence normal")
    break
    case imc < 30 && imc >= 25:
        alert("Surpoids ou pré-obésité")
    break
    case imc < 35 && imc >= 30:
        alert("Obésité modérée(classe 1)")
    break
    case imc < 40 && imc >= 35:
        alert("Obésité sévère (classe 2)")
    break
    case imc >= 40:
        alert("Obésité morbide (classe 3)")
    break
    default: alert("Choisisez une taille et un poids manquante ou/et correcte")
}

do{
    num1=parseInt(prompt("donner le 1er chiffre")); 
    num2=parseInt(prompt("donner le 2nd chiffre")); 
    signe=prompt("donner l'opération souhaitée")
    if(signe=="*"){
    res=multiplication(num1,num2); 
    alert(res); 
    } else if (signe=="+"){
    res=addition(num1,num2); 
    alert(res); 
    }else if (signe =="-"){
    res=soustraction(num1,num2); 
    alert(res);
    }else if(signe =="/"){
    res=division(num1,num2); 
    alert(res);
    }else {
    alert("signe inconnu"); 
    }

    function multiplication(num1,num2){
    var resultat=num1*num2; 
    return resultat; 
    }

    function addition(num1,num2){
    var resultat=num1+num2; 
    return resultat; 
    }

    function soustraction(num1,num2){
    var resultat=num1-num2; 
    return resultat; 
    }
    function division(num1,num2){
    var resultat=num1/num2; 
    return resultat;
    }
}while(signe !="+"||signe !="-"||signe !="*"||signe !="/")
do{
    euro=parseInt(prompt("Choisisez le prix à convertir:"))
    signe=prompt("Choisisez la devise pour convertir: \n dinar \n dollar canadien \n dollar USA \n ancien franc \n franc suisse")
    if(signe=="dinar"){
        res=euro*147.54
        alert(`${res} dinar`)
    }else if(signe=="dollar canadien"){
        res=euro*1.46
        alert(`${res} dollar canadien`)
    }else if(signe=="dollar USA"){
        res=euro*1.10
        alert(`${res} dollar USA`)
    }else if(signe=="ancien franc"){
        res=euro*6.55
        alert(`${res} ancien franc`)
    }else if(signe=="franc suisse"){
        res=euro*0.95
        alert(`${res} franc suisse`)
    }else{
        alert("Taux de conversion inconnue, veillez réessayer")
    }
}while(signe !== "dinar"||signe !== "dollar canadien"||signe !== "dollar USA"||signe !== "ancien franc"||signe !== "franc suisse")
alert("fini")


resultat=parseInt(prompt("Veuillez donner un nombre svp ?"))
while(resultat > 0){
    alert(`${resultat}`)
    resultat = resultat - 1
}
alert(`0 !!! BOOOOOOM !!!`)


statut=prompt("Saisissez votre statut professionnel: \n Cadre = 1 \n Agent de maitrise = 2 \n Profession libérale = 3 \n Portage salarial = 4 \n Fonction publique = 5")
brut=parseInt(prompt("Saisissez votre salaire brut:"))
if(statut == 1){
    resultat=brut-(brut*0.25)
    alert(`Votre salaire net pour votre statut est de ${resultat}€`)
}else if(statut == 2){
    resultat=brut-(brut*0.22)
    alert(`Votre salaire net pour votre statut est de ${resultat}€`)
}else if(statut == 3){
    resultat=brut-(brut*0.45)
    alert(`Votre salaire net pour votre statut est de ${resultat}€`)
}else if(statut == 4){
    resultat=brut-(brut*0.51)
    alert(`Votre salaire net pour votre statut est de ${resultat}€`)
}else if(statut == 5){
    resultat=brut-(brut*0.15)
    alert(`Votre salaire net pour votre statut est de ${resultat}€`)
}else{
    alert(`Calcul non pris en compte`)
}


do{
statut=prompt("Saisissez votre statut professionnel: \n Cadre = 1 \n Agent de maitrise = 2 \n Profession libérale = 3 \n Portage salarial = 4 \n Fonction publique = 5")
brut=parseInt(prompt("Saisissez votre salaire brut:"))
switch(true){
    case statut == 1:
        resultat=brut-(brut*0.25)
        alert(`Votre salaire net pour votre statut est de ${resultat}€`)
    break
    case statut == 2:
        resultat=brut-(brut*0.22)
        alert(`Votre salaire net pour votre statut est de ${resultat}€`)
    break
    case statut == 3:
        resultat=brut-(brut*0.45)
        alert(`Votre salaire net pour votre statut est de ${resultat}€`)
    break
    case statut == 4:
        resultat=brut-(brut*0.51)
        alert(`Votre salaire net pour votre statut est de ${resultat}€`)
    break
    case statut == 5:
        resultat=brut-(brut*0.15)
        alert(`Votre salaire net pour votre statut est de ${resultat}€`)
    break
    default: alert(`Calcul non pris en compte`)
}
suite=prompt(`Vouliez vous continuer ? \n Oui = O \n Non = N`)
}while(suite == `O`)

var listefruits=["banane","pomme","orange","mangue","grenade","kiwi","clémentine"]
do{
    reponse=prompt("Donne moi un fruit:")
    resultat=listefruits.includes(reponse)
    if(resultat==true){
        alert("C'est gagné !!!")
    }else{
        alert("Dommage recommence")
    }
    suite=prompt(`Vouliez vous continuer ? \n Oui = O \n Non = N`)
}while(suite=="O")

var listeDeCourse=["savon","lait","viande de grison","tomate","chaussette","cigarette"]
listeDeCourse.push("sucre")
alert(listeDeCourse)
var list2=["riz","poisson"]
alert(listeDeCourse.concat(list2))
listeDeCourse.splice(1,1)
alert(listeDeCourse)

chiffre=parseInt(prompt("Donner un chiffre"))
for (nb=0;nb<=10;nb++){
    resultat=chiffre*nb
    alert(`${chiffre}*${nb}=${resultat}`)
}
*/