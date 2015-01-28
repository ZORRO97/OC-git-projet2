
// fonction vérifiant que la variable est bien un entier
function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
}


function affiche(i)
{
	if (i>0 && i<=30 && isInt(i)) // test simple de validité

	{
		i=parseInt(i,10);
		$("#erreur").empty(); // enlever message d'erreur

		

		var montab=$('#latable');

		montab.empty(); // effacer l'ancienne table

		montab.append('<ul>'); // début de la liste
		for (var j = 0; j <= i; j++) 
		{
			montab.append('<li>'+j+" X "+i+' = '+i*j+'</li>'); 
			// génération d'une ligne <li>j X i = (i*j) </li>
		};

		montab.append('</ul>'); // fin de la liste

	}
	else 
	{
		// afficher message d'erreur
		$("#erreur").html("Mauvaise saisie le  chiffre doit etre entier et inférieur ou égal à 30");
	}
}


$(document).ready(function(){
	// on assigne la propriété hauteur 300px à la fenetre de droite
	 $('.panneau_droit').css('height','300px'); 

	// on gère le clic sur le bouton de la fenetre de gauche
	$('#declenche').click(function(){
		var saisie=$('#nombre').val();
		
		// lancer l'affichage de la table
			affiche(saisie);
		

	});
});