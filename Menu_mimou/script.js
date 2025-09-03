/* =========================
   Données recettes
   ========================= */
const RECIPES = [
  { id:'toast-avocat-oeuf', title:'🥑🍳 Toast avocat œuf', color:'green', author:'Dorianne', time:'5–10 min', portions:1, category:'matin',
    ingredients:[ {name:'œuf',qty:2,unit:'pièce'},{name:'avocat',qty:0.5,unit:'pièce'},{name:'pain complet',qty:60,unit:'g'} ] },
  { id:'pancakes-proteines-banane', title:'🥞💪 Pancakes protéinés banane', color:'amber', author:'ZIRN Thomas', time:'10 min', portions:1, category:'matin',
    ingredients:[ {name:'flocons d’avoine',qty:40,unit:'g'},{name:'banane',qty:1,unit:'pièce'},{name:'whey',qty:15,unit:'g'},{name:'œuf',qty:1,unit:'pièce'},{name:'levure',qty:4,unit:'g'},{name:'miel',qty:10,unit:'g'} ] },
  { id:'skyr-oleagineux-chia-choco', title:'🥣🍫 Skyr + graines & chocolat', color:'rose', author:'Montier Jordan', time:'5 min', portions:1, category:'matin',
    ingredients:[ {name:'skyr',qty:150,unit:'g'},{name:'clémentine',qty:1,unit:'pièce'},{name:'pépites chocolat noir',qty:10,unit:'g'},{name:'graines de chia',qty:5,unit:'g'},{name:'mélange oléagineux',qty:10,unit:'g'} ] },
  { id:'tartine-oeuf-brouille-cottage', title:'🍞🧀 Tartine œufs brouillés & cottage', color:'blue', author:'Aliénor Desvignes', time:'10 min', portions:1, category:'matin',
    ingredients:[ {name:'pain complet',qty:35,unit:'g'},{name:'œuf',qty:2,unit:'pièce'},{name:'cottage cheese',qty:30,unit:'g'},{name:'avocat',qty:0.5,unit:'pièce'} ] },
  { id:'bowl-cake-avoine-banane-choco', title:'🍰🌾 Bowl cake avoine banane choco', color:'violet', author:'Ingrid PERU G.', time:'3–6 min', portions:1, category:'matin',
    ingredients:[ {name:'flocons d’avoine',qty:40,unit:'g'},{name:'chocolat noir pâtissier',qty:25,unit:'g'},{name:'banane',qty:1,unit:'pièce'},{name:'œuf',qty:1,unit:'pièce'},{name:'lait demi-écrémé',qty:30,unit:'g'},{name:'miel',qty:15,unit:'g'},{name:'levure',qty:5,unit:'g'} ] },
  { id:'avocado-toast-cottage', title:'🥑🧀 Avocado toast & cottage', color:'teal', author:'Mathilde Miessen', time:'5 min', portions:1, category:'matin',
    ingredients:[ {name:'pain au levain',qty:40,unit:'g'},{name:'avocat',qty:0.5,unit:'pièce'},{name:'cottage cheese',qty:40,unit:'g'},{name:'citron vert',qty:0.5,unit:'pièce'} ] },
  { id:'pudding-chia-mangue-pro', title:'🥭💪 Pudding de chia protéiné (mangue)', color:'amber', author:'Justine', time:'15 min', portions:4, category:'matin',
    ingredients:[ {name:'graines de chia',qty:100,unit:'g'},{name:'lait demi-écrémé',qty:400,unit:'g'},{name:'mangue',qty:0.5,unit:'pièce'},{name:'tofu soyeux',qty:100,unit:'g'},{name:'miel',qty:10,unit:'g'} ] },
  { id:'overnight-oat-banane-pro', title:'🌙🍌 Overnight oat banane (prot.)', color:'blue', author:'Delphine Vandamme', time:'12 h repos', portions:1, category:'matin',
    ingredients:[ {name:'flocons d’avoine',qty:50,unit:'g'},{name:'graines de chia',qty:5,unit:'g'},{name:'banane',qty:50,unit:'g'},{name:'yaourt',qty:50,unit:'g'},{name:'lait',qty:150,unit:'g'} ] },
  { id:'tartine-beurre-cacahuete-banane', title:'🥜🍌 Tartine cacahuète & banane', color:'rose', author:'Montier Jordan', time:'5 min', portions:2, category:'matin',
    ingredients:[ {name:'pain de campagne',qty:80,unit:'g'},{name:'banane',qty:1,unit:'pièce'},{name:'beurre de cacahuète',qty:30,unit:'g'} ] },
  { id:'toasts-hummus-avocat-feta', title:'🥑🧆 Toats hummus, avocat, feta', color:'green', author:'AE CoachSportif', time:'10 min', portions:1, category:'matin',
    ingredients:[ {name:'pain au levain',qty:2,unit:'tranches'},{name:'avocat',qty:0.5,unit:'pièce'},{name:'hummus',qty:30,unit:'g'},{name:'feta',qty:20,unit:'g'} ] },
  { id:'pancakes-sans-gluten-sans-lactose-pro', title:'🥞🚫🌾 Pancakes SG/SL + protéiné', color:'violet', author:'Marie Chavanes', time:'25 min', portions:12, category:'matin',
    ingredients:[ {name:'œuf',qty:1,unit:'pièce'},{name:'banane',qty:1,unit:'pièce'},{name:'whey',qty:35,unit:'g'},{name:'noix de coco râpée',qty:15,unit:'g'} ] },
  { id:'toast-oeuf-avocat', title:'🍞🥑🍳 Toast œuf avocat', color:'teal', author:'Kathleen', time:'8 min', portions:1, category:'matin',
    ingredients:[ {name:'pain complet',qty:80,unit:'g'},{name:'œuf',qty:2,unit:'pièce'},{name:'graines de chia',qty:5,unit:'g'},{name:'avocat',qty:0.5,unit:'pièce'} ] },
  { id:'toasts-avocat-feta', title:'🥑🧀 Toasts avocat & feta', color:'green', author:'Aurore Burnier. F', time:'12 min', portions:1, category:'matin',
    ingredients:[ {name:'pain au levain',qty:2,unit:'tranches'},{name:'avocat',qty:0.5,unit:'pièce'},{name:'feta',qty:30,unit:'g'},{name:'tomate cerise',qty:6,unit:'pièces'},{name:'oignon rouge',qty:0.5,unit:'pièce'} ] },
  { id:'pudding-chia-simple', title:'🍓🍫 Pudding chia (simple)', color:'amber', author:'Anne-Charlotte Jalhay', time:'1 h repos', portions:2, category:'matin',
    ingredients:[ {name:'graines de chia',qty:15,unit:'g'},{name:'boisson amande',qty:100,unit:'g'},{name:'pomme',qty:1,unit:'petite'},{name:'framboise',qty:50,unit:'g'},{name:'chocolat',qty:10,unit:'g'},{name:'miel',qty:8,unit:'g'},{name:'flocons d’avoine',qty:20,unit:'g'} ] },
  { id:'pudding-chia-coco-mangue', title:'🥥🥭 Pudding chia coco & mangue', color:'rose', author:'Cathy Despontin', time:'2 h repos', portions:1, category:'matin',
    ingredients:[ {name:'lait de coco',qty:10,unit:'g'},{name:'graines de chia',qty:7.5,unit:'g'},{name:'mangue',qty:0.5,unit:'pièce'},{name:'citron vert',qty:0.2,unit:'pièce'},{name:'sirop d’agave',qty:5,unit:'g'} ] }
];

