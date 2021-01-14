

let StatJoueur = class {// class "StatJoueur" qui contient les données du joueur
  constructor(pierre, papier, ciseaux, lezard, spock, win, lose, egaliter){
  this.pierre = 0;//compte cb de fois le joueur a fait pierre
  this.papier = 0;//compte cb de fois le joueur a fait papier
  this.ciseaux = 0;//compte cb de fois le joueur a fait ciseaux
  this.lezard = 0;//compte cb de fois le joueur a fait lezard
  this.spock = 0;//compte cb de fois le joueur a fait spock
  this.win = 0; //compte cb de fois le joueur a gagner
  this.lose = 0;//compte cb de fois le joueur a perdu
  this.egaliter = 0; //compte cb de fois le joueur a fait egaliter
  }
};


alert("Bienvenue dans le jeu Shi-Fu-Mi-Lézard-Spock contre l’ordinateur.")//on affiche une alert pour présenter le jeu

alert("Voici les regles écrire 1: pour pierre 2: pour papier 3: pour ciseau 4: pour lézard 5: pour spock")// on affiche une alert pour présenter les signes

alert("La pierre bat les ciseaux et le lézard.  Le papier bat la pierre et spock. Les ciseaux battent papier et le lézard. Le lézard bat spock et papier. Et Spock bat les ciseaux et pierre")// on affiche une alert qui explique les regles.

var random = Math.floor(Math.random() * 5) + 1; // on appele la fonction Math.random qui permet de tirer un nombre aléatoire. La fonction Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre.
                                                
nbjoueur = parseInt(prompt("Quelle est ton chiffre?")); // on demande au joueur d'écrire un nombre qui correspond a un des signes.

console.log(random); // on affiche la valeur choisi aléatoirement dans la console

if (nbjoueur === random) { // si le nombre du joueur est égale au nombre aléatoire on écrit "égaliter"
  alert("egaliter")
  console.log("Vous avez choisi le meme signe");// on affiche dans la console que le joueur a fait egaliter
}
else  if (nbjoueur === 1 && random === 3){ // sinon si le nombre du joueur est 1 et le  nombre aléatoire est 3 on écrit "La pierre bat les ciseaux, vous gagnez"
  alert("La pierre bat les ciseaux vous gagnez")
  console.log("Pierre bat ciseaux 'gg' ");// on affiche dans la console le nom des signes et que le joueur a gagner 
}
else  if (nbjoueur === 1 && random === 4){// sinon si le nombre du joueur est 1 et le  nombre aléatoire est 4 on écrit "la pierre écrase le lézard, vous gagnez"
  alert("la pierre écrase le lézard, vous gagnez")
  console.log("Pierre bat lézard 'gg' ");// on affiche dans la console le nom des signes et que le joueur a gagner 
}
else  if (nbjoueur === 2 && random === 1){// sinon si le nombre du joueur est 2 et le  nombre aléatoire est 1 on écrit "Feuille contre pierre vous gagnez"
  alert("papier contre pierre vous gagnez")
  console.log("papier bat pierre 'gg' ");// on affiche dans la console le nom des signes et que le joueur a gagner 
}
else  if (nbjoueur === 2 && random === 5){// sinon si le nombre du joueur est 2 et le  nombre aléatoire est 5 on écrit "le papier repousse Spock,vous gagnez"
  alert("le papier repousse Spock,vous gagnez")
  console.log("papier bat Spock 'gg' ");// on affiche dans la console le nom des signes et que le joueur a gagner 
}
else  if (nbjoueur === 3 && random === 2){// sinon si le nombre du joueur est 3 et le  nombre aléatoire est 2 on écrit "Les ciseaux coupent le papier,vous gagnez"
  alert("Les ciseaux coupent le papier,vous gagnez")
  console.log("ciseaux bat papier 'gg' ");// on affiche dans la console le nom des signes et que le joueur a gagner 
}
else  if (nbjoueur === 3 && random === 4){// sinon si le nombre du joueur est 3 et le  nombre aléatoire est 4 on écrit "les ciseaux décapitent le lézard, vous gagnez"
  alert("les ciseaux décapitent le lézard, vous gagnez")
  console.log("ciseaux bat lezard 'gg' ");// on affiche dans la console le nom des signes et que le joueur a gagner 
}
else  if (nbjoueur === 4 && random === 5){// sinon si le nombre du joueur est 4 et le  nombre aléatoire est 5 on écrit "le lézard empoisonne Spock.vous gagnez"
  alert("le lézard empoisonne Spock.vous gagnez")
  console.log("lezard bat spock 'gg' ");// on affiche dans la console le nom des signes et que le joueur a gagner 
}
else  if (nbjoueur === 4 && random === 2){// sinon si le nombre du joueur est 4 et le  nombre aléatoire est 2 on écrit "le lézard mange le papier,vous gagnez"
  alert("le lézard mange le papier,vous gagnez")
  console.log("lezard bat papier 'gg' ");// on affiche dans la console le nom des signes et que le joueur a gagner 
}
else  if (nbjoueur === 5 && random === 3){// sinon si le nombre du joueur est 5 et le  nombre aléatoire est 3 on écrit "Spock écrabouille les ciseaux,vous gagnez"
  alert("Spock écrabouille les ciseaux,vous gagnez")
  console.log("spock bat ciseaux 'gg' ");// on affiche dans la console le nom des signes et que le joueur a gagner 
}
else  if (nbjoueur === 5 && random === 1){// sinon si le nombre du joueur est 5 et le  nombre aléatoire est 1 on écrit "Spock détruit la pierre.vous gagnez"
  alert("Spock détruit la pierre.vous gagnez")
  console.log("spock bat pierre 'gg' ");// on affiche dans la console le nom des signes et que le joueur a gagner 
}
else{// sinon le joueur a perdu.
  alert("Perdu bg retente ta chance")
  console.log("C'est perdu dommage ");// on affiche dans la console que le joueur a perdu
}


recommencer = parseInt(prompt("Veut tu rejouer ? tape 1: pour oui et 2: pour non"));// on demande au joueur si il veut rejouer.

if (recommencer === 1) {// si le joueur ecrit "1"
  location.reload();// On recharge la page
}
else{// si le joueur ecrit "2" on le remercie d'avoir jouer
  alert("Merci d'avoir jouer !")
  console.log("Le jeu est fini");// on affiche dans la console que le joueur a arreter de jouer
}