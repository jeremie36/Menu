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
RECIPES.push(
  { id:'snack-am-yaourt-fruit', title:'🥤 Yaourt + fruit', color:'teal', author:'—', time:'2 min', portions:1, category:'collation-am',
    ingredients:[{name:'yaourt',qty:125,unit:'g'},{name:'fruit',qty:1,unit:'pièce'}] },
  { id:'midi-wrap-poulet', title:'🍽️ Wrap poulet & crudités', color:'blue', author:'—', time:'12 min', portions:1, category:'midi',
    ingredients:[{name:'tortilla',qty:1,unit:'pièce'},{name:'poulet',qty:100,unit:'g'},{name:'légumes',qty:80,unit:'g'}] },
  { id:'snack-pm-noix-pomme', title:'🍪 Poignée de noix + pomme', color:'amber', author:'—', time:'1 min', portions:1, category:'collation-pm',
    ingredients:[{name:'noix',qty:25,unit:'g'},{name:'pomme',qty:1,unit:'pièce'}] },
  { id:'soir-omelette-legumes', title:'🌙 Omelette aux légumes', color:'green', author:'—', time:'10 min', portions:1, category:'soir',
    ingredients:[{name:'œuf',qty:2,unit:'pièce'},{name:'légumes',qty:120,unit:'g'}] }
);

/* =========================
   Constantes & état
   ========================= */
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

  // rendu
  buildGrid();
  renderCells();
  renderDeck();
});