// Placeholders pour autres catégories (tu rempliras plus tard)
// --- REPAS (midi) : ajouts pour l’onglet "🍽️ Repas"
/* ======= REPAS (catégorie 'midi') ======= */
RECIPES.push(
  {
    id:'repas-poulet-grille-quinoa-legumes',
    title:'🍗🥗 Poulet grillé, légumes & quinoa',
    color:'teal', author:'swany bulle',
    time:'30–40 min', portions:1, category:'midi',
    ingredients:[
      {name:'poulet',qty:150,unit:'g'},
      {name:'quinoa',qty:100,unit:'g'},
      {name:'courgette',qty:50,unit:'g'},
      {name:'poivron rouge',qty:50,unit:'g'},
      {name:'oignon rouge',qty:50,unit:'g'},
      {name:'champignon de Paris',qty:50,unit:'g'},
      {name:'huile d’olive',qty:10,unit:'g'}
    ]
  },
  {
    id:'repas-pdt-aux-herbes',
    title:'🥔🌿 Pommes de terre aux herbes',
    color:'green', author:'Justine',
    time:'40–50 min', portions:4, category:'midi',
    ingredients:[
      {name:'pomme de terre',qty:800,unit:'g'},
      {name:'fromage blanc (≈8% MG)',qty:200,unit:'g'},
      {name:'jambon de poulet en tranches',qty:160,unit:'g'},
      {name:'échalote',qty:26,unit:'g'},
      {name:'ciboulette',qty:5,unit:'g'},
      {name:'citron',qty:48,unit:'g'},
      {name:'huile d’olive',qty:16,unit:'g'},
      {name:'salade verte',qty:240,unit:'g'},
      {name:'vinaigrette',qty:40,unit:'g'}
    ]
  },
  {
    id:'repas-poulet-curry-coco-riz',
    title:'🍛 Poulet curry coco & riz',
    color:'amber', author:'Tristan Boetti',
    time:'30–40 min', portions:1, category:'midi',
    ingredients:[
      {name:'poulet',qty:150,unit:'g'},
      {name:'riz thaï/basmati (cru)',qty:90,unit:'g'},
      {name:'courgette',qty:250,unit:'g'},
      {name:'lait de coco',qty:50,unit:'g'},
      {name:'curry (poudre)',qty:2,unit:'g'},
      {name:'sauce soja',qty:16,unit:'g'},
      {name:'noix (cerneaux)',qty:15,unit:'g'},
      {name:'huile d’olive',qty:5,unit:'g'}
    ]
  },
  {
    id:'repas-poulet-citron-courgette-riz',
    title:'🍋 Poulet grillé au citron, courgette & riz',
    color:'blue', author:'Arnaud Gobin',
    time:'20–30 min', portions:1, category:'midi',
    ingredients:[
      {name:'blanc de poulet',qty:120,unit:'g'},
      {name:'citron vert',qty:1,unit:'pièce'},
      {name:'piment de Cayenne',qty:2,unit:'g'},
      {name:'coriandre',qty:2,unit:'g'},
      {name:'huile d’olive',qty:4,unit:'g'},
      {name:'riz thaï/basmati (cru)',qty:40,unit:'g'},
      {name:'courgette',qty:250,unit:'g'}
    ]
  },
  {
    id:'repas-salade-quinoa-tofu-courgette',
    title:'🥗 Salade de quinoa, tofu & courgette',
    color:'violet', author:'Tristan Boetti',
    time:'20 min + repos', portions:1, category:'midi',
    ingredients:[
      {name:'quinoa (cru)',qty:60,unit:'g'},
      {name:'tofu nature',qty:150,unit:'g'},
      {name:'courgette',qty:200,unit:'g'},
      {name:'huile de sésame',qty:10,unit:'g'},
      {name:'sauce soja',qty:16,unit:'g'},
      {name:'jus de citron',qty:30,unit:'g'},
      {name:'coriandre',qty:5,unit:'g'}
    ]
  },
  {
    id:'repas-quiche-legumes',
    title:'🥧 Quiche aux légumes',
    color:'rose', author:'Robin Lefer',
    time:'~1 h', portions:6, category:'midi',
    ingredients:[
      {name:'pâte brisée',qty:250,unit:'g'},
      {name:'carotte',qty:150,unit:'g'},
      {name:'courgette',qty:150,unit:'g'},
      {name:'oignon',qty:230,unit:'g'},
      {name:'lait demi-écrémé',qty:300,unit:'g'},
      {name:'beurre',qty:50,unit:'g'},
      {name:'œuf',qty:150,unit:'g'},
      {name:'gruyère',qty:60,unit:'g'},
      {name:'cumin',qty:3,unit:'g'},
      {name:'coriandre',qty:2,unit:'g'}
    ]
  },
  {
    id:'repas-riz-saute-boeuf',
    title:'🥩 Riz sauté au bœuf',
    color:'green', author:'Cathy Despontin',
    time:'20–25 min', portions:1, category:'midi',
    ingredients:[
      {name:'bœuf haché',qty:100,unit:'g'},
      {name:'riz basmati (cuit)',qty:50,unit:'g'},
      {name:'haricot vert',qty:150,unit:'g'},
      {name:'sauce soja',qty:16,unit:'g'},
      {name:'gingembre frais',qty:2,unit:'g'},
      {name:'huile d’olive',qty:4,unit:'g'}
    ]
  },
  {
    id:'repas-poulet-roti-legumes',
    title:'🍗 Poulet rôti aux légumes',
    color:'amber', author:'—',
    time:'~2 h', portions:4, category:'midi',
    ingredients:[
      {name:'poulet (entier)',qty:1500,unit:'g'},
      {name:'oignon',qty:205,unit:'g'},
      {name:'ail',qty:12,unit:'g'},
      {name:'huile d’olive',qty:10,unit:'g'},
      {name:'pomme de terre',qty:100,unit:'g'},
      {name:'carotte',qty:330,unit:'g'},
      {name:'courgette',qty:550,unit:'g'},
      {name:'champignon de Paris',qty:100,unit:'g'},
      {name:'sel',qty:6,unit:'g'},
      {name:'poivre',qty:1.5,unit:'g'}
    ]
  },
  {
    id:'repas-wrap-poulet-crudites-sg',
    title:'🌯 Wrap poulet crudités (SG)',
    color:'teal', author:'Claire Sauge',
    time:'5–10 min', portions:1, category:'midi',
    ingredients:[
      {name:'filet de poulet cuit',qty:100,unit:'g'},
      {name:'tomate',qty:50,unit:'g'},
      {name:'salade verte',qty:30,unit:'g'},
      {name:'carotte râpée',qty:50,unit:'g'},
      {name:'sauce fromage blanc ciboulette',qty:50,unit:'g'},
      {name:'wrap sans gluten',qty:1,unit:'pièce'}
    ]
  },
  {
    id:'repas-bowl-lentilles-saumon-oeuf',
    title:'🥣 Bowl lentilles, saumon fumé & œuf',
    color:'blue', author:'Aliénor Desvignes',
    time:'10–15 min', portions:1, category:'midi',
    ingredients:[
      {name:'lentilles (cuites)',qty:150,unit:'g'},
      {name:'saumon fumé',qty:30,unit:'g'},
      {name:'œuf',qty:1,unit:'pièce'},
      {name:'avocat',qty:45,unit:'g'},
      {name:'citron',qty:20,unit:'g'},
      {name:'salade verte',qty:40,unit:'g'}
    ]
  },
  {
    id:'repas-boulette-cabillaud-tomate',
    title:'🐟 Boulettes de cabillaud sauce tomate',
    color:'rose', author:'Montier Jordan',
    time:'~30 min', portions:4, category:'midi',
    ingredients:[
      {name:'cabillaud',qty:500,unit:'g'},
      {name:'tomate pelée',qty:400,unit:'g'},
      {name:'oignon',qty:0.5,unit:'pièce'},
      {name:'pain de campagne',qty:1,unit:'tranche'},
      {name:'lait demi-écrémé',qty:100,unit:'g'},
      {name:'œuf',qty:1,unit:'pièce'},
      {name:'persil',qty:10,unit:'g'},
      {name:'huile d’olive',qty:30,unit:'g'},
      {name:'pâtes sèches',qty:200,unit:'g'}
    ]
  },
  {
    id:'repas-salade-quinoa-tofu-courgette-2p',
    title:'🥗 Salade quinoa/tofu/courgette (2 p.)',
    color:'green', author:'Tristan Boetti',
    time:'~25 min', portions:2, category:'midi',
    ingredients:[
      {name:'mélange de quinoa (cru)',qty:300,unit:'g'},
      {name:'tofu nature',qty:300,unit:'g'},
      {name:'courgette',qty:250,unit:'g'},
      {name:'huile de sésame',qty:10,unit:'g'},
      {name:'sauce soja',qty:16,unit:'g'},
      {name:'jus de citron',qty:30,unit:'g'},
      {name:'coriandre',qty:10,unit:'g'}
    ]
  },
  {
    id:'repas-salade-lentilles-saumon-oeuf-4p',
    title:'🥗 Salade de lentilles, saumon fumé & œuf',
    color:'violet', author:'Justine Prieur',
    time:'~25 min', portions:4, category:'midi',
    ingredients:[
      {name:'lentille (sèche)',qty:300,unit:'g'},
      {name:'œuf',qty:4,unit:'pièces'},
      {name:'oignon rouge',qty:60,unit:'g'},
      {name:'saumon fumé',qty:90,unit:'g'},
      {name:'mâche',qty:60,unit:'g'},
      {name:'citron',qty:70,unit:'g'},
      {name:'huile d’olive',qty:4,unit:'g'}
    ]
  },
  {
    id:'repas-salade-poulet-sesame',
    title:'🥗 Salade de poulet au sésame',
    color:'amber', author:'Justine',
    time:'~10 min', portions:4, category:'midi',
    ingredients:[
      {name:'poulet (filet)',qty:200,unit:'g'},
      {name:'coriandre',qty:15,unit:'g'},
      {name:'graines de sésame',qty:48,unit:'g'},
      {name:'huile de sésame',qty:16,unit:'g'},
      {name:'pousses de soja',qty:200,unit:'g'}
    ]
  },
  {
    id:'repas-salade-lentilles-quinoa-legumes-feta',
    title:'🥗 Lentilles, quinoa, légumes rôtis & feta',
    color:'blue', author:'Magali Riat',
    time:'~1 h', portions:5, category:'midi',
    ingredients:[
      {name:'lentille verte (sèche)',qty:200,unit:'g'},
      {name:'quinoa (cru)',qty:150,unit:'g'},
      {name:'poivron rouge',qty:370,unit:'g'},
      {name:'courgette',qty:1100,unit:'g'},
      {name:'carotte',qty:330,unit:'g'},
      {name:'oignon',qty:100,unit:'g'},
      {name:'huile d’olive',qty:30,unit:'g'},
      {name:'feta AOP',qty:150,unit:'g'},
      {name:'persil',qty:5,unit:'g'},
      {name:'jus de citron',qty:40,unit:'g'},
      {name:'ail',qty:6,unit:'g'}
    ]
  },
  {
    id:'repas-orzo-epinards',
    title:'🍝 Orzo aux épinards',
    color:'teal', author:'Cathy Despontin',
    time:'30–35 min', portions:1, category:'midi',
    ingredients:[
      {name:'échalote',qty:13,unit:'g'},
      {name:'ail',qty:6,unit:'g'},
      {name:'tomate cerise',qty:100,unit:'g'},
      {name:'pâtes (orzo)',qty:80,unit:'g'},
      {name:'paprika',qty:5,unit:'g'},
      {name:'amandes',qty:10,unit:'g'},
      {name:'épinard',qty:200,unit:'g'},
      {name:'parmesan',qty:10,unit:'g'},
      {name:'bouillon déshydraté',qty:3,unit:'g'},
      {name:'beurre',qty:5,unit:'g'}
    ]
  },
  {
    id:'repas-salade-roquette-feta-pasteque-tofu',
    title:'🥗 Roquette, feta, pastèque & tofu',
    color:'rose', author:'Marie Valente',
    time:'~15 min', portions:1, category:'midi',
    ingredients:[
      {name:'citron',qty:23,unit:'g'},
      {name:'roquette',qty:200,unit:'g'},
      {name:'pastèque',qty:140,unit:'g'},
      {name:'basilic',qty:1,unit:'g'},
      {name:'menthe',qty:1,unit:'g'},
      {name:'vinaigre balsamique',qty:6,unit:'g'},
      {name:'huile d’olive',qty:10,unit:'g'},
      {name:'feta AOP',qty:30,unit:'g'},
      {name:'tofu nature',qty:130,unit:'g'}
    ]
  },
  {
    id:'repas-riz-courgettes-oeuf-mollet',
    title:'🍚 Riz aux courgettes & œuf mollet',
    color:'green', author:'Justine',
    time:'~20 min', portions:1, category:'midi',
    ingredients:[
      {name:'riz thaï/basmati (cru)',qty:60,unit:'g'},
      {name:'œuf',qty:2,unit:'pièces'},
      {name:'huile d’olive',qty:4,unit:'g'},
      {name:'courgette',qty:250,unit:'g'}
    ]
  },
  {
    id:'repas-cottage-wrap-roquette-houmous',
    title:'🌯 Cottage wrap roquette/houmous',
    color:'violet', author:'Kathleen',
    time:'~30 min', portions:1, category:'midi',
    ingredients:[
      {name:'cottage cheese',qty:100,unit:'g'},
      {name:'sel',qty:1,unit:'g'},
      {name:'poivre',qty:1,unit:'g'},
      {name:'œuf',qty:1,unit:'pièce'},
      {name:'houmous',qty:30,unit:'g'},
      {name:'ciboulette',qty:10,unit:'g'},
      {name:'mesclun',qty:20,unit:'g'},
      {name:'wrap',qty:1,unit:'pièce'}
    ]
  },
  {
    id:'repas-sandwich-thon-avocat',
    title:'🥪 Sandwich thon avocat',
    color:'amber', author:'Cédrian Bou Assaf',
    time:'~5 min', portions:1, category:'midi',
    ingredients:[
      {name:'thon en boîte, égoutté',qty:140,unit:'g'},
      {name:'pain de mie complet',qty:80,unit:'g'},
      {name:'mayonnaise',qty:10,unit:'g'},
      {name:'avocat',qty:50,unit:'g'},
      {name:'tomate',qty:50,unit:'g'}
    ]
  },
{
    id:'poke-bowl-saumon',
    title:'🍛🐟 Poke bowl saumon',
    color:'rose',
    author:'Aliénor Desvignes',
    time:'20–25 min', portions:1, category:'midi',
    ingredients:[
      {name:'saumon (pavé)', qty:100, unit:'g'},
      {name:'avocat', qty:45, unit:'g'},
      {name:'riz basmati (cuit)', qty:150, unit:'g'},
      {name:'mayonnaise', qty:25, unit:'g'},
      {name:'jus de citron', qty:20, unit:'g'},
      {name:'salade verte', qty:60, unit:'g'},
      {name:'sauce sriracha', qty:5, unit:'g'}
    ]
  },
  {
    id:'salade-lentilles-oeuf-mollet',
    title:'🥗🥚 Salade de lentilles & œuf mollet',
    color:'green',
    author:'Mathilde Miessen',
    time:'45 min', portions:4, category:'midi',
    ingredients:[
      {name:'lentilles vertes', qty:250, unit:'g'},
      {name:'laurier', qty:1, unit:'feuille'},
      {name:'thym', qty:1, unit:'brin'},
      {name:'vinaigre blanc', qty:10, unit:'g'},
      {name:'œuf', qty:4, unit:'pièces'},
      {name:'moutarde', qty:6, unit:'g'},
      {name:'vinaigre de Xérès', qty:10, unit:'g'},
      {name:"huile de tournesol", qty:30, unit:'g'},
      {name:'échalote', qty:26, unit:'g'},
      {name:'ciboulette', qty:4, unit:'g'},
      {name:'persil', qty:2, unit:'g'},
      {name:'sel', qty:2, unit:'g'},
      {name:'poivre', qty:2, unit:'g'}
    ]
  },
  {
    id:'salade-poulet-crudites',
    title:'🥗🍗 Salade de poulet et crudités',
    color:'violet',
    author:'Vanessa Méril-Mamert',
    time:'1 h', portions:2, category:'midi',
    ingredients:[
      {name:'poulet', qty:200, unit:'g'},
      {name:'laitue romaine', qty:60, unit:'g'},
      {name:'concombre', qty:150, unit:'g'},
      {name:'tomate', qty:150, unit:'g'},
      {name:'poivron rouge', qty:185, unit:'g'},
      {name:'oignon rouge', qty:205, unit:'g'},
      {name:"huile d'olive", qty:4, unit:'g'},
      {name:'sel (fleur de sel)', qty:3, unit:'g'}
    ]
  }

);

