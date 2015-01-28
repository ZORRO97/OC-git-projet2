# OC-git-projet2

But du projet : afficher une table de multiplication pour un entier jusqu'à avoir le carré de l'entier
La valeur est saisie dans la fenetre de gauche.
La table est affichée dans la fenetre de droite.

fichiers : 
index.html  // le fichier index du projet
main.css  // les particularités CSS du projet
main.js  // le code javascript associé au projet

Pour le reste on utilise twitter bootstrap et Jquery.


Commit 1 : Commit niveau 0

uniquement README.txt on a vérifié que les commandes git étaient bien paramétrées


Commit 2 : Squelette du projet

Les trois fichiers sont créés.
Le programme ne fait qu'afficher le titre et les fenetres de gauche et droite avec un fond spécifique.
La fenetre de droite est dimensionnée par défaut à 300px de hauteur.


Commit 3 : version de base

fenetre de gauche : 
- présentation améliorée du titre
- ajout d'un champ de saisie
- ajout d'une div pour afficher les messages d'erreur
- ajout d'un bouton pour le lancement de l'affichage

fenetre de droite:
- présentation améliorée du titre
- au clic du bouton de la fenetre de gauche une fonction javascript est lancée: 
si le chiffre est inférieur ou égal à 30 et positif l'affichage se fait dans la div avec l'id latable


Commit 4 : version avec controle plus strict de la saisie

Le test de la valeur rentrée est renforcé en interdisant les nombres à virgule.
Des commentaires sont rajoutés



Commit 5 : version avec affichage amélioré

Il s'agit du correctif pour le redimensionnement dynamique de la fenetre de droite