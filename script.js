let donnees = [
    {
    image:"", titre:"Game of Thrones", genre:"Fantastique", annee:"2011-2019", type:"Série", note:"9.2/10" 
}, 
{
    image:"", titre:"Spider-Man: No Way Home ", genre:"Action", annee:"2021", type:"Film", note:"8.2/10"  
}
];


const choix_filtre = document.querySelectorAll('.btn-filtre');
const champ = document.getElementById('recherche');
const btn_rechercher = document.getElementById('btn-recherche');
const conteneur = document.getElementById('les-catalogues');

// Déclarer des variables d'etats por recuperer des valeurs qui seront partager par les fonction et les ecoutes

choix_filtre.forEach(button => {
    button.addEventListener('click', (event) => {
        filtreChoisi = event.target.dataset.genre;
        champ.focus();
        ;
        console.log(filtreChoisi); // <--- ligne a effacer plus tard
    });
});
let filtreChoisi = 'tous';
let rechercheEffectuer = "";


// Poser les ecoutes sur les differents elements (filtres, champrecherche, boutton recherche)

champ.addEventListener('input', () => {
    rechercheEffectuer = champ.value;
    filtreResultat();
});   

btn_rechercher.addEventListener('click', () => {
    filtreResultat();
});


// Declarer des founctions pour effectuer les divers actions (filtrer les cartes, generer des cartes dynamiquement -pour afficher suivant le filtres) lie les fonctions aux ecoutes

function genererCartes(liste) {
    conteneur.innerHTML = "";
    liste.forEach(objet => {
        const carte = document.createElement('div');
        carte.className = 'carte';
        carte.dataset.genre = objet.genre;
        carte.innerHTML = `
        <h3>${objet.titre}</h3>
        <p><em>${objet.genre}</em></p>
        <p><strong>Année : </strong> ${objet.annee}</p>
        <p>${objet.type}</p>
        <p><strong>Note : </strong> ${objet.note}</p>
        `;
        conteneur.appendChild(carte);
    });
};

function filtreResultat () {
    const resultat = donnees.filter(objet => {
        const text = objet.titre.toLowerCase().includes(rechercheEffectuer.toLowerCase());
        const flt = filtreChoisi === objet.genre || filtreChoisi === 'tous';
        return text && flt;

    });
    genererCartes(resultat);
};
 //genererCartes(donnees); // <--- a deplacer vers recherche sans filtre