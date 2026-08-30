let donnees = [
    {
    image:"", titre:"Game of Thrones", genre:"Fantastique", annee:"2011-2019", type:"Série", note:"9.2/10" 
}, 
{
    image:"", titre:"Spider-Man: No Way Home ", genre:"Action", annee:"2021", type:"Film", note:"8.2/10"  
},
{
    image:"", titre:"John Wick", genre:"Action", annee:"2014", type:"Film", note:"7,4/10"
},
{
    image:"", titre:"Mad Max: Fury Road", genre:"Action", annee:"2015", type:"Film", note:"8.1/10"
},
{
    image:"", titre:"Spider-Man:Into the spider-verse", genre:"Animation", annee:"2018", type:"Film", note:"8.4/10"
},
{
    image:"", titre:"Your Name", genre:"Animation", annee:"2016", type:"Film", note:"8.4/10"
},
{
    image:"", titre:"Indiana Jones", genre:"Aventure", annee:"1981", type:"Film", note:"8.4/10"
},
{
    image:"", titre:"Le Seigneur des Anneaux", genre:"Aventure", annee:"2001", type:"Film", note:"8.9/10"
},
{
    image:"", titre:"Friends", genre:"Comédie", annee:"1994", type:"Série", note:"8.9/10"
},
{
    image:"", titre:"The Office", genre:"Comédie", annee:"2005", type:"Série", note:"9/10"
},
{
    image:"", titre:"Love Actuelly", genre:"Comédie romantique", annee:"2003", type:"Film", note:"7.6/10"
},
{
    image:"", titre:"La La Land", genre:"Comédie romantique", annee:"2016", type:"Film", note:"8/10"
},
{
    image:"", titre:"Free Solo", genre:"Documentaire", annee:"2018", type:"Film", note:"8.1/10"
},
{
    image:"", titre:"Nos années sauvages", genre:"Documentaire", annee:"2018", type:"Film", note:"8.4/10"
},
{
    image:"", titre:"Breaking Bad", genre:"Drame", annee:"2008", type:"Série", note:"9.5/10"
},
{
    image:"", titre:"Harry Potter", genre:"Fantastique", annee:"2001-201X", type:"Film", note:"7.6/10"
},
{
    image:"", titre:"Il faut sauver le soldat Ryan", genre:"Guerre", annee:"1998", type:"Film", note:"8.6/10"
},
{
    image:"", titre:"1917", genre:"Guerre", annee:"2019", type:"Film", note:"8.2/10"
},
{
    image:"", titre:"Get Out", genre:"Horreur", annee:"2017", type:"Film", note:"7.7/10"
},
{
    image:"", titre:"Hereditary", genre:"Horreur", annee:"2018", type:"Film", note:"7.3/10"
},
{
    image:"", titre:"Sherlock", genre:"Mystère", annee:"2010", type:"Série", note:"9.1/10"
},
{
    image:"", titre:"Knives Out", genre:"Mystère", annee:"2019", type:"Film", note:"7.9/10"
},
{
    image:"", titre:"True Detective", genre:"Policier", annee:"2014", type:"Série", note:"8.9/10"
},
{
    image:"", titre:"Titanic", genre:"Romance", annee:"1997", type:"Film", note:"7.9/10"
},
{
    image:"", titre:"Pride and Prejudice", genre:"Romance", annee:"2005", type:"Film", note:"7.8/10"
},
{
    image:"", titre:"Interstellar", genre:"Science-fiction", annee:"2014", type:"Film", note:"8.7/10"
},
{
    image:"", titre:"Stranger Things", genre:"Science-fiction", annee:"2016", type:"Série", note:"8.7/10"
},
{
    image:"", titre:"Rocky", genre:"Sport", annee:"1976", type:"Film", note:"8.1/10"
},
{
    image:"", titre:"Prisoners", genre:"Thriller", annee:"2013", type:"Film", note:"8.1/10"
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
        <img src="${objet.image}" alt="${objet.titre}">
        <h3>${objet.titre}</h3>
        <p id="genretype">${objet.type} - <em>${objet.genre}</em></p>
        <p><strong>Année : </strong> ${objet.annee}</p>
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


 /*
    Amélioration souhaiter (perspective futures) : chaque carte puisse s'agrandir au click et presenter des infos supplementaire comme : le resume de l'oeuvre les acteurs principeux ( juste les plus celebres ou emblématique )
 */