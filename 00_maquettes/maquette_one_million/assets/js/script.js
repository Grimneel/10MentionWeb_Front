// Test lien HTML et JS //
// alert('ops')

// let containerTeam = document.querySelector('#container-team');
let ceo = document.querySelector('#ceo');
console.log(ceo);
let cpo = document.querySelector('#cpo');
let communication = document.querySelector('#communication');
let educator = document.querySelector('#educator');

// let teamTable = [ceo, cpo, communication, educator];

function poulet2 (element, classe){
    element.classList.toggle(classe)
};

ceo.addEventListener('mouseover', ()=>{
    poulet2(ceo, 'ceo')
})

ceo.addEventListener('mouseout',()=>{
    poulet2(ceo, 'ceo') 
})

cpo.addEventListener('mouseover', ()=>{
    poulet2(cpo, 'cpo')
})

cpo.addEventListener('mouseout',()=>{
    poulet2(cpo, 'cpo')
})

communication.addEventListener('mouseover', ()=>{
    poulet2(communication, 'communication')
})

communication.addEventListener('mouseout',()=>{
    poulet2(communication, 'communication')
    
})

educator.addEventListener('mouseover', ()=>{
    poulet2(educator, 'educator')
})

educator.addEventListener('mouseout',()=>{
    poulet2(educator, 'educator')
    
})

poulet2(element, classe);

