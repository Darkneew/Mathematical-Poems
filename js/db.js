const LAYOUT = {
    minPx: 1000,      // Minimum graph width in pixels (small phone floor)
    maxPx: 3000,     // Maximum graph width in pixels (very large desktop cap)
    uiScaleBreak: 1300, // px above which top buttons and footer also scale up
};

const PARAMETERS = {
    "graphRatio":0.85,
    "shift":{
        "x":35,
        "y":30
    }
};

const POEMS = [
{
    "position":{
        "x":280,
        "y":685
    },
    "text": `Un point pour l’espace
On aura beau lancer le lasso hélas
Sans anse pour se raccrocher,
Son destin est déjà noué`,
    "translatedText":`A point as a space
We will try to send the lace
But without rugosity
It cannot escape its destiny`,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/fondagroup.webp",
    "object":"Groupe Fondamental",
    "translatedObject":"Fundamental Group",
    "wikipedia":"https://fr.wikipedia.org/wiki/Groupe_fondamental",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Fundamental_group",
    "author":"Anonymous",
    "translator":"Léo Buisine",
    "id":"fondagroup",
    "edges":["det0","matrix"]
},
{
    "position":{
        "x":25,
        "y":610
    },
    "text": `<u>Binômes</u>

Oiseau et serpent
d’une musique rampante
le venin planeur
échange la sinuosité
d’un coup d’aile
asymétrique
la lumière elle-même
s’écarte

mer et arbre
la sculpture flotte
grimpe l’aquarelle
du poids proportionnel
l’eau l’étoile de mer le sel
il pousse des racines
condiments
qui ne se noient pas

nuage et vent
eau ou feu magique
la rumeur tenace
s’agite gonfle et bruit
la miss météo
craint pour sa réputation
irremplaçable solitude

moteur et panache
danser rotule cheville
l’oiseau-lyre suit
l’œil sombre
le défilé des majorettes
rouges et blanches épuisées
mécaniques enthousiastes
dans tous les tons
se calculent des harmoniques
dans l’abîme salé du silence`,
    "translatedText":`WIP`,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/attract.webp",
    "object":"Attraction et Répulsion",
    "translatedObject":"Attraction and Repulsion",
    "wikipedia":"https://www.universalis-edu.com/dictionnaire/attraction-r%C3%A9pulsion/",
    "translatedWikipedia":"https://www.physicsforall.co.uk/physics-subjects/electricity/attraction-and-repulsion",
    "author":"Pierre Turcotte",
    "translator":"Léo Buisine",
    "id":"attract",
    "edges":["gradient","landau","newton"]
},
{
    "position":{
        "x":560,
        "y":810
    },
    "text": `Tout avant toi n’est que profession de foi, 
Et tout après n’est que voyage. 
Blotti dans le présent depuis le premier âge 
D’où tu as chuchoté tous les secrets du monde, 
Tu es tout à la fois nuit et jour. 
Au-delà les contraintes, les principes et les lois 
Tu as projeté dans l’espace la plus grande histoire d’amour.`,
    "translatedText":`WIP`,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/bigbang.webp",
    "object":"Big Bang",
    "translatedObject":"Big Bang",
    "wikipedia":"https://fr.wikipedia.org/wiki/Big_Bang",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Big_Bang",
    "author":"Isabelle Drocourt",
    "translator":"Léo Buisine",
    "id":"bigbang",
    "edges":["fusion","infinity2","redshift","zero"]
},
{
    "position":{
        "x":300,
        "y":170
    },
    "text": `WIP`,
    "translatedText":`WIP`,
    "isImage": true,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/square2.webp",
    "object":"Carré",
    "translatedObject":"Square",
    "wikipedia":"https://fr.wikipedia.org/wiki/Carr%C3%A9",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Square",
    "author":"Alcare",
    "translator":"Léo Buisine",
    "id":"square2",
    "edges":["reuleaux","triangle","square"]
},
{
    "position":{
        "x":535,
        "y":120
    },
    "text": `Servir de la soupe aux choux à un cerveau qui n’a toujours pas compris qu’il faut que je me cogne la tête contre le mur, mais pas n’importe lequel, pas pour le plaisir, mais comme une sorte de prière, en fait comme si j’avais reçu trop d’amour que je ne méritais pas, alors je me cogne la tête contre un mur rouge, encore ! trois fois, trente fois, mais ce n’est pas suffisant, et je ne dois pas fermer les yeux face à cette sensation, face à cette action, c’est mon mécanisme complexe, lié à la torture de ma machine à coudre. Je ne dois laisser personne me distraire ou mettre de la pitié sur mon épaule, il faut me laisser faire, je ne vais pas me tuer, je ne suis pas fou, c’est juste que je ne veux pas être mou, je me cogne contre le troisième mur de mon kidnappeur imaginaire. Une tête sans pansement est un morceau de papier emporté par le courant d’air. Il faut que je me réveille rempli de cailloux et sans mémoire, Il faut que quand j’ouvre les yeux, je me trouve au milieu de la mer, en train de construire des couloirs. Il est trois heures du matin, dans une heure je me cognerai la tête contre le mur, j’attends cette belle douleur, je me suis promis un bouquet de fleur.`,
    "translatedText":`WIP`,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/square.webp",
    "object":"Carré",
    "translatedObject":"Square",
    "wikipedia":"https://fr.wikipedia.org/wiki/Carr%C3%A9",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Square",
    "author":"Khalid EL Morabethi",
    "translator":"Léo Buisine",
    "id":"square",
    "edges":["group","triangle","ptriple"]
},
{
    "position":{
        "x":680,
        "y":470
    },
    "text": `Apéirophobie

Depuis les sommets je vois tomber une paire
Son bruit ? Tout comme est la neige en grises saisons
Insondable. Sommée, lorsque nous la divisons
Suite à des sommes (et que sais-je ?), de briser l’impaire

Algorithmicienne, tes sombres calculs fuient
(Murmurant des nombres dépassant le plafond)
Ceci m’encombre et je prie, noyé au tréfonds
Je connais les ombres au plus profond de ton puits

T’aurais pu, vilaine, tenir dans un flacon !
Aime-moi sans rengaine, ça oscille mes nuits :
Je peine à la tâche et ta hauteur me rend blême.

T’aurais dû, je t’assure, finir en belle théorie !
Aime-moi ! Et quant à mon futur martèle-lui ton :
« Je t’aime, je t’aime, je t’aime, je t’aime ».`,
    "translatedText":`WIP`,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/collatz.webp",
    "object":"Conjecture de Collatz",
    "translatedObject":"Collatz Conjecture",
    "wikipedia":"https://fr.wikipedia.org/wiki/Conjecture_de_Syracuse",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Collatz_conjecture",
    "author":"Gerus",
    "translator":"Léo Buisine",
    "id":"collatz",
    "edges":["disjunction","division","induction","unit"]
},
{
    "position":{
        "x":80,
        "y":245
    },
    "text": `sur la peau des sphères 
d'invisibles montagnes 
dansent 
leurs courbes soufflent des secrets 
Ici un creux là un sommet 
sans crier 
le monde se plie 
sous les griffes tendues de l'espace
des lignes se brisent 
des abîmes et des cimes s'unissent 
voyez la vérité bifurque 
un miroir s'ébrèche 
chaque point une bataille 
chaque bataille une harmonie
tout ce chaos cavale sous le joug des lois cachées 
sur une selle inversée
son ombre vacille 
entre deux ennemis
l'équilibre d'un instant 
et un pli 
dans l'éternité `,
    "translatedText":`on the skin of spheres
invisible mountains
dance
their curves whisper secrets
Here a hollow there a peak
without a sound
the world bends
beneath the outstretched claws of space
lines break
abysses unite with summits
see how truth diverges
a mirror cracks
each point a battle
each battle a harmony
all this chaos gallops beneath the yoke of hidden laws
on an inverted saddle
its shadow wavers
between two foes
the balance of an instant 
and a fold 
in eternity `,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/gausscurv.webp",
    "object":"Courbure de Gauss",
    "translatedObject":"Gauss Curvature",
    "wikipedia":"https://fr.wikipedia.org/wiki/Courbure_de_Gauss",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Gaussian_curvature",
    "author":"Laurent Poliquin",
    "translator":"Laurent Poliquin",
    "id":"gausscurv",
    "edges":["gausslaw","time","reuleaux"]
},
{
    "position":{
        "x":210,
        "y":530
    },
    "text": `<u>Scène 1.</u>
Lâché d'un coup
À l'origine des temps
Commence la descente 

<u>Scène 2.</u>
La pieuvre monégasque déjà 
File à toute allure
Pourvu que la pente soit rude
..
Il lui arrive bien de faire vieux os 
Dans quelques vallons numériques 
Voir de se coincer
Dans un lac de stabilité  
Mais avec assez de vitesse 
Rien ne l'arrête

Ça fait alors le yoyo
C'est rigolo

<u>Scène 3.</u>
Prenez cependant garde de la vitesse 
Car si par mégarde tu manques l'arrêt 
Alors des milliers de pas peut être 
Seront nécessaires pour revenir en arrière 

Pire encore,
Tu risquerais plus haut
De t'arrêter sur un plateau

<u>Scène 4.</u>
Alors les statisticiens statistiquent 
Et d'appareils surtechnologisés
Ils équipent la machine
Réglés sur plus que mesure 
Pour ne pas manquer 
L'arrêt`,
    "translatedText":`<u>Scene 1.</u>
Dropped at once
At the beginning of time
Starts the descent

<u>Scene 2.</u>
The Monegasquid already 
Flies in a rush
As long as the slope is harsh
..
It can fairly well sometimes linger 
In some numerical valley
Or even get stuck
In a lake of stability
But with enough speed
Nothing can stop it

It then starts yo-yoing
It's very amusing

<u>Scène 3.</u>
Although beware of speed as
If by mistake you miss the stop
Then millions of steps maybe 
Will be needed to go back there

Worse still,
You could up above
Stop in some alcove

<u>Scene 4.</u>
Thus the statisticians statisticize
And of overtechnologized devices
They equip the machine
Tuned to more than measure
As not to miss the 
Stop`,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/gradient.webp",
    "object":"Descente de Gradient",
    "translatedObject":"Gradient Descent",
    "wikipedia":"https://fr.wikipedia.org/wiki/Algorithme_du_gradient",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Gradient_descent",
    "author":"Léo Buisine",
    "translator":"Léo Buisine",
    "id":"gradient",
    "edges":["matrix","newton","NN"]
},
{
    "position":{
        "x":425,
        "y":725
    },
    "text": `Juste une ligne  
Infinie fine
Perçant l'espace 
Perçant structure 
Ligne directe
Inarrêtable
Une ligne sur le plan
Rien qu’un plan dans l'espace
Instant de l'espace-temps 
Intangible moment
Un instant complexe pourtant
Structuré comme un escalier
Aux sous espaces qui s’entassent
Sans fin briqué de lignes fines
Incessant dans les lignes fines
Enfin quadrillage de ruine
Sans arrêt réduisant la transmission 
Sans cesse détruisant l'information 
C’est quand même un bloc massif divisant l'espace 
Amenant au sujet tant de difficulté 
Que toujours on commence par le supprimer
Comme une écharde que l’on ponce de la planche
Alors que sans ce bloc l'espace est incomplet 

Juste une ligne`,
    "translatedText":`WIP`,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/det0.webp",
    "object":"Fibre Nulle du Déterminant",
    "translatedObject":"Null Fiber of the Determinant",
    "wikipedia":"https://fr.wikipedia.org/wiki/D%C3%A9terminant_(math%C3%A9matiques)",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Determinant",
    "author":"Léo Buisine",
    "translator":"Léo Buisine",
    "id":"det0",
    "edges":["matrix","zero"]
},
{
    "position":{
        "x":835,
        "y":535
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/disjunction.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"disjunction",
    "edges":["fission","serie"]
},
{
    "position":{
        "x":550,
        "y":370
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/division.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"division",
    "edges":["prime","zero"]
},
{
    "position":{
        "x":800,
        "y":395
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/econst.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"econst",
    "edges":["exponential","eulerform","serie"]
},
{
    "position":{
        "x":930,
        "y":465
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/radioactive.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"radioactive",
    "edges":["exponential","fission"]
},
{
    "position":{
        "x":955,
        "y":310
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/exponential.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"exponential",
    "edges":["eulerform","log"]
},
{
    "position":{
        "x":905,
        "y":645
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/fission.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"fission",
    "edges":["fusion"]
},
{
    "position":{
        "x":795,
        "y":240
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/eulerform.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"eulerform",
    "edges":["unit"]
},
{
    "position":{
        "x":850,
        "y":780
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/fusion.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"fusion",
    "edges":[]
},
{
    "position":{
        "x":165,
        "y":365
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/gausslaw.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"gausslaw",
    "edges":["unknown"]
},
{
    "position":{
        "x":460,
        "y":230
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/group.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"group",
    "edges":["prime","triangle","U1"]
},
{
    "position":{
        "x":275,
        "y":295
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/unknown.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"unknown",
    "edges":["NN"]
},
{
    "position":{
        "x":710,
        "y":725
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/infinity1.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"infinity1",
    "edges":["serie","induction","infinity2"]
},
{
    "position":{
        "x":575,
        "y":670
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/infinity2.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"infinity2",
    "edges":["zero"]
},
{
    "position":{
        "x":80,
        "y":760
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/landau.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"landau",
    "edges":["time"]
},
{
    "position":{
        "x":665,
        "y":190
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/prime.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"prime",
    "edges":["log","ptriple"]
},
{
    "position":{
        "x":885,
        "y":115
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/log.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"log",
    "edges":[]
},
{
    "position":{
        "x":280,
        "y":420
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/matrix.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"matrix",
    "edges":["U1"]
},
{
    "position":{
        "x":65,
        "y":495
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/newton.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"newton",
    "edges":[]
},
{
    "position":{
        "x":300,
        "y":790
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/redshift.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"redshift",
    "edges":["time"]
},
{
    "position":{
        "x":570,
        "y":530
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/induction.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"induction",
    "edges":["NN","serie"]
},
{
    "position":{
        "x":430,
        "y":470
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/NN.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"NN",
    "edges":[]
},
{
    "position":{
        "x":730,
        "y":595
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/serie.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"serie",
    "edges":[]
},
{
    "position":{
        "x":155,
        "y":635
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/time.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"time",
    "edges":["toda"]
},
{
    "position":{
        "x":330,
        "y":570
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/toda.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"toda",
    "edges":["U1"]
},
{
    "position":{
        "x":380,
        "y":30
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/triangle.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"triangle",
    "edges":["reuleaux","ptriple"]
},
{
    "position":{
        "x":160,
        "y":85
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/reuleaux.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"reuleaux",
    "edges":[]
},
{
    "position":{
        "x":650,
        "y":35
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/ptriple.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"ptriple",
    "edges":[]
},
{
    "position":{
        "x":415,
        "y":340
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/U1.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"U1",
    "edges":["unit"]
},
{
    "position":{
        "x":705,
        "y":310
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/unit.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"unit",
    "edges":[]
},
{
    "position":{
        "x":455,
        "y":590
    },
    "text": ``,
    "translatedText":``,
    "isImage": false,
    "image": null,
    "imageCredit": null,
    "icon": "./assets/latex/webp/zero.webp",
    "object":"",
    "translatedObject":"",
    "wikipedia":"",
    "translatedWikipedia":"",
    "author":"",
    "translator":"",
    "id":"zero",
    "edges":[]
}
];