/* ======= COLLATIONS (catégorie 'collation-am') ======= */
RECIPES.push(
  {
    id:'collation-crudites-avant-repas',
    title:'🥕🥒 Crudités avant le repas',
    color:'green', author:'Estelle Widmer',
    time:'10 min', portions:1, category:'collation-am',
    ingredients:[
      {name:'concombre',qty:50,unit:'g'},
      {name:'carotte',qty:50,unit:'g'},
      {name:'maïs doux (égoutté)',qty:140,unit:'g'},
      {name:'asperge verte',qty:15,unit:'g'},
      {name:'melon cantaloup',qty:50,unit:'g'}
    ]
  },
  {
    id:'collation-energy-balls-dattes-cacao',
    title:'⚡️🍫 Energy balls dattes & cacao',
    color:'amber', author:'Mathilde Bousquet',
    time:'1 h 30 (repos inclus)', portions:20, category:'collation-am',
    ingredients:[
      {name:'amandes',qty:200,unit:'g'},
      {name:'dattes Medjoul',qty:400,unit:'g'},
      {name:'cacao non sucré',qty:28,unit:'g'},
      {name:'purée d’amande',qty:45,unit:'g'},
      {name:'graines de chia',qty:30,unit:'g'},
      {name:'noix de coco râpée',qty:40,unit:'g'},
      {name:'eau',qty:30,unit:'g'}
    ]
  },
  {
    id:'collation-toasts-houmous-avocat-feta',
    title:'🥑🧆 Toasts houmous, avocat & feta',
    color:'teal', author:'AE COACHSPORTIF',
    time:'10 min', portions:1, category:'collation-am',
    ingredients:[
      {name:'pain au levain',qty:2,unit:'tranches'},
      {name:'avocat',qty:0.5,unit:'pièce'},
      {name:'houmous',qty:30,unit:'g'},
      {name:'feta',qty:20,unit:'g'},
      {name:'graines/grenade (topping)',qty:20,unit:'g'}
    ]
  },
  {
    id:'collation-pan-con-tomate',
    title:'🍅 Pan con tomate',
    color:'rose', author:'combernoux',
    time:'5 min', portions:4, category:'collation-am',
    ingredients:[
      {name:'baguette',qty:200,unit:'g'},
      {name:'tomate',qty:450,unit:'g'},
      {name:'ail',qty:12,unit:'g'},
      {name:'huile d’olive',qty:4,unit:'g'},
      {name:'sel',qty:1,unit:'g'}
    ]
  }
);

