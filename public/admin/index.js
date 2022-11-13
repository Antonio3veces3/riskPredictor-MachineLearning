// ADMIN NAME
const adminName = document.getElementById('adminName');

// BUTTONS
const btnLogOut = document.getElementById('btnLogOut');

// FILTERS
const selectGeneration = document.getElementById('selectGeneration');
const selectOrder = document.getElementById('selectOrder');

const userAdmin = localStorage.getItem('admin')
if( !userAdmin){
    window.location = 'http://localhost:8080/';
}else{
    adminName.innerText = `Admin - ${userAdmin}`;
}

selectGeneration.addEventListener('change',()=>{
    let selectedOption = selectGeneration.options[selectGeneration.selectedIndex].value;
    console.log(selectedOption);
})
selectOrder.addEventListener('change',()=>{
    let selectedOption = selectOrder.options[selectOrder.selectedIndex].value;
    console.log(selectedOption);
})

btnLogOut.addEventListener('click',()=>{
    localStorage.clear();
    window.location = 'http://localhost:8080/';
})