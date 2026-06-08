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
    "images": [],
    "icon": "./assets/latex/webp/groupefonda.webp",
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
    "translatedText":`<u>Pairs</u>

Bird and serpent
from a slithering music
the gliding venom
trades the sinuosity
by a wingbeat
asymmetrical
light itself
moves aside

sea and tree
the sculpture floats
climbs the watercolor
through proportional weight
the water starfish salt
roots grow
condiments
that do not drown

cloud and wind
water or magical fire
the stubborn hearsay
stirs swells and noise
the weather girl
fears for her reputation
irreplaceable loneliness

engine and plume
to dance kneecap ankle
the lyrebird follows
the dark eye
the parade of majorettes
red and white exhausted
mechanical enthusiastic
in every tone
are computed harmonics 
in the salty abyss of silence`,
    "isImage": false,
    "images": [],
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
    "translatedText":`All before your advent is nothing but a tenet
And all after is naught but a journey
Curled in the present since the primal age, 
Where you whispered all of the world's secrets,
You are at once both night and day.
Beyond all laws, principles and constraints
You have cast into space the greatest love story.`,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/bigbang.webp",
    "object":"Big Bang",
    "translatedObject":"Big Bang",
    "wikipedia":"https://fr.wikipedia.org/wiki/Big_Bang",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Big_Bang",
    "author":"Isabelle Teyssier-Matrot",
    "translator":"Léo Buisine",
    "id":"bigbang",
    "edges":["fusion","infinity2","redshift","zero"]
},
{
    "position":{
        "x":300,
        "y":170
    },
    "text": "./assets/poems/webp/square.webp",
    "translatedText":`./assets/poems/webp/square_translated.webp`,
    "isImage": true,
    "images": [],
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
    "translatedText":`Serving cabbage soup to a brain that still hasn't understood that I need to hit my head against the wall, but not just any wall, not for fun, but as a kind of prayer, in fact as if I'd received too much love that I didn't deserve, so I hit my head against a red wall, again! three times, thirty times, but it's not enough, and I mustn't close my eyes in the face of this sensation, in the face of this action, It's my complex mechanism, linked to the torture of my sewing machine. I mustn't let anyone distract me or put pity on my shoulder, you have to let me do it, i'm n o t g o i n g to k i l l m y s e l f, I'm not crazy, I just don't want to be soft. I'm hitting the third wall of my imaginary kidnapper. A head without a bandage is a piece of paper blown away by the wind. I've got to wake up full of pebbles and no memory, I have to open my eyes and find myself in the middle of the sea, building corridors. It's three in the morning, in an hour I'll be hitting my head against the wall, I'm waiting for that beautiful pain, I promised myself a bouquet of flowers.`,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/square.webp",
    "object":"Carré",
    "translatedObject":"Square",
    "wikipedia":"https://fr.wikipedia.org/wiki/Carr%C3%A9",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Square",
    "author":"Khalid EL Morabethi",
    "translator":"Khalid EL Morabethi",
    "id":"square",
    "edges":["group","ptriple"]
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
    "translatedText":`Apeirophobia

Parked in the highest peaks I see a pair descend,
Its sound? Just like snow during the grey interlude
Fathomless. Summoned, when divided
After a sequence of sums (and who knows?), to break the odd

Computer-operator, your dark computations flee
(Mouthing numbers that exceed the ceiling)
This weighs on me and I pray, in depths drowning
As the shadows of your well's deepest recesses are known to me.

U could have, wicked one, fit in a flask !
Love me without refrain, it sways my nights:
I struggle with the task and pale at your height.

U should have, I promise you, ended as a pretty theory!
Love me! and concerning my future hammer endlessly :
"I love you, I love you, I love you, I love you…"`,
    "isImage": false,
    "images": [],
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
    "images": [],
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

<u>Scene 3.</u>
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
    "images": [],
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
    "translatedText":`Just a line
Infinitely thin
Piercing the space
Piercing structure
Direct line
Unstoppable
A line on the plane
Just a plane in the space
An instant of spacetime
Intangible bit of time
A complex instant nonetheless
Structured as a staircase
With subspaces piling up
Endless nest of thin lines
Non-stop inside thin lines
Ultimately grid of ruins
Boundlessly reducing transmission
Ceaselessly destroying information
It really is a massive block dividing space
Bringing so much difficulty to the subject
That we always start by its deletion
Like a splinter sanded off the plank
Even though without it the space is incomplete

Just a line`,
    "isImage": false,
    "images": [],
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
    "text": `Au XXIème siècle, comme depuis des millénaires, dans la matière...
Le vivre ensemble est une bibliothèque en étagères de 'si...'
Où chacun dépose son livre de 'mais...' dans l'illusion mondialiste que la société résultante sera issue de la somme des différences précédentes.
Car, bâtir une génération hypothétique idéale sur le principe philosophique mathématique du nombre d'or non applicable par la conjonction de coordination est factice.
Et donc, au final, sa conjonction de subordination ne sert ni l'harmonie ni la beauté de la nouvelle structure géométrique...
Seulement son effondrement.`,
    "translatedText":`In the XXIth century, as has been for millennia, for this matter…
How to live together is a library in shelves of 'if…'
Where everyone deposits its book of 'but…' in the globalist illusion that the resulting society will emerge from the sum of previous differences.
As, building an hypothetical ideal generation on the philosophical mathematical principle of the golden ratio inapplicable by coordination of conjunction is dummy.
And thus, in the end, its subordinating conjunction serves neither the harmony nor the beauty of the new geometric structure…
Only its collapse.`,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/disjunction.webp",
    "object":"Disjonction",
    "translatedObject":"Disjunction",
    "wikipedia":"https://fr.wikipedia.org/wiki/Disjonction_logique",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Logical_disjunction",
    "author":"Laurent Orsucci",
    "translator":"Léo Buisine",
    "id":"disjunction",
    "edges":["fission","serie"]
},
{
    "position":{
        "x":550,
        "y":370
    },
    "text": `Présent dans ce monde, 
Elle empêche la planète d’être ronde. 
Plus de richesse, 
Pour les pauvresses. 

À cause de son existence, 
Elles ne peuvent se nourrir en substance. 
Car elle leur enlève leur dû. 
Qui est donc cette inconnue ? 

Elle est pire, 
Qu’un soupir, 
Et leur enlève leur sourire. 
Sa présence fait rire, 
Les riches. 

Et nous rends, 
Impuissants, 
Face au vent, 
Que représente l’argent.`,
    "translatedText":`Present in this world,
It keeps the planet from being round.
No more riches,
For poor ladies.

Because of its existence,
They cannot feed in substance.
For it takes away their claim.
Who then is this unknown item?

It is worse,
Than a curse,
And steals their smiles away.
Its presence is as a smiley,
For the rich.

And leaves us,
Powerless,
Facing the breeze,
Embodied by finances.`,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/division.webp",
    "object":"Division",
    "translatedObject":"Division",
    "wikipedia":"https://fr.wikipedia.org/wiki/Division",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Division_(mathematics)",
    "author":"Marion Doucet",
    "translator":"Léo Buisine",
    "id":"division",
    "edges":["prime","zero"]
},
{
    "position":{
        "x":800,
        "y":395
    },
    "text": `Il insiste 
à déraison 
il persiste
ô polisson 
de conserve
avec Euler`,
    "translatedText":`It insists
o deranged
it persists
o rascally
as accorded
with Euler`,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/econst.webp",
    "object":"Nombre e",
    "translatedObject":"Number e",
    "wikipedia":"https://fr.wikipedia.org/wiki/E_(nombre)",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/E_(mathematical_constant)",
    "author":"Soledad Lida",
    "translator":"Léo Buisine",
    "id":"econst",
    "edges":["exponential","eulerform","serie"]
},
{
    "position":{
        "x":930,
        "y":465
    },
    "text": `Leurs traits sont d'une 
vierge ; un instinct 
dévorant 
De leur rapace essaim 
conduit le vol errant ;
Une horrible maigreur
Creuse leurs flancs 
avides,
Qui, toujours,
s'emplissant, demeurant 
Toujours vides,
Surchargés d'aliments,
Sans en êtres nourris,
En un fluide infect en
Rendent les débris,
Et de l'écoulement de 
Cette lie impure
Empoisonnement les airs,
Et souillés la verdure.


<i>Extrait remanié de l’article Wikipédia français sur les Harpies, accédé en mai 2026, lui-même remanié du livre III de la traduction de Jacques Delille de l’Énéide de Virgile. </i>`,
    "translatedText":`Their features are that of 
virgin girls; an instinct
ravenous 
Of their rapacious swarm
Drives the wandering flight; 
A dreadful gauntness 
Hollows their flanks
hungry, 
Which, forever, 
Filling themselves, remain 
Forever empty, 
Overloaded with sustenance, 
Yet never nourished by it, 
Into a foul fluid 
They turn its remnants, 
And from the outflow 
Of this impure dregs 
Poisoning the airs,
And stained the greenery. 

<i>Adapted from the French Wikipedia article on the Harpies, accessed in May 2026, itself adapted from Book III of Jacques Delille's translation of Virgil's Aeneid. </i>`,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/radioactive.webp",
    "object":"Éléments Radioactifs",
    "translatedObject":"Radioactive Elements",
    "wikipedia":"https://fr.wikipedia.org/wiki/Radioisotope",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Radionuclide",
    "author":"Laurent Orsucci",
    "translator":"Léo Buisine",
    "id":"radioactive",
    "edges":["exponential","fission"]
},
{
    "position":{
        "x":955,
        "y":310
    },
    "text": `Elle.
Elle est.
Elle est vraiment.
Elle est vraiment capitaliste.`,
    "translatedText":`It.
It is.
It is really.
It is really capitalist.`,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/exponential.webp",
    "object":"Fonction Exponentielle",
    "translatedObject":"Exponential Function",
    "wikipedia":"https://fr.wikipedia.org/wiki/Fonction_exponentielle",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Exponential_function",
    "author":"Mathilde Gabory",
    "translator":"Léo Buisine",
    "id":"exponential",
    "edges":["eulerform","log"]
},
{
    "position":{
        "x":905,
        "y":645
    },
    "text": `Si l'archer est assez puissant, de la source jailliront l'imprévisible et son anti-poème jumeau.
Abriter la pluie incandescente.`,
    "translatedText":`If the archer is powerful enough, from the source will spring the unforeseeable and its anti-poem twin.
Shelter the incandescent rain.`,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/fission.webp",
    "object":"Fission Nucléaire",
    "translatedObject":"Nuclear Fission",
    "wikipedia":"https://fr.wikipedia.org/wiki/Fission_nucl%C3%A9aire",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Nuclear_fission",
    "author":"Irénée Frérot",
    "translator":"Léo Buisine",
    "id":"fission",
    "edges":["fusion"]
},
{
    "position":{
        "x":795,
        "y":240
    },
    "text": `La farandole des <i>i</i>, <i>e</i>, π détrône -1.
Quels sont ces nombres, dont l’alliance a un pouvoir ainsi décuplé ?

<i>i</i>, algébrique, enfant audacieux de Bombelli et Cardan.
Dans l’espace-temps, il modélise les signaux et clarifie les ondes.
Les sinusoïdes : un jeu d’enfant avec la transformée de Fourier !
Malgré son identité, il adoucit la complexité.

Intérêts composés ? <i>e</i> est assidu à multiplier les gains.
<i>e</i>, transcendant, inatteignable au vu de sa croissance saisissante.
Pas tout jeune, cependant !
Ce jeune homme du 17<sup>e</sup> siècle, jamais dépassé, a encore son mot à dire.
Il vibre au gré des oscillations, accélère l’essor des bactéries.

La roue tourne, mais π, transcendant, esquive la quadrature du cercle.
Pourtant il domine les voûtes au sommet de la coupole.
Dans la pierre taillée, il dessine un doux arc harmonieux en forme d’anse de panier.
Il rythme la fréquence des cordes de guitare. La cloche résonne de sa pulsation.

Le mystère irradie de cette cavalcade de nombres.`,
    "translatedText":`The folk dance of <i>i</i>, <i>e</i>, π dethrones -1. 
What are these numbers, whose alliance wields such amplified power? 

<i>i</i>, algebraic, bold child of Bombelli and Cardano. 
In spacetime, it models signals and clarifies waves. 
Sinusoids: child's play with the Fourier transform! 
Despite its identity, it softens complexity. 

Compound interest? <i>e</i> is diligent in multiplying gains. 
<i>e</i>, transcendental, unreachable given its striking growth. 
Not so young, however! 
This 17<sup>th</sup>-century young man, never surpassed, still has his say.
It vibrates along oscillations, accelerates the soar of bacteria. 

The wheel turns, but π, transcendental, evades squaring the circle. 
Yet it dominates the vaults at the summit of the dome. 
In carved stone, it draws a harmonious arc gently shaped like a basket handle. 
It sets the rhythm of guitar strings' frequency. The bell resonates with its pulse. 

Mystery radiates from this cavalcade of numbers.`,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/eulerform.webp",
    "object":"Formule d'Euler",
    "translatedObject":"Euler's Formula",
    "wikipedia":"https://fr.wikipedia.org/wiki/Formule_d%27Euler",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Euler%27s_formula",
    "author":"Annick Pipaud",
    "translator":"Léo Buisine",
    "id":"eulerform",
    "edges":["unit"]
},
{
    "position":{
        "x":850,
        "y":780
    },
    "text": `Le retour au méandre par l’attraction des eaux
Des astres au noyau 
Résonna dans les profondeurs de son magma 
Quand une barque percuta 

Du bord au large le plasma mirage renaîtra 

De son tunnel, il avait agité sa main 
Pour qu’elle le rejoigne au lendemain 
Electron libre perdu dans un brouillard sans aile 
Sans phare pour percer un trou du ciel 

Du bord au large le plasma mirage traversa

Il avait ancré son cœur magnétique de verre
D’une flèche illuminée toute la mer
A la dérive pour un arc-en-ciel ionisé 
D’électrochocs à l’âme l’effraction pénétrée 

Céleste solaire au récif terre émergea 

L’accès par la passe en S au contour des flots
Siffla sur son vaisseau
La collision nucléaire à la fission du mat
D’une voix le brisa

Céleste solaire au nadir rouge s’envola

Au-delà d’elle, il avait louvoyé sans fin
Pour qu’elle lui témoigne sous toile de lin
Sa chaleur sous atmosphère son trait d’art pêle-mêle
Le cap sur ses couleurs et ses ondes charnelles

Céleste lionne au plasma brûlant renaîtra 

Il avait lié cœur contre elle entre ses mains 
Ejecté raies dans les airs marins 
Sous les bombes au climat d’énergie chaotique 
Céleste crie sur l’hélice amniotique

Cent mille un dugong né de l’énergie du grain `,
    "translatedText":`The return to the meander through the attraction of the waters
From the stars to the nucleus
Echoed in the depths of its magma
When a boat struck 

From shore to open sea, the plasma mirage will be reborn

From his tunnel, he had waved his hand
So that she could join him the day after
Free electron lost in a wingless mist
Without lighthouse to pierce a hole of the sky

From the shore to the open sea, the mirage plasma crossed

He had anchored his magnetic heart of glass
With an arrow illuminating the whole sea,
Drifting for an ionized rainbow
With electroshocks penetrating the soul

Céleste solar at the reef earth emerged

The access through the passe en S at the contour of the waves
Hissed against his vessel
The nuclear collision at the fission of the mast
In a voice shattered it

Céleste solar at the red nadir took flight

Beyond her, he had tacked endlessly
So she might testify under linen canvas
Her heat under atmosphere her jumbled art stroke
Focusing on her colors and her sensual energy

Céleste lioness with burning plasma will be reborn

He had bound heart against her within his hands
Ejected rays into the marine air
Under the bombs in the chaotic energy climate
Céleste cries out on the amniotic helix

One hundred thousand and one dugongs born from the energy of the grain`,
    "isImage": false,
    "images": [{"link":"./assets/images/webp/fusion.webp",
    "credit": "Stéphanie Nguyen"}],
    "icon": "./assets/latex/webp/fusion.webp",
    "object":"Fusion Nucléaire",
    "translatedObject":"Nuclear Fusion",
    "wikipedia":"https://fr.wikipedia.org/wiki/Fusion_nucl%C3%A9aire",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Nuclear_fusion",
    "author":"Stéphanie Nguyen",
    "translator":"Stéphanie Nguyen, Léo Buisine",
    "id":"fusion",
    "edges":[]
},
{
    "position":{
        "x":165,
        "y":365
    },
    "text": `L'indécision de la moyenne
En te mélangeant à tes paires
tu restes toujours toi même
l'univers te supporte
mais si par le carré
la diagonale t'emporte
tu vas rentrer dans mon verre`,
    "translatedText":`The mean's indecision
By mixing with your pairs
you always remain yourself
the universe supports you
but if through the square
the diagonal carries you away
you will fit in my glass`,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/gausslaw.webp",
    "object":"Loi du Demi-cercle",
    "translatedObject":"Semicircle Distribution",
    "wikipedia":"https://fr.wikipedia.org/wiki/Loi_du_demi-cercle",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Wigner_semicircle_distribution",
    "author":"Elio Moreau",
    "translator":"Léo Buisine",
    "id":"gausslaw",
    "edges":["unknown"]
},
{
    "position":{
        "x":460,
        "y":230
    },
    "text": `L'horloge tique
En engrenages jamais connectés 
- tous disjoints 
En directions incompatibles
- paramètres réglables

L'horloge tique
Parfois simple disque
Parfois de profondeur infinie
Parfois aux profondeurs infinies
Parfois jeu de cylindres à plusieurs étages

Tant ceci dit qu'il est de type fini 
Il sera dessinable
Et alors - on le regardera rouler`,
    "translatedText":`There ticks the clock
In never connected gears
- each disjointed
In incompatible directions
- adjustable parameters

There ticks the clock
Sometimes a simple disk 
Sometimes of infinite depth
Sometimes with infinite depths
Sometimes multi-stage cylinder set

Although as long as it has 
Only finitely many generators
It can be drawn
And then - we shall watch it roll`,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/group.webp",
    "object":"Groupe Abélien",
    "translatedObject":"Abelian Group",
    "wikipedia":"https://fr.wikipedia.org/wiki/Groupe_ab%C3%A9lien",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Abelian_group",
    "author":"Léo Buisine",
    "translator":"Léo Buisine",
    "id":"group",
    "edges":["prime","triangle","U1"]
},
{
    "position":{
        "x":275,
        "y":295
    },
    "text": `J'ai dessiné un carré
 j'y ai enfermé le secret 
— un point d'interrogation — 
que je dois calculer
sans parler d'équation
sans le nommer.
Le secret est un nombre
qui me fait signe
je respecte la consigne :
en le multipliant par deux
en ajoutant un
je dois trouver cinq.
Dans mon carré
le secret se dévoile
deux fois le secret vaut cinq moins un
dans mon carré
mon point d'interrogation
devient un deux.
Tout cela pour interdire l'équation
2x+1=5
Si vous ne comprenez pas ce poème
rendez-vous sur les programmes scolaires

<i>en hommage à Ghazi Abou-Jaoudé</i>`,
    "translatedText":`I drew a square
I locked the secret in it
— a question mark —
that I must compute
without speaking of equations
without naming it.
The secret is a number
gesturing at me.
I follow the rule:
by multiplying it by two
by adding one
I should find five.
Inside my square
the secret reveals itself.
Twice the secret equals five minus one.
Inside my square
my question mark
becomes a two.
All this to forbid the equation
2x+1=5
If you do not understand this poem
please refer to the school curriculum.

<i>In tribute to Ghazi Abou-Jaoudé</i>`,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/unknown.webp",
    "object":"Inconnue",
    "translatedObject":"Unknown",
    "wikipedia":"https://fr.wikipedia.org/wiki/Inconnue_(math%C3%A9matiques)",
    "translatedWikipedia":"https://simple.wikipedia.org/wiki/Unknown_(mathematics)",
    "author":"Maryvonne Pellay",
    "translator":"Léo Buisine",
    "id":"unknown",
    "edges":["NN"]
},
{
    "position":{
        "x":710,
        "y":725
    },
    "text": `Plus que le tout, moins que le rien
A d’aucun il n’appartient

Dans le vertige de l’espace
Jamais on ne le dépasse

Dans le vertige du temps
Il est incandescent

Associé à l’éternité
Il avance à jamais`,
    "translatedText":`More than the everything, less than the nothing
To none of them it is belonging

In the vertigo of space
Never can it be outpaced

In the vertigo of instants
It is incandescent

Associated to eternity
It moves on endlessly`,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/infinity1.webp",
    "object":"Infini",
    "translatedObject":"Infinity",
    "wikipedia":"https://fr.wikipedia.org/wiki/Infini",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Infinity",
    "author":"Denise Bauer",
    "translator":"Léo Buisine",
    "id":"infinity1",
    "edges":["serie","induction","infinity2"]
},
{
    "position":{
        "x":575,
        "y":670
    },
    "text": `Le compactifié d'univers
Grain de semoule sur la ligne
Crame-le-bout, bout de ficelle
Cautériser des deux côtés 
Rimes embrassées 
Ruban huit fois emmêlé
Voyelle comme un point : 
Il est allongé par terre.`,
    "translatedText":`The compactification of a universe
Semolina grain on the line
Burn-the-piece, piece of thread
Cauterized on both ends
Enclosed rhymes
Ribbon eight times entangled
Vowel as a point: 
It is lying on the ground.`,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/infinity2.webp",
    "object":"Infini",
    "translatedObject":"Infinity",
    "wikipedia":"https://fr.wikipedia.org/wiki/Infini",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Infinity",
    "author":"Mathilde Gabory",
    "translator":"Léo Buisine",
    "id":"infinity2",
    "edges":["zero"]
},
{
    "position":{
        "x":80,
        "y":760
    },
    "text": `We believed you doomed
To spiraling down 
The land of the sphere,
Magnetized to your death  

Until the slickest current
Undamped as lipstick gloss,
Rekindled the spark—

And it makes me happy
Watching your gilded circles
slow-ly quilt around infinity.`,
    "translatedText":false,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/landau.webp",
    "object":"Landau-Lifshitz-Gilbert-Slonczewski Equation",
    "translatedObject":false,
    "wikipedia":"https://en.wikipedia.org/wiki/Landau%E2%80%93Lifshitz%E2%80%93Gilbert_equation#Landau%E2%80%93Lifshitz%E2%80%93Gilbert%E2%80%93Slonczewski_equation",
    "translatedWikipedia":false,
    "author":"Julie Grollier",
    "translator":false,
    "id":"landau",
    "edges":["time"]
},
{
    "position":{
        "x":665,
        "y":190
    },
    "text": `Invisibles architectes, éparpillés dans l’infini, 
ils combinent les bits, livrent des clés, sécurisent nos données.
Traqués par les mathématiciens, leur suite croissante infinie n’admet pas de limite.
Échos d’un ordre caché, dévoilés par le réseau de mailles d’Eratosthène,
la spirale d’Ulam, les suites d’entiers impairs de Sundaram,
la construction de Moessner, le crible d’Atkin…
Ils sont le fondement du monde numérique.
Au cœur des algorithmes, ils guident les machines.
Dans les flux de données, ils opèrent sous des lignes de code.
À travers les matrices, ils ajustent le cryptage, 
donnent forme aux idées encodées. 
L’intelligence artificielle émerge alors de leur monde.`,
    "translatedText":`Invisible architects, scattered throughout infinity,
they combine the bits, deliver keys, secure our data.
Hunted by mathematicians, their infinite increasing sequence admits no limit.
Echoes of a hidden order, revealed by Eratosthenes’s mesh network,
Ulam’s spiral, Sundaram's odd-integer sequences,
Moessner's construction, Atkin’s sieve…
They are the foundation of the digital world.
At the heart of algorithms, they guide machines.
Within data streams, they operate beneath lines of code.
Through matrices, they refine encryption,
give shape to encoded ideas.
Artificial intelligence then emerges from their world.`,
    "isImage": false,
    "images": [{"link":"./assets/images/webp/primes1.webp",
    "credit": "Gerd Altmann (Pixabay)"},{"link":"./assets/images/webp/primes2.webp","credit":"Annick Pipaud"}],
    "icon": "./assets/latex/webp/prime.webp",
    "object":"Nombres Premiers",
    "translatedObject":"Prime Numbers",
    "wikipedia":"https://fr.wikipedia.org/wiki/Nombre_premier",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Prime_number",
    "author":"Annick Pipaud",
    "translator":"Léo Buisine",
    "id":"prime",
    "edges":["log","ptriple"]
},
{
    "position":{
        "x":885,
        "y":115
    },
    "text": `D’une abstraction lunaire 
Au centre de la Terre 
Référence univers 
Vol plané dans l’éther 

La plume défragmentée 
Je colore mes pensées 
D’un rose siliconé 
De sucre et de miel épicé 

Les yeux dans l’équation 
Des nombres vermillon 
J’ai perdu l’intuition 
Dans les constellations 

Algorithmique 
Pyrotechnique 
Géométrique 
Trop électrique 

La probabilité 
D’un amour au carré 
Où tout est calculé 
Gagne en complexité 

Dans les espaces différentiels 
De mes axiomes irrationnels, 
J’ai confondu le bleu du ciel 
Sur le vecteur d’un logiciel 

Envies tantriques 
Désir quantique 
Bombe atomique 
Courbes authentiques 

J’ai multiplié la masse 
De mes idées salaces  
Par la vitesse vivace 
De la lumière en rosace 

Je l’aime dans l’extrême 
D'un poème en théorème 
E=mc2 mon amour 
Pythagore, je t’adore`,
    "translatedText":`From an abstraction lunar
To Earth’s center
Reference universe
Gliding flight through the ether

The defragmented quill
I color my ideas
With a silicone pink
Of sugar and spiced honey

My eyes in the equation
Of numbers vermilion
I lost the intuition
Among the constellations

Algorithmic
Pyrotechnic
Geometric
Too electric

The probability needed
Of a love squared
Where all is computed
Is growing more complicated

In the spaces differential
Of my axioms irrational,
I mistook the sky’s blue cobalt
On a software’s object vectorial

Needs tantric
Quantum avarice
Bomb atomic
Curves authentic

I multiplied the energy
Of my salacious idea
By the lively velocity
Of light as a window rosy

I love her in the extreme
Of a poem as a theorem
E = mc2 my love
Pythagoras, I adore you`,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/log.webp",
    "object":"Logarithme",
    "translatedObject":"Logarithm",
    "wikipedia":"https://fr.wikipedia.org/wiki/Logarithme",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Logarithm",
    "author":"Elsa Grindel",
    "translator":"Léo Buisine",
    "id":"log",
    "edges":[]
},
{
    "position":{
        "x":280,
        "y":420
    },
    "text": `Je l’approche à tâtons
La découvrant peu à peu

Habituellement d’un air composé,
Elle me décoche un regard dans le miroir,
puissance n
Devant lui, elle trans pose,
et les deux pans de son manteau
me révèlent les nombres de son <span style='font-family: "Lucida Console", "Courier New", monospace'>[cœur]</span>

Fascinée par son image
Je la suis à la trace
C’est sûr ce soir va être
déterminant je susurre

J’ouvre deux grands yeux quand elle se pare
de son écharpe de reine
Des lignes parfaites se détachent derrière les colonnes grecques ;
Elle est là.
Ravie, je m’élance,
Mais tout à coup je me sens nulle : suis-je allée trop loin ?
Elle me rassure : c’est tout l’inverse !

et je me dis dans un frisson
que Gauss n’aurait pas fait mieux.`,
    "translatedText":`I approach her by feeling my way 						
Discovering her little by little

Usually with a composed air,
She gives me a look in the mirror,
power n
Right here she trans poses,
and the two sides of her coat 
reveal the numbers of her <span style='font-family: "Lucida Console", "Courier New", monospace'>[heart]</span>

Intrigued by her image
I follow her trace
Tonight is sure to be 
determinant I whisper

I open my eyes wide as she adorns herself
in her queenly sash
Perfect lines stand out behind the Greek columns;
There she is.
Delighted, I rush forward,
But suddenly I feel nullified: have I gone too far?
She reassures me: it's just the inverse!

and I shudder to think
Gauss couldn't have done it better.`,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/matrix.webp",
    "object":"Matrice",
    "translatedObject":"Matrix",
    "wikipedia":"https://fr.wikipedia.org/wiki/Matrice_(math%C3%A9matiques)",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Matrix_(mathematics)",
    "author":"Louise Alloula--Marcoul",
    "translator":"Louise Alloula--Marcoul",
    "id":"matrix",
    "edges":["U1"]
},
{
    "position":{
        "x":65,
        "y":495
    },
    "text": `&#9;Aujourd'hui le professeur...
       
Ou plutôt ce soir, devoir !

&#9;P=mxg

Pom.pom.pom.pom..
un grand classique,
élémentaire
mon cher Newton !

Hon.hon.hon.hon...
ça sent le rond,
note, comme hier
demain musique...

Que faire d'un (P)oids
(m)asse (g)ravité ?
même avec les,
règles de trois !

Je place PAIX
(N)ewton changé,
bonjour le (P)oids
d'un tel porté.

Garde la(m)asse
en kilogrâme,
terre populace
des hommes, des femmes.

Pour terminer
me reste (g),
sa pesanteur
mot qui fait peur !
l'intensité
(g)uerre rimée.

&#9;PAIX = (m)asses x (g)uerres

Le résumé
de millénaires...
où là le (P)
du signe égal,
son intervalle
pas respecté.

Essayons (m)asses
règles de 3,
son résultat
tout à la masse !

&#9;(m)asse = PAIX sur (g)uerres

Là, où l'ensemble
kilos de lois
règles des fois,
désuni trois...
(P) divisée
choix du dernier,
et monde tremble
son lourd en r.

Finissons (g)uerre
la symphonie,
des pom.pom.pom
canons Newton.

&#9;(g)uerre = PAIX sur (m)asses

Semble la PAIX
l'âme des (m),
son faible poids
face à tout ça !
21 grammes
pour nous le drame,
revenir l'air
nos aujourd'hui,
l'hymne sans j'aime...
adieu la vie!

Quels résultats...
formule là,
en prosémath
nous donne là!
Résoudre ainsi
la PAIX en math,
et pourquoi pas...

&#9;1+1=3 !

Mais, je souris
la prosémath
ouvre des voies,
que l'on voit pas !

Change loi Newton
chante tes rêves
son qui résonne,
voici mot trêve
qui apparaît !

Pas compliqué
son appliqué
lettres simplifiées,
PAIX méritée !

PAIX devient TRÊVE
ou T.R.V,
nouvelles données.

La (T)erre, le (T)
(R)aison gardée,
(V)ie Prométhée.

J'ai même gardé
le P.m.g
dedans caché,
pas mal joué !

&#9;(T)erre  = (R)aison x (V)ie

À vous de jouer
règles de trois,
marche à chaque fois !
Avec la trêve
lettres combinées
d'êtres T.R.V,
PAIX préservée.

C'est un beau rêve
demain l'école,
le professeur
joli zéro,
une heure de colle !
et moi cadeau...

&#9;...d'une belle roze.`,
    "translatedText":`&#9;Today the teacher...

Or rather tonight: homework!

&#9;P=mxg

Tap.tap.tap.tap...
a great classic,
elementary
my dear Newton!

Hum.hum.hum.hum...
it smells of circles,
note, like yesterday
tomorrow music…

What to do with (P)weight
(m)ass and (g)ravity?
even armed with,
rules of three!

I place PEACE
for (N)ewton changed,
hello to the (P)weight
of such a lift.

Keep the (m)ass
in kilograms,
popular ground
of men, of women.

To finish
remains (g),
its gravity
a frightening word!
the intensity
(g)uns in rhyme.

&#9;PEACE = (m)asses x (g)uns

The summary
of millennia...
where here the P
of the equal sign,
its interval
not respected.

Let's try (m)asses
rule of three,
its result
all to the mass!

&#9;(m)ass = PEACE over (g)uns

There, where the set
kilos of laws
rules of times,
disunited three…
(P) divided
choice of the last,
and world trembles
its heavy in r.

Let's finish (g)uns
the symphony,
of tap.tap.tap
Newton cannons.

&#9;(g)uns = PEACE over (m)asses

PEACE seems
the soul of (m),
its slight weight
against all of this!
21 grams,
for us the drama,
to be returning tune
our todays,
the anthem without I love...
farewell life!

What results...
formula here,
in prosemath
gives us there!
To solve this way
the PEACE in math,
and why not...

&#9;1+1=3!

Yet, I smile
the prosemath
opens paths,
we can't see!

Change Newton law
sing your dreams
sound that resounds,
here comes word TRUCE
appearing!

Not complicated
sound applied
letters simplified,
TRUCE deserved!

PEACE becomes TRUCE
or E.R.L.,
new data.

the (E)arth, the (T)
(R)eason preserved,
(L)ife Prometheus.

I even kept
the P.m.g.
hidden inside,
nicely played!

&#9;(E)arth = (R)eason x (L)ife

Your turn to play
rules of three,
works every time!
With the truce
letters combined
of beings T.R.V,
PEACE preserved.

It's a pretty dream
tomorrow the school,
the teacher,
nice zero,
an hour's detention!
and me gift...

&#9;...with a beautiful roze.`,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/newton.webp",
    "object":"Potentiel Newtonien",
    "translatedObject":"Newtonian Potential",
    "wikipedia":"https://fr.wikipedia.org/wiki/Potentiel_newtonien",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Newtonian_potential",
    "author":"Laurent Orsucci",
    "translator":"Léo Buisine",
    "id":"newton",
    "edges":[]
},
{
    "position":{
        "x":570,
        "y":530
    },
    "text": `Juge mais partie
ton destin te précède
sur le limon du fleuve
qui t'engendra

Et tu devras
donner ce que qui t'était
dédié mais de surcroît
enchâssé dans
un morceau de ton âme`,
    "translatedText":`Judge, yet a party
your destiny precedes you
on the silt of the river
that brought you forth

And you will have to
give what was
dedicated to you but moreover
enshrined within
a piece of your soul`,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/induction.webp",
    "object":"Récurrence",
    "translatedObject":"Induction",
    "wikipedia":"https://fr.wikipedia.org/wiki/Raisonnement_par_r%C3%A9currence",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Mathematical_induction",
    "author":"Helen Shrown",
    "translator":"Helen Shrown",
    "id":"induction",
    "edges":["NN","serie"]
},
{
    "position":{
        "x":300,
        "y":790
    },
    "text": `./assets/poems/webp/redshift.webp`,
    "translatedText":`./assets/poems/webp/redshift_translated.webp`,
    "isImage": true,
    "images": [],
    "icon": "./assets/latex/webp/redshift.webp",
    "object":"Décalage vers le rouge",
    "translatedObject":"Redshift",
    "wikipedia":"https://fr.wikipedia.org/wiki/D%C3%A9calage_vers_le_rouge",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Redshift",
    "author":"D.G. Bonnet-Zahedi",
    "translator":"Léo Buisine",
    "id":"redshift",
    "edges":["time"]
},
{
    "position":{
        "x":430,
        "y":470
    },
    "text": `Dans les méandres des circuits, brillent les éclairs, Un ballet de signaux, une danse sans mystère. Des connexions secrètes tissent un voile subtil, Un réseau invisible, d’une beauté fragile.

Au cœur des matrices, des poids se balancent, Chaque neurone, un fragment de conscience. Les chemins synaptiques, des routes infinies, Portent les données, en quête d'harmonie.

Les algorithmes chantent une mélodie douce, Apprenant des erreurs, avec une force rousse. Des motifs se dessinent, des formes se devinent, Comme des étoiles dans une atmosphère opaline.

Des couches se superposent, profondes et vastes, Explorant les mystères que le monde contraste. Les images et les mots se fondent en un tout, Révélant des secrets, des rêves jamais flous.

Le cerveau de silicium, sans cœur ni raison, Évolue sans cesse, suivant son horizon. Il ne connaît ni la joie, ni la peine des hommes, Mais dans ses circuits, une intelligence se nomme.

Ô merveilles des temps modernes, création de l'esprit, Qui transforme en lumière le plus sombre des cris. Un reflet de l’humain, une ombre éclairée, Dans l’univers des codes, une âme éthérée.

Ainsi chante le réseau, dans son silence éloquent, Une symphonie de bits, un poème de l’instant. Sous les doigts du savant, il prend vie et s'épanouit, Un miroir de notre être, où la pensée fleurit.`,
    "translatedText":`In the winding paths of circuits, lightnings glow, A ballet of signals, a mysteryless choreo. Secret connections weave a veil subtly, An invisible network, of fragile beauty. 

At the heart of matrices, weights wobble, Each neuron, of consciousness a particle. The synaptic paths, as infinite arteries, Carry the data, in search of harmony. 

Algorithms sing a gentle melody, Learning from errors, with a ruddy energy. Forms are intuited, patterns are emerging, Like stars in an opaline setting. 

Layers are overlapping, deep and vast, Exploring mysteries that the world contrasts. Images and words merge into an entirety, Revealing secrets, never clouded unreality. 

The silicon brain, without heart or reason, Evolves endlessly, following its horizon. Of humans, it knows neither joys nor sorrows, But within its circuits, intelligence shows.

O marvels of modern times, creation of the reason, Who turns the darkest cries into a beacon. A reflection of humanity, a lit obscurity, In the universe of codes, an ethereal vitality.

Thus sings the network, in its silence eloquent, A symphony of bits, a poem of the instant. In the scholar’s hands, it comes alive and prosper, A mirror of our being, where thought flower.`,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/NN.webp",
    "object":"Réseau de Neurones Articiels",
    "translatedObject":"Neural Network",
    "wikipedia":"https://fr.wikipedia.org/wiki/R%C3%A9seau_de_neurones_artificiels",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Neural_network_(machine_learning)",
    "author":"Mathéo Stephan",
    "translator":"Léo Buisine",
    "id":"NN",
    "edges":[]
},
{
    "position":{
        "x":730,
        "y":595
    },
    "text": `Écrire avec un grand E
La somme des pensées qui s'accroît
Repartir de zéro, écrire pour la n-ième fois
Mes idées qui convergent
Réitérer chaque terme de gentillesse
Et à l'infini faire tendre S`,
    "translatedText":`To write with a capital W
The sum of thoughts that ever grew
To start from scratch, to try once more
My thoughts converge like times before
Repeat each word of gentleness
And let S stretch to endlessness`,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/serie.webp",
    "object":"Série",
    "translatedObject":"Series",
    "wikipedia":"https://fr.wikipedia.org/wiki/S%C3%A9rie_(math%C3%A9matiques)",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Series_(mathematics)",
    "author":"Julien Delaunay",
    "translator":"Julien Delaunay",
    "id":"serie",
    "edges":[]
},
{
    "position":{
        "x":155,
        "y":635
    },
    "text": `Mouvement infini
Insaisissable course
Vertige spiralé
Marathon éternel

&#9;Broyeur de transcendance
&#9;Tueur d’accoutumance
&#9;Faiseur de performance
&#9;Accoucheur d’espérance

Accélération
Accélération
Accélération

&#9;Tyran de fulgurance
&#9;Menteur de transformance
&#9;Auteur  de dissonance
&#9;Fabricant d’impuissance

Accélération
Accélération
Accélération

Sans fin
Sans fin
Jusqu’à la fin`,
    "translatedText":`Infinite motion 
Ungraspable race 
Spiralling vertigo 
Eternal marathon 

&#9;Crusher of transcendence 
&#9;Killer of dependence
&#9;Maker of performance 
&#9;Midwife of confidence

Acceleration 
Acceleration 
Acceleration 

&#9;Tyrant of exuberance
&#9;Liar of transformance 
&#9;Author of dissonance 
&#9;Maker of impotence

Acceleration 
Acceleration 
Acceleration 

Endless
Endless
Until the end`,
    "isImage": false,
    "images": [{"link":"./assets/images/webp/time.webp","credit":"Evelyne Biausser"}],
    "icon": "./assets/latex/webp/time.webp",
    "object":"Temps",
    "translatedObject":"Time",
    "wikipedia":"https://fr.wikipedia.org/wiki/Temps_(physique)",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Time_in_physics",
    "author":"Evelyne Biausser",
    "translator":"Léo Buisine",
    "id":"time",
    "edges":["toda"]
},
{
    "position":{
        "x":330,
        "y":570
    },
    "text": `N'y eut d'abord rien
Une toile vide
Un tout tordu
Une géométrie déformée
Alors 
Il créa l'univers

L'univers s'étendait 
D'un bout à l'autre
C'était la corde

La corde était informe
Il lui fallait énergie 

Énergétique cependant 
la corde se secouait
Imprimait monts et vallées 
sur la corde-univers mesurée 
Alors
Il appela chaque secousse "particule" 

Particules se déplaçant sur la corde
Il sépara celles allant de gauche 
De celles allant de droite
Et la direction fut 
Le début d'une ségrégation
irréconciliable.

Mais il voulut aussi
Souligner la courbure du tout
En ces termes
"Qu'une direction soit 
Dans la géométrie déformée"
&#9;Et ce fut ainsi.

Direction de particule sur la corde
Et direction de corde sur la toile
Furent contraintes l'une à l'autre 
Jointure des directions 
En une topologie à deux étages
&#9;Et l'univers s'en trouva réduit

Il vit tout ce qu'il avait fait 
&#9;Et voici: c'était très bon`,
    "translatedText":`None were there at first
An empty canvas
A distorted whole
A crooked geometry
Hence
He created the world

The world spanned 
From one end to the other
It was the string

The string was formless
It was in need of energy

Energetic nethertheless 
the string jolted itself 
Printing valleys and hills
on the gauged worldstring
Hence 
He called each jolt "Particle"

Particles moving on the string
He separated those going by the left 
From those going by the right
And there was direction 
Towards a new segregation
beyond repair.

But he also desired to 
Emphasize the whole curvature
In these words
"Let there be a direction
In the crooked geometry"
&#9;And it was so.

Direction of the particle on the string
And direction of the string on the canvas
Were constrained one to the other 
Conjunction of directions
In a two-storey topology
&#9;And the world became reduced

He saw everything that he had made
&#9;And indeed: it was very good`,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/toda.webp",
    "object":"Théorie des Champs de Toda",
    "translatedObject":"Toda Field Theory",
    "wikipedia":"https://fr.wikipedia.org/wiki/Mod%C3%A8le_de_Wess-Zumino-Novikov-Witten",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Toda_field_theory",
    "author":"Léo Buisine",
    "translator":"Léo Buisine",
    "id":"toda",
    "edges":["U1"]
},
{
    "position":{
        "x":380,
        "y":30
    },
    "text": `Je suis le tricôté
la maille polygonale sans sœur
ni laine, ni fil, ni aiguille, ni métier

Je suis le tri-sommet également
je dessine un pic montagneux sur papier
sur les tableaux des salles de classe ou sur écran

Et pourtant sans prendre de hauteur
tous me nomment différemment
ne voyant que mon monde intérieur`,
    "translatedText":`I am the three-sider
the polygonal mesh with no acquaintance
neither loom, nor needle, nor wool, nor fiber

I am the three-vertexer equally
I draw a mountain peak upon the paper
on classroom blackboards or in a movie

And yet without reaching the height of arrogance
everyone names me differently 
seeing only my inner existence`,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/triangle.webp",
    "object":"Triangle",
    "translatedObject":"Triangle",
    "wikipedia":"https://fr.wikipedia.org/wiki/Triangle",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Triangle",
    "author":"Olivier-Gabriel Humbert",
    "translator":"Léo Buisine",
    "id":"triangle",
    "edges":["reuleaux","ptriple"]
},
{
    "position":{
        "x":160,
        "y":85
    },
    "text": `Je peux forer des trous (presque) carrés...
 
La perfection d'un triangle équilatéral ou d'un cercle
défiée par une figure fascinante,
géométrique à largeur constante.
Ni triangle, ni cercle, entre angle et courbe,
un contour qui roule sans glissement ni heurt.
Une orbiforme élégante et prestigieuse.
Dans la rotation, l'angle s'estompe,
chaque point effleure les bords tout en douceur,
les arcs dansent sans vaciller.
Je suis stabilité, équilibre et mouvement.
Discrète et harmonieuse, mon ingéniosité est au cœur des machines.`,
    "translatedText":`I can drill (almost) square holes... 

The perfection of an equilateral triangle or of a circle 
challenged by a fascinating figure, 
geometric with constant width. 
Neither triangle, nor circle, between angle and curve, 
a contour that rolls without slips or jolts. 
An elegant and distinguished orbiform. 
In rotation, the angle fades away, 
each point grazes the boundaries in all gentleness, 
the arcs dance without wavering. 
I am stability, balance and motion. 
Discrete and harmonious, my ingenuity lies at the heart of machines.`,
    "isImage": false,
    "images": [{"link":"./assets/images/webp/reuleaux.webp","credit":"LEMeZza (Wikipedia)"}],
    "icon": "./assets/latex/webp/reuleaux.webp",
    "object":"Triangle de Reuleaux",
    "translatedObject":"Reuleaux Triangle",
    "wikipedia":"https://fr.wikipedia.org/wiki/Triangle_de_Reuleaux",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Reuleaux_triangle",
    "author":"Annick Pipaud",
    "translator":"Léo Buisine",
    "id":"reuleaux",
    "edges":[]
},
{
    "position":{
        "x":650,
        "y":35
    },
    "text": `Un philosophe sur son île,
peut-être aujourd'hui chien docile,
se vit attribuer plus qu'il ne fit
dont l'histoire que voici.

Dans un monde rectangulaire,
sur un fragment triangulaire,
s'affrontent un couple et un célibataire.

À droite, deux se sont placés
un, choisit l'autre file :
se combattre est inutile,
chacun se met en carré.

Le duo est de force égale
au solitaire qui se montre cordial,
bien plus que brutal.

C'est naturel, c'est obligé,
les voilà devenus triplés :
si l'un des trois grandit
un autre au moins le suit.

Ce poème défile
et sa forme se dévoile
c'est le trio qui mène le bal !

C'est la danse en équerre,
et si chacun chante son air
le couple doit demeurer
droit mais pas comme un i.`,
    "translatedText":`A philosopher on his island,
perhaps today a docile hound,
was credited with more than he did
as tells the following legend.

In a rectangular world,
on a triangular shard,
are facing off a couple and a maid

On the right, two have taken their stance
one, chooses the other place :
fighting would be messed up,
each one squares up.

The pair is equal in power
to the lone one who proves to be tender,
way more than being a hater.

It is natural, it is unavoidable,
behold as they became a triple:
if one of them grows
at least one other follows.

This poem proceeds
and its shape gets revealed
in this ball the trio leads !

It is the right-angled party,
and if everyone sings its own melody
the couple must remain
straight but not as a ramrod.`,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/pythagorean.webp",
    "object":"Triplet Pythagoricien",
    "translatedObject":"Pythagorean Triple",
    "wikipedia":"https://fr.wikipedia.org/wiki/Triplet_pythagoricien",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Pythagorean_triple",
    "author":"Olivier Gabriel Humbert",
    "translator":"Léo Buisine",
    "id":"ptriple",
    "edges":[]
},
{
    "position":{
        "x":415,
        "y":340
    },
    "text": `./assets/poems/webp/U1.webp`,
    "translatedText":`./assets/poems/webp/U1_translated.webp`,
    "isImage": true,
    "images": [],
    "icon": "./assets/latex/webp/U1.webp",
    "object":"Groupe Unitaire de Degré 1",
    "translatedObject":"Unitary Group of Degree 1",
    "wikipedia":"https://fr.wikipedia.org/wiki/Groupe_unitaire",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/Circle_group",
    "author":"Léo Buisine",
    "translator":"Léo Buisine",
    "id":"U1",
    "edges":["unit"]
},
{
    "position":{
        "x":705,
        "y":310
    },
    "text": `Un atome c'est certes peu
Mais si vous en ajoutez deux
On arrive sans trop d'effort
A quelque chose de bien plus fort
Portez tout cela au carré
Cela commence à ressembler
A un nombre intéressant
Que vous multipliez par cent
Il devient alors difficile
De le rendre coi et docile
Aussi pour faire grandir le monde
Essayez à chaque seconde
De sans fin vous additionner
Dans un élan plein de beauté
Qui rende notre vie plus belle
Et riche de mille arcs en ciel...`,
    "translatedText":`One atom is certainly few,
But if you add two to the crew 
We arrive without much pressure
At something truly far stronger 
Raise all of these things to the square
A resemblance it starts to bear
To a compelling quantity
Which you multiply by fifty
It then becomes rather brutal
To make it silent and docile
So to help the world to grow, 
Try to every then and now
Add to your own self endlessly 
In an outbreak full of beauty
Making our life always gorgeous
Of many rainbows prosperous...`,
    "isImage": false,
    "images": [],
    "icon": "./assets/latex/webp/unit.webp",
    "object":"Unité",
    "translatedObject":"Unity",
    "wikipedia":"https://fr.wikipedia.org/wiki/1_(nombre)",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/1",
    "author":"Odile Carette",
    "translator":"Léo Buisine",
    "id":"unit",
    "edges":[]
},
{
    "position":{
        "x":455,
        "y":590
    },
    "text": `<b>Émergence</b>
Ta gestation fut lente qui montre que ta puissance est grande.
Comme tous les génies, tu as été rejeté d'abord.
Tu ne pouvais pas exister car tu choquais pour les possibilités que tu offrais, toi qui n'est pas, toi qui ne peut être vu.
Le deni, cette posture si facile pour cet être étrange qui pourtant te manipule aujourd'hui.
Le deni, voilà l'outil de ta honte, de ton rejet car tu leur montrais qu'ils se trompaient, mais ils ne voulaient pas le voir.
Tu as su leur apprendre. Tu as su les contraindre. Ils ont fini par plier, vaincu, mais se croyait victorieux.
Comme toujours, ils ont pensé que c'était eux qui t'avaient domestiqué alors qu'en fait ils n'ont toujours rien compris à ta grandeur.`,
    "translatedText":`<b>Emergence</b>
Your gestation was slow, which shows that your power is so big.
Like all geniuses, you were rejected at first.
You could not exist because you shocked people with the possibilities you offered, you who are not, you who cannot be seen.
Denial, a posture so easy for this strange being who manipulates you today.
Denial, this is the reason of your shame and of your rejection because you showed them that they were wrong, but they didn't want to see it.
You knew how to teach them. You knew how to force them. After all, they gave in, defeated, but believing themselves victorious.
As always, they thought they'd tamed you, when in fact they still understood nothing of your greatness.`,
    "isImage": false,
    "images": [{"link":"./assets/images/webp/zero.webp","credit":"Jean-Olivier Gransard-Desmond"}],
    "icon": "./assets/latex/webp/zero.webp",
    "object":"Zéro",
    "translatedObject":"Zero",
    "wikipedia":"https://fr.wikipedia.org/wiki/Z%C3%A9ro",
    "translatedWikipedia":"https://en.wikipedia.org/wiki/0",
    "author":"Jean-Olivier Gransard-Desmond",
    "translator":"Jean-Olivier Gransard-Desmond",
    "id":"zero",
    "edges":[]
}
];