/* ======= DESSERTS (catégorie 'collation-pm') ======= */
RECIPES.push(
  {
    id:'dessert-overnight-chocolat',
    title:'🌙🍫 Overnight chocolat',
    color:'violet', author:'Milii Healthy',
    time:'5 min (+ repos)', portions:1, category:'collation-pm',
    ingredients:[
      {name:'flocons d’avoine',qty:40,unit:'g'},
      {name:'fromage blanc 0%',qty:125,unit:'g'},
      {name:'sirop d’agave',qty:20,unit:'g'},
      {name:'graines de chia',qty:5,unit:'g'},
      {name:'lait demi-écrémé',qty:50,unit:'g'},
      {name:'cacao en poudre',qty:5,unit:'g'},
      {name:'pépites de chocolat',qty:10,unit:'g'}
    ]
  },
  {
    id:'dessert-tartine-cacahuete-banane',
    title:'🥜🍌 Tartine cacahuète & banane',
    color:'rose', author:'Montier Jordan',
    time:'5 min', portions:2, category:'collation-pm',
    ingredients:[
      {name:'pain de mie complet',qty:80,unit:'g'},
      {name:'banane',qty:150,unit:'g'},
      {name:'beurre de cacahuète',qty:30,unit:'g'}
    ]
  },
  {
    id:'dessert-yaourt-glace-fruits-rouges',
    title:'🍧 Yaourt glacé aux fruits rouges',
    color:'blue', author:'Mathilde Miessen',
    time:'5 min', portions:1, category:'collation-pm',
    ingredients:[
      {name:'yaourt grec nature',qty:80,unit:'g'},
      {name:'beurre de cacahuète',qty:20,unit:'g'},
      {name:'fruits rouges surgelés',qty:50,unit:'g'}
    ]
  },
  {
    id:'dessert-yaourt-glace-framboise',
    title:'🍧 Yaourt glacé à la framboise',
    color:'amber', author:'Kathleen',
    time:'5 min (+ congélation)', portions:1, category:'collation-pm',
    ingredients:[
      {name:'skyr/yaourt nature',qty:200,unit:'g'},
      {name:'extrait de vanille',qty:10,unit:'g'},
      {name:'framboises',qty:150,unit:'g'},
      {name:'amandes effilées',qty:15,unit:'g'}
    ]
  },
  {
    id:'dessert-skyr-oleagineux-choco',
    title:'🥣 Skyr, oléagineux, chia & choco',
    color:'teal', author:'Montier Jordan',
    time:'5 min', portions:1, category:'collation-pm',
    ingredients:[
      {name:'skyr/fromage blanc',qty:150,unit:'g'},
      {name:'mandarine/clémentine',qty:100,unit:'g'},
      {name:'chocolat noir',qty:10,unit:'g'},
      {name:'graines de chia',qty:5,unit:'g'},
      {name:'mélange oléagineux',qty:10,unit:'g'}
    ]
  },
  {
    id:'dessert-banana-bread-sg-sl',
    title:'🍌🍞 Banana bread SG/SL',
    color:'green', author:'Catherine Cervantes',
    time:'~1 h', portions:4, category:'collation-pm',
    ingredients:[
      {name:'banane',qty:4,unit:'pièces'},
      {name:'œuf',qty:2,unit:'pièces'},
      {name:'huile de coco',qty:60,unit:'g'},
      {name:'farine de riz',qty:75,unit:'g'},
      {name:'farine de lupin',qty:75,unit:'g'},
      {name:'poudre d’amande',qty:70,unit:'g'},
      {name:'levure chimique',qty:1,unit:'sachet'},
      {name:'sel',qty:1,unit:'g'},
      {name:'cannelle',qty:2,unit:'g'},
      {name:'chocolat noir ≥70%',qty:100,unit:'g'}
    ]
  }
);




