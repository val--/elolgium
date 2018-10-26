$(document).ready(function(){
    
    var quoteSource=[
        {
        	quote: "Athlète grec connu pour sa force prodigieuse, veut tester sa force en achevant de fendre un arbre ouvert en deux. <br>Mais il présume de ses forces et ses mains restent coincées dans le tronc de l'arbre. Immobilisé, incapable de se défendre, il est dévoré par des loups.",
        	name:"Milon de Crotone",
        	deathYear:"540 av. J.-C"
        },
        {
        	quote:"Philosophe et législateur grec, se donne la mort parce qu'il a violé l'une des lois qu'il avait promulguées : pour éviter les violences lors des débats publics, il fait proclamer que quiconque portera une arme sur l'agora sera puni de mort. <br>S'y présentant armé par inadvertance, il s'applique à lui-même la sanction prévue.",
        	name:"Charondas",
        	deathYear:"476 av. J.-C"
        },
           {
        	quote:"Le dramaturge grec Eschyle est tué par un rapace — probablement un gypaète barbu — qui laisse tomber une tortue vivante sur lui, confondant son crâne chauve avec une pierre.",
        	name:"Eschyle",
        	deathYear:"456 av. J.-C."
        },
        {
        	quote:"Philosophe stoïcien, meurt au cours d'un banquet auquel il est invité : voyant un âne qui mange des figues disposées pour les invités, il est pris d'un fou rire inextinguible, et finit par s'étouffer. <br>Autrement dit, il meurt littéralement de rire.",
        	name:"Chrysippe de Soles",
        	deathYear:"207 av. J.-C"
        },
        {
        	quote:"Connu pour son avidité sans limites, Marcus Licinius Crassus est vaincu à la bataille de Carrhes par le général parthe Suréna. <br>Pour faire honneur à la réputation de son prisonnier, Suréna lui fait couler de l'or en fusion dans la bouche en lui disant « Rassasie-toi donc de ce métal dont tu es si avide ! ». <br>Puis le général fait trancher la main et la tête de Crassus et envoie ces trophées au roi Orodès II.",
        	name:"Marcus Licinius Crassus",
        	deathYear:"53 av. J.-C"
        },
           {
        	quote:"Porcia, femme de la Rome antique et fille de Caton d'Utique, se suicide en avalant volontairement des charbons chauds lorsqu'elle apprend la mort de son mari Brutus.",
        	name:"Porcia",
        	deathYear:"42 av. J.-C"
        },{
        	quote:"Fils de l'empereur romain Claude et de Plautia Urgulanilla, meurt à Pompéi en s'étouffant avec une poire qu'il avait lancée en l'air et tenté de rattraper dans sa bouche.",
        	name:"Claudius Drusus",
        	deathYear:"Premier siècle ap. J.-C."
        },{
        	quote:"Capturé par le roi des Perses Shapur Ier, subit un traitement peu enviable : le roi l'utilise comme marchepied quand il doit monter à cheval. Il meurt après plusieurs années d'humiliations et de mauvais traitements, mais la vengeance du Roi des rois ne s'arrête pas là. <br>Pour rappeler aux ambassadeurs romains la puissance de l'empire de Perse, Shapur fait tanner et teindre en rouge sa peau pour en habiller un mannequin exposé dans un grand temple.",
        	name:"L'empereur Valérien",
        	deathYear:"260"
        },{
        	quote:"Naturaliste romain, meurt lors de l'éruption du Vésuve — celle qui provoqua la destruction de Pompéi. <br>Voulant observer le phénomène au plus près et désirant porter secours à quelques-uns de ses amis en difficulté sur les plages de la baie de Naples, il partit avec ses galères, traversant la baie jusqu'à Stabies où il mourut, probablement étouffé.",
        	name:"Pline l'Ancien",
        	deathYear:"79"
        },{
        	quote:"Arrière-arrière-petit-fils de Charlemagne, alors qu'il poursuit à cheval une jeune fille qui résiste à ses avances, heurte violemment un linteau de porte trop bas et se fracasse le crâne.",
        	name:"Le Roi Louis III",
        	deathYear:"882"
        },{
        	quote:"Est tué par le fermier auquel il avait volé des concombres. Par peur du désordre, son épouse introduisit le meurtrier au palais et le revêtit des habits du roi. <br>Il fut ainsi proclamé roi sous le nom de Nyaung-U Sawrahan et il fut surnommé « le roi concombre ».",
        	name:"Theinhko, roi birman",
        	deathYear:"932"
        },{
        	quote:"Tué par un cochon. <br>A l'occasion d'un rassemblement de l'ost royal réuni pour combattre les seigneurs de Vexin, un porc affolé se jette au pied de sa monture qui se cabre, le fait tomber et l'écrase lourdement. Transporté dans une maison voisine, le jeune homme de quinze ans meurt peu après de ses blessures.",
        	name:"Philippe de France",
        	deathYear:"1131"
        },{
        	quote:"Se noie accidentellement dans le fleuve Göksu Nehri, dans l'actuelle Turquie, au cours de la troisième croisade. <br>Barberousse portant son armure, l'hydrocution provoquée par le choc thermique (nous sommes au mois d'août) entraîne la noyade de l'empereur.",
        	name:"Frédéric Barberousse",
        	deathYear:"1190"
        },{
        	quote:"Meurt écrasé, victime de l'effondrement d'un plafond de la cathédrale de Viterbe dont il dirigeait les travaux.",
        	name:"Le pape Jean XXI",
        	deathYear:"1277"
        },{
        	quote:"Ce connétable meurt d'une pneumonie ou d'une dysenterie, provoquée par le fait d'avoir bu trop d'eau glacée après avoir combattu en plein soleil",
        	name:"Bertrand Du Guesclin",
        	deathYear:"1380"
        },{
        	quote:"Condamné à mort, le duc de Clarence choisit d'être exécuté par noyade dans une barrique de vin de Malvoisie.",
        	name:"George, duc de Clarence",
        	deathYear:"1478"
        },{
        	quote:"Durant l'Épidémie dansante de 1518, 400 personnes dansèrent sans se reposer durant plus d'un mois, certaines d'entre elles décédèrent de crise cardiaque, d'accident vasculaire cérébral ou d'épuisement.",
        	name:"Divers",
        	deathYear:"1518"
        },{
        	quote:"Le 12 janvier, l'empereur Maximilien Ier de Habsbourg meurt d'une consommation excessive de melon au retour d'une partie de chasse, tout comme son père, l'empereur Frédéric III 26 ans plus tôt.",
        	name:"Maximilien Ier",
        	deathYear:"1519"
        },{
        	quote:"Cet écrivain et dramaturge italien meurt par suffocation causée par un fou rire incontrôlable.",
        	name:"Pietro Aretino",
        	deathYear:"1556"
        },{
        	quote:"Lors des joutes organisées pour le mariage de sa fille Elisabeth avec Philippe II d'Espagne, se mesure à Gabriel de Montgomery, capitaine de sa Garde écossaise. <br>Il reçoit un coup de lance en plein visage, que la grille en or de son heaume n'arrête pas. <br>La lance traverse l’œil. Malgré les soins d'Ambroise Paré et d'André Vésale, le roi meurt quelques jours plus tard.",
        	name:"Henri II",
        	deathYear:"1559"
        },{
        	quote:"Le maire de Braunau en Autriche, meurt le cou brisé après avoir marché sur sa propre barbe. Sa barbe qui faisait 4,5 pieds soit près de 1,4 mètre de long était généralement enroulée dans un étui en cuir.",
        	name:"Hans Steininger",
        	deathYear:"1567"
        },{
        	quote:"Meurt de rire en apprenant d'un marchand italien que Venise était une république et n'avait pas de roi.",
        	name:"Nandabayin, roi birman",
        	deathYear:"1599"
        },{
        	quote:"Meurt d'une rétention urinaire. La cause de cette affection n'est pas définie avec exactitude. <br>La première explication est que l'astronome, voyageant avec l'empereur des Romains Rodolphe II, s'est retenu durant un long trajet, n'osant interrompre le voyage de l'empereur pour satisfaire un besoin naturel. La seconde explication est que Brahe, invité d'honneur d'un dîner mondain, n'ose pas se retirer pour soulager sa vessie. <br>Quoi qu'il en soit, la mort du scientifique a inspiré une expression tchèque — « Je ne veux pas mourir comme Tycho Brahe » — pour indiquer un besoin pressant.",
        	name:"Tycho Brahe",
        	deathYear:"1601"
        },{
        	quote:"Ce maître d'hôtel français se suicide pendant une réception donnée par le prince en l'honneur de Louis XIV, à cause du retard dans la livraison de la pêche du jour.",
        	name:"François Vatel",
        	deathYear:"1671"
        },{
        	quote:"Ce surintendant de la musique de Louis XIV meurt de la gangrène à la suite d'une blessure au pied due à son « bâton de direction », longue et lourde canne surmontée de rubans et d'un pommeau richement orné servant à l'époque pour battre la mesure en frappant le sol. <br>Il se blesse durant une répétition du Te Deum prévu pour célébrer le rétablissement du roi.",
        	name:"Jean-Baptiste Lully",
        	deathYear:"1687"
        },{
        	quote:"Ce romancier et historien français plus connu sous le nom de l'abbé Prévost, est déclaré mort après avoir été retrouvé gisant au pied d'un calvaire. Alors que le chirurgien entame l'autopsie en incisant le corps au scalpel, l'abbé pousse un grand cri et ouvre les yeux. Le chirurgien tente de recoudre la plaie, mais l'auteur de Manon Lescaut, cette fois, succombe pour de bon.",
        	name:"Antoine François Prévost",
        	deathYear:"1763"
        },{
        	quote:"Se réchauffe devant sa cheminée quand sa robe de chambre prend feu. <br>Malgré tous les soins qu'on lui apporte, le roi meurt le 23 février 1766.",
        	name:"Stanislas Leszczynski",
        	deathYear:"1766"
        },{
        	quote:"Le roi meurt à la suite de problèmes de digestion. <br>Il venait de faire un repas composé de homards, caviar, choucroute, kipper (hareng rouge) et de poisson fumé. Le tout était arrosé de champagne. Il reprit 14 fois de son dessert favori, le semla servi dans un bol de lait chaud. Les écoliers suédois se souviennent de lui comme « le roi qui mangea jusqu'à en mourir ».",
        	name:"Adolphe Frédéric de Suède",
        	deathYear:"1771"
        },{
        	quote:"Se suicide pendant une réception donnée par le prince en l'honneur de Louis XIV, à cause du retard dans la livraison de la pêche du jour.",
        	name:"François Vatel, maître d'hôtel français",
        	deathYear:"1671"
        },{
        	quote:"Ce poète français meurt après avoir avalé la clef de sa cassette au cours d'un accès de démence.",
        	name:"Nicolas Gilbert",
        	deathYear:"1780"
        },{
        	quote:"Ce capitaine de 37 ans se trouve à Aboukir sur le vaisseau Le Tonnant. Déjà blessé gravement aux pieds et aux mains, il reçoit à bout portant une volée de mitraille anglaise qui lui emporte un bras et deux jambes. <br>Refusant de se retirer du combat, il se fait placer dans un baril de son et crie de ne pas amener le pavillon. Tant qu'il s'est maintenu en vie malgré l'hémorragie, il a encouragé ses compagnons à se défendre jusqu'au bout.",
        	name:"Aristide Aubert du Petit-Thouars",
        	deathYear:"1798"
        },{
        	quote:"Cet explorateur français décède dans la catastrophe ferroviaire de Meudon. <br>L'homme qui fit plusieurs fois le tour du monde, qui découvrit la Terre Adélie et qui fit ramener en France la Vénus de Milo, meurt dans un accident de train en rentrant d'une promenade en famille. <br>Les compartiments sont — à cette époque — verrouillés de l'extérieur durant le trajet ; les voyageurs sont bloqués dans l'incendie déclenché par l'accident.",
        	name:"Jules Dumont d'Urville",
        	deathYear:"1842"
        },{
        	quote:"Ce mathématicien et logicien à l'origine de l'algèbre de Boole décède des suites d'une pneumonie, après que sa femme, Mary Everest l'aspergea d'eau au moyen de plusieurs seaux. Contemporaine et adepte des idées de Samuel Hahnemann, inventeur de l'homéopathie, elle pensait soigner son mari d'un banal refroidissement en appliquant certains principes homéopathiques (soigner le mal par le mal)",
        	name:"George Boole",
        	deathYear:"1864"
        },{
        	quote:"Cet avocat et homme politique nord-américain veut prouver d'une façon irréfutable l'innocence d'un de ses clients, accusé d'homicide lors d'une fusillade dans un bar.<br> Il reconstitue les faits d'une manière si réaliste qu'il se blesse mortellement avec un pistolet qu'il croyait déchargé.",
        	name:"Clement Vallandigham",
        	deathYear:"1871"
        },{
        	quote:"Ce détective privé glisse dans la rue et chute sur le trottoir. <br>Il s'est mordu la langue, mais n'y prête guère attention. La gangrène s'installe, amenant sa mort le 1er juillet.",
        	name:"Jack Daniel",
        	deathYear:"1911"
        },{
        	quote:"Le tailleur Franz Reichelt se tue en sautant du premier étage de la tour Eiffel alors qu'il veut tester en public son invention, le manteau-parachute.",
        	name:"Franz Reichelt ",
        	deathYear:"1912"
        },{
        	quote:"Le mystique russe Raspoutine est supposément empoisonné au cyanure, puis reçoit trois coups de pistolet (dont un à la tête). <br>Il est ensuite enveloppé dans un sac pour être finalement jeté dans l'eau glacée de la Neva à Saint-Pétersbourg. À l'autopsie, on retrouve de l'eau dans ses poumons, prouvant qu'il respirait encore malgré le poison et les balles.",
        	name:"Raspoutine",
        	deathYear:"1916"
        },{
        	quote:"Ce soldat français de 1re classe et estafette du 415e régiment d'infanterie meurt d'une balle dans la tête cinq minutes avant le cessez-le-feu, le jour de l'armistice de 1918, à Vrigne-Meuse, (Ardennes), en allant porter un message à son capitaine31. <br> 	Il est le dernier soldat français mort au combat de la Première Guerre mondiale..",
        	name:"Augustin Trébuchon",
        	deathYear:"1918"
        },{
        	quote:"Ce soldat américain, meurt de cinq balles de mitrailleuse à 10 h 59, soit une minute avant le cessez-le-feu, le jour de l'armistice de 1918, dans la Meuse. <br>Il est officiellement le dernier soldat tué de la Première Guerre mondiale.",
        	name:"Henry Gunther",
        	deathYear:"1918"
        },{
        	quote:"Le roi des Hellènes se promenait sur les terres du domaine de Tatoï (au nord d'Athènes) quand son berger allemand est attaqué par un singe domestique. <br>Le roi tente de séparer les deux animaux, mais un second primate l'attaque et le mord profondément à la jambe et dans la région de l’estomac, lui causant une septicémie.<br> Il meurt trois semaines plus tard.",
        	name:"Alexandre Ier de Grèce",
        	deathYear:"1920"
        },{
        	quote:"Ce jockey américain meurt d'un infarctus du myocarde durant une course hippique. Le cheval, Sweet Kiss, gagne la compétition, faisant de Hayes le premier jockey mort à remporter une course.",
        	name:"Frank Hayes",
        	deathYear:"1923"
        },{
        	quote:"Le célèbre prestidigitateur décède d'une péritonite consécutive à une rupture de l'appendice, après que Joselyn Gordon Whitehead, étudiant de l'Université McGill de Montréal, l'a frappé au ventre plusieurs fois. <br>En effet, avant ses spectacles, Houdini avait l'habitude de demander à quelqu'un dans le public de lui infliger un coup de poing dans le ventre, pour prouver qu'il ne trichait pas et qu'il était invincible. <br>Mais ce jour-là, il est pris par surprise.",
        	name:"Harry Houdini",
        	deathYear:"1926"
        },{
        	quote:"Cette danseuse meurt étranglée et le cou cassé lorsque son écharpe se prend dans une des roues du véhicule dont elle était passagère.",
        	name:"Isadora Duncan",
        	deathYear:"1927"
        },{
        	quote:"Ce pilote britannique est décapité alors que la chaîne d'entraînement du moteur de son avion casse, heurtant violemment l'habitacle. <br>À 171 miles à l'heure (275 km/h), il avait réussi à battre son propre record de vitesse enregistré l'année précédente.",
        	name:"J.G. Parry-Thomas",
        	deathYear:"1927"
        },{
        	quote:"Ce détenu condamné à mort à la prison de San Quentin aux États-Unis se suicide avec une bombe artisanale créée à partir de plusieurs paquets de cartes à jouer et un des pieds, creux, de son lit. <br>À l'époque, l'encre rouge d'une carte à jouer contenait de la nitrocellulose inflammable, qui, lorsqu'il est mouillé, peut provoquer une déflagration. Kogut a utilisé l'appareil de chauffage dans sa cellule pour activer la bombe.",
        	name:"William Kogut",
        	deathYear:"1930"
        },{
        	quote:"Cet industriel américain meurt le 31 mars 1931, victime d'un empoisonnement au radium qui a ravagé son organisme pendant dix-huit mois, corrodant ses os jusqu'à ce qu'ils se brisent.",
        	name:"Eben Byers",
        	deathYear:"1931"
        },{
        	quote:"Michael Malloy, un sans-abri de New York, États-Unis, est assassiné par cinq hommes lors d'un complot visant à recueillir le produit des polices d'assurance-vie qu'ils avaient achetées. <br>Après avoir survécu à de multiples empoisonnements, avoir été exposé intentionnellement au froid et avoir été heurté par une voiture, Malloy succombe à un gazage",
        	name:"Michael Malloy",
        	deathYear:"1933"
        },{
        	quote:"Le joueur de baseball Len Koenecke est frappé à mort avec un extincteur par un membre de l'équipage de l'avion qu'il venait de louer : il avait provoqué une bagarre avec le pilote pendant que l'avion était en vol.",
        	name:"Len Koenecke",
        	deathYear:"1935"
        },{
        	quote:"Ce général espagnol qui a participé au coup d'État des 17 et 18 juillet 1936 doit rentrer en Espagne. <br>Il exige du pilote de son avion qu'il embarque sa malle d'uniformes, trop lourde pour l'appareil. <br>Inévitablement, le biplan s'écrase en bout de piste. Le pilote en réchappe, contrairement à l'homme qui devait prendre la tête de l'Espagne à la place de Franco",
        	name:"José Sanjurjo",
        	deathYear:"1936"
        },{
        	quote:"Le dramaturge de langue allemande Ödön von Horvát est un fervent opposant d'Adolf Hitler et du national-socialisme, dont ses pièces dénoncent les dangers. <br>Il s'est d'ailleurs battu contre les nazis lors d'une réunion électorale en 1929. Alors qu'il vient d'arriver à Paris, l'écrivain se promène sur les Champs-Élysées quand une tempête déracine un marronnier qui l'écrase. Il meurt sur le coup.",
        	name:"Ödön von Horváth",
        	deathYear:"1938"
        },{
        	quote:"L'actrice finlandaise Sirkka Sari, 19 ans, meurt en tombant dans la cheminée d'une chaudière de chauffage. <br>Elle avait pris la cheminée pour un balcon.",
        	name:"Sirkka Sari",
        	deathYear:"1939"
        }
    ];

    var skull = $('#skull-ascii').text();

    // Afficher un texte après chargement de la page
    $(function () {
      	$('#skull-ascii').click();
    });

    $('#skull-ascii').click(randomQuote);

    function randomQuote(evt){
    
    	var quote = $('#descriptionMort p').text();
    	var malheureux = $('#malheureux').text();
    	
    	var txt = '------____&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;________________________________---<br>';
    	txt += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__/&nbsp;&nbsp;&nbsp;&nbsp;___---------__<br>';
    	txt += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\_<br>';
    	txt += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\<br>';
    	txt += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\<br>';
    	txt += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;/&nbsp;\\&nbsp;&nbsp;/&nbsp;\\&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\<br>';
    	txt += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;<span class="eyes">o</span>||&nbsp;&nbsp;<span class="eyes">O</span>||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>';
    	txt += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;\\_//\\\\_/&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>';
    	txt +='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|_|&nbsp;(||)&nbsp;&nbsp;&nbsp;|_______|&nbsp;&nbsp;&nbsp;|<br>';
    	txt += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;/&nbsp;/&nbsp;&nbsp;&nbsp;|<br>';
    	txt +='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|_________||&nbsp;/&nbsp;/&nbsp;&nbsp;&nbsp;/<br>';
    	txt += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;\\_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|_|_|_|_|/&nbsp;&nbsp;_/___/<br>';
    	txt +='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\__>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.|_|_|_|_|&nbsp;&nbsp;&nbsp;|<br>';
    	txt +='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/<br>';
    	txt +='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__________/<br>';
    
    	$('#skull-ascii').html(txt).delay(600).queue(function(next){
    		$(this).html(skull);
    		next();
    	});
    
    	//prevent browser's default action
    	evt.preventDefault();
    
    	//getting a new random number to attach to a quote and setting a limit
    	var sourceLength = quoteSource.length;
    	var randomNumber= Math.floor(Math.random()*sourceLength);
    
    	//set a new quote
    	for(i = 0 ; i <= sourceLength ; i+=1)
    	{
        	var newQuoteText = quoteSource[randomNumber].quote;
        	var newmalheureux = quoteSource[randomNumber].name;
        	var newDeathYear = quoteSource[randomNumber].deathYear;
        	//console.log(newQuoteText,newmalheureux);
        
        	var rapidTimeAnimation = 200;
        	var timeAnimation = 500;
        	var descriptionMort = $('#descriptionMort');
        	var malheureux = $('#malheureux');
    
            malheureux.fadeOut(timeAnimation, function(){
            malheureux.html('');
            malheureux.append(''+newmalheureux+' &nbsp;<span id="dateDeath">'+newDeathYear+'</span>');
            malheureux.fadeIn(timeAnimation);
        });
    
        descriptionMort.fadeOut(timeAnimation, function(){
            descriptionMort.html('');
            descriptionMort.append('<p>'+newQuoteText+'</p>');
            descriptionMort.fadeIn(timeAnimation);
        });  
        
        break;
        };
    }

});
