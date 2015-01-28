
function affiche(i)
{
	if (i>0 && i<=30) // test simple de validité

	{
		$("#erreur").empty(); // enlever message d'erreur
		var montab=$('#latable');
		montab.empty();
		montab.append('<ul>');
		for (var j = 0; j <= i; j++) 
		{
			montab.append('<li>'+j+" X "+i+' = '+i*j+'</li>');
		};
		montab.append('</ul>');

	}
	else 
	{
		// afficher message d'erreur
		$("#erreur").html("Mauvaise saisie le  chiffre doit etre entier et inférieur ou égal à 30");
	}
}


$(document).ready(function(){
	$('.panneau_droit').css('height','300px');

	$('#declenche').click(function(){
		var saisie=$('#nombre').val();
		
		// lancer l'affichage de la table
			affiche(saisie);
		

	});
});