/* =========================
   Constantes & état
   ========================= */

   const LS_DECK_W = 'planner-deck-w';

const DAYS = ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'];
const MEALS = [
  { key:'matin',         label:'Matin' },
  { key:'collation-am',  label:'Collation matin' },
  { key:'midi',          label:'Midi' },
  { key:'collation-pm',  label:'Collation après-midi' },
  { key:'soir',          label:'Soir' }
];
const LS_KEY = 'planner-5slots-v1';

let activeCat = 'matin';
let planner; // sera chargé dans init()

/* =========================
   Refs DOM (assignées dans init)
   ========================= */
let deckList, searchEl, grid, clearBtn;
let modal, modalTitle, modalBody, modalAdd, modalClose;
let summary, openSummaryBtn, summaryClose, summaryBody, copySummaryBtn, printSummaryBtn;

/* =========================
   Helpers
   ========================= */
const byId = id => RECIPES.find(r => r.id === id) || null;
function emptyDay(){ return { 'matin':[], 'collation-am':[], 'midi':[], 'collation-pm':[], 'soir':[] }; }

function loadPlanner(){
  try{
    const raw = localStorage.getItem(LS_KEY);
    if(raw){
      const p = JSON.parse(raw);
      const out = {};
      DAYS.forEach(d=>{
        out[d] = out[d] || emptyDay();
        const src = p[d] || {};
        MEALS.forEach(m=>{
          const v = src[m.key];
          out[d][m.key] = Array.isArray(v) ? v : (v ? [v] : []);
        });
      });
      return out;
    }
  }catch(_){}
  const init={}; DAYS.forEach(d=>init[d]=emptyDay()); return init;
}
function savePlanner(){ try{ localStorage.setItem(LS_KEY, JSON.stringify(planner)); }catch(_){} }
function addToCell(day, meal, id){ planner[day][meal].push(id); savePlanner(); }
function removeFromCell(day, meal, index){ planner[day][meal].splice(index,1); savePlanner(); }
function emojiFromColor(c){ return c==='green'?'🌿':c==='amber'?'🌞':c==='rose'?'🌺':c==='blue'?'🌊':c==='violet'?'🔮':'🧊'; }

/* =========================
   Deck (pile de cartes)
   ========================= */
function deckCardHTML(r, i){
  const z = i + 1; // titres toujours visibles (empilement inversé lisible)
  return `
    <article class="card" draggable="true"
             data-id="${r.id}" data-color="${r.color||'green'}"
             style="z-index:${z}">
      <div class="title">${emojiFromColor(r.color)} <span>${r.title}</span></div>
      <div class="meta">${r.author?`par ${r.author} • `:''}${r.time} • ${r.portions} p.</div>
      <span class="badge">Glisse-moi ➜</span>
    </article>`;
}
function renderDeck(){
  if (!deckList) return; // ✅ sécurité anti-crash
  const q = (searchEl?.value||'').toLowerCase().trim();
  const items = RECIPES.filter(r => r.category === activeCat && (!q || r.title.toLowerCase().includes(q)));
  deckList.innerHTML = items.map(deckCardHTML).join('');
  deckList.querySelectorAll('.card').forEach((el,i)=>{
    el.style.zIndex = i+1;
    el.addEventListener('dragstart', e=>{
      e.dataTransfer.setData('text/plain', el.dataset.id);
      e.dataTransfer.effectAllowed = 'copy';
    });
    el.addEventListener('click', ()=> openRecipeModal(el.dataset.id));
  });
}

/* =========================
   Grille semaine (5 slots/jour)
   ========================= */
function buildGrid(){
  grid.innerHTML = `
    <div class="grid-head"></div>
    ${MEALS.map(m=>`<div class="grid-head">${m.label}</div>`).join('')}
  `;
  DAYS.forEach(day=>{
    const head = document.createElement('div');
    head.className = 'row-head';
    head.textContent = day;
    grid.appendChild(head);
    MEALS.forEach(m=>{
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.day = day;
      cell.dataset.meal = m.key;
      grid.appendChild(cell);
    });
  });
  bindDropZones();
}
function bindDropZones(){
  grid.querySelectorAll('.cell').forEach(cell=>{
    cell.addEventListener('dragover', e=>{ e.preventDefault(); cell.classList.add('drop-hover'); });
    cell.addEventListener('dragleave', ()=> cell.classList.remove('drop-hover'));
    cell.addEventListener('drop', onDropIntoCell);
  });
}
function renderCells(){
  grid.querySelectorAll('.cell').forEach(cell=>{
    const day = cell.dataset.day, meal = cell.dataset.meal;
    const ids = planner[day][meal];
    if(!ids || ids.length===0){
      cell.innerHTML = `<div class="placeholder">Dépose ici…</div>`;
      return;
    }
    cell.innerHTML = `<div class="cell-list">${ids.map((id,idx)=>dayCardHTML(byId(id), day, meal, idx)).join('')}</div>`;
  });
  bindDayCards();
}
function dayCardHTML(r, day, meal, index){
  const ings = (r.ingredients||[]).map(i=>`• ${i.name}: ${i.qty}${i.unit?(' '+i.unit):''}`).join('<br>');
  return `
    <div class="day-card" draggable="true"
         data-id="${r.id}" data-day="${day}" data-meal="${meal}" data-index="${index}"
         data-color="${r.color||'green'}">
      <div class="top">
        <div class="name">${r.title}</div>
        <div class="controls">
          <button class="icon-btn js-expand">Lire</button>
          <button class="icon-btn js-remove">Retirer</button>
        </div>
      </div>
      <div class="body">
        <div class="meta">${r.time} • ${r.portions} p.</div>
        <div class="ing" style="margin-top:4px">${ings}</div>
      </div>
    </div>`;
}
function bindDayCards(){
  grid.querySelectorAll('.day-card').forEach(card=>{
    card.addEventListener('dragstart', e=>{
      const payload = {
        id: card.dataset.id,
        fromDay: card.dataset.day,
        fromMeal: card.dataset.meal,
        fromIndex: Number(card.dataset.index)
      };
      e.dataTransfer.setData('application/json', JSON.stringify(payload));
      e.dataTransfer.setData('text/plain', card.dataset.id);
      e.dataTransfer.effectAllowed = 'move';
    });
    card.querySelector('.js-expand').addEventListener('click', ()=> card.classList.toggle('expanded'));
    card.querySelector('.js-remove').addEventListener('click', ()=>{
      removeFromCell(card.dataset.day, card.dataset.meal, Number(card.dataset.index));
      renderCells();
      updateSummaryPanel();
    });
  });
}
function onDropIntoCell(e){
  e.preventDefault();
  const cell = e.currentTarget;
  cell.classList.remove('drop-hover');
  const day = cell.dataset.day, meal = cell.dataset.meal;

  let payload = null;
  const json = e.dataTransfer.getData('application/json');
  if(json){ try{ payload = JSON.parse(json); }catch(_){} }
  let id = e.dataTransfer.getData('text/plain');

  if(payload && payload.id){
    id = payload.id;
    removeFromCell(payload.fromDay, payload.fromMeal, payload.fromIndex);
    addToCell(day, meal, id);
  }else if(id){
    addToCell(day, meal, id);
  }
  renderCells();
  updateSummaryPanel();
}

/* =========================
   Modale recette (deck)
   ========================= */
function openRecipeModal(id){
  const r = byId(id); if(!r) return;
  modalTitle.textContent = r.title;
  modalBody.innerHTML = `
    <div><strong>Auteur</strong> : ${r.author||'—'} • <strong>Temps</strong> : ${r.time} • <strong>Portions</strong> : ${r.portions}</div>
    <h4>Ingrédients</h4>
    <ul>${(r.ingredients||[]).map(i=>`<li>${i.name}: <strong>${i.qty}${i.unit?(' '+i.unit):''}</strong></li>`).join('')}</ul>
  `;
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
}
function closeRecipeModal(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }

function addTodayFromModal(){
  const title = modalTitle.textContent;
  const r = RECIPES.find(x=>x.title===title);
  if(!r) return;
  const js = new Date().getDay(); // 0=Dim
  const day = js===0 ? 'Dim' : DAYS[js-1];
  addToCell(day, 'matin', r.id);
  renderCells(); updateSummaryPanel(); closeRecipeModal();
}

/* =========================
   Résumé ingrédients
   ========================= */
function openSummary(){ summary?.classList.add('open'); summary?.setAttribute('aria-hidden','false'); }
function closeSummary(){ summary?.classList.remove('open'); summary?.setAttribute('aria-hidden','true'); }

function aggregateIngredients(){
  const bag = {};
  DAYS.forEach(day=>{
    MEALS.forEach(m=>{
      (planner[day][m.key]||[]).forEach(id=>{
        const r = byId(id); if(!r) return;
        (r.ingredients||[]).forEach(i=>{
          const key = `${(i.name||'').toLowerCase().trim()}|${i.unit||''}`;
          if(!bag[key]) bag[key] = { name:i.name, unit:i.unit||'', qty:0 };
          bag[key].qty += Number(i.qty)||0;
        });
      });
    });
  });
  return bag;
}
function formatQty(n){ const r = Math.round((Number(n)||0)*100)/100; return (r%1===0)?String(Math.trunc(r)):String(r); }
function updateSummaryPanel(){
  if(!summaryBody) return;
  const bag = aggregateIngredients();
  const lines = Object.values(bag)
    .sort((a,b)=>a.name.localeCompare(b.name))
    .map(x=>`<li>${x.name}: <strong>${formatQty(x.qty)}${x.unit?(' '+x.unit):''}</strong></li>`)
    .join('');
  summaryBody.innerHTML = lines ? `<ul>${lines}</ul>` : `<p class="muted">Aucun ingrédient (tableau vide).</p>`;
}
async function copySummary(){
  const bag = aggregateIngredients();
  const text = Object.values(bag)
    .sort((a,b)=>a.name.localeCompare(b.name))
    .map(x=>`${x.name}: ${formatQty(x.qty)}${x.unit?(' '+x.unit):''}`).join('\n');
  try{
    await navigator.clipboard.writeText(text);
    if (copySummaryBtn){ copySummaryBtn.textContent='Copié ✅'; setTimeout(()=>{ copySummaryBtn.textContent='Copier'; },1200); }
  }catch(_){
    const ta=document.createElement('textarea'); ta.value=text; document.body.appendChild(ta);
    ta.select(); document.execCommand('copy'); ta.remove();
  }
}

/* =========================
   Tabs catégories
   ========================= */
function bindTabs(){
  document.querySelectorAll('.deck .tab').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.deck .tab').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      activeCat = btn.dataset.cat;
      renderDeck();
    });
  });
}

/* =========================
   Init (après DOM prêt)
   ========================= */
document.addEventListener('DOMContentLoaded', () => {
  // refs
  deckList = document.getElementById('deck-list');
  searchEl = document.getElementById('search');
  grid = document.getElementById('grid');
  clearBtn = document.getElementById('clear-week');

  modal = document.getElementById('modal');
  modalTitle = document.getElementById('modal-title');
  modalBody = document.getElementById('modal-body');
  modalAdd = document.getElementById('modal-add');
  modalClose = document.getElementById('modal-close');

  summary = document.getElementById('summary');
  openSummaryBtn = document.getElementById('open-summary');
  summaryClose = document.getElementById('summary-close');
  summaryBody = document.getElementById('summary-body');
  copySummaryBtn = document.getElementById('copy-summary');
  printSummaryBtn = document.getElementById('print-summary');

  // état
  planner = loadPlanner();

  // listeners
  bindTabs();
  searchEl?.addEventListener('input', renderDeck);
  clearBtn?.addEventListener('click', ()=>{
    DAYS.forEach(d=> planner[d]=emptyDay());
    savePlanner(); renderCells(); updateSummaryPanel();
  });

  modalClose?.addEventListener('click', closeRecipeModal);
  modal?.addEventListener('click', e=>{ if(e.target===modal) closeRecipeModal(); });
  window.addEventListener('keydown', e=>{ if(e.key==='Escape') closeRecipeModal(); });
  modalAdd?.addEventListener('click', addTodayFromModal);

  openSummaryBtn?.addEventListener('click', ()=>{ updateSummaryPanel(); openSummary(); });
  summaryClose?.addEventListener('click', closeSummary);
  summary?.addEventListener('click', e=>{ if(e.target===summary) closeSummary(); });
  printSummaryBtn?.addEventListener('click', ()=>window.print());
  copySummaryBtn?.addEventListener('click', copySummary);


    const layoutEl = document.querySelector('.layout');
  const resizer = document.getElementById('deck-resizer');

  // largeur mémorisée
  const savedDeckW = Number(localStorage.getItem(LS_DECK_W));
  if (savedDeckW) document.documentElement.style.setProperty('--deck-w', savedDeckW + 'px');

  // drag pour redimensionner
  let dragging = false;

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  const onPointerMove = (e) => {
    if (!dragging) return;
    const rect = layoutEl.getBoundingClientRect();
    // largeur = position du curseur relative au bord gauche du layout
    let w = e.clientX - rect.left;
    // bornes cohérentes avec le CSS
    const minW = 280;
    const maxW = Math.min(window.innerWidth * 0.7, 920);
    w = clamp(w, minW, maxW);
    document.documentElement.style.setProperty('--deck-w', w + 'px');
  };

  const stopDrag = () => {
    if (!dragging) return;
    dragging = false;
    // on mémorise
    const current = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--deck-w'));
    localStorage.setItem(LS_DECK_W, String(Math.round(current)));
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', stopDrag);
  };

  resizer?.addEventListener('pointerdown', (e) => {
    dragging = true;
    e.preventDefault();
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', stopDrag);
  });

  // double-clic sur la barre pour reset à 380px
  resizer?.addEventListener('dblclick', () => {
    document.documentElement.style.setProperty('--deck-w', '380px');
    localStorage.removeItem(LS_DECK_W);
  });


  // rendu
  buildGrid();
  renderCells();
  renderDeck();
});
