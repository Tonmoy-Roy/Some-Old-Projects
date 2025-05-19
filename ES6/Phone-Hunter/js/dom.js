const loadphones = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    display(data.data, dataLimit);
}
const display = (phones, dataLimit) => {
    const PhonesContainer = document.getElementById('phone_container');
    PhonesContainer.textContent = '';
    //PhonesContainer.textContent='';
    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        const showall = document.getElementById('show_all');
        showall.classList.remove('d-none');
    }
    const nophone = document.getElementById('no_message_found');
    if (phones.length === 0) {
        nophone.classList.remove('d-none');
    }
    else {
        nophone.classList.add('d-none');
    }
    phones.forEach(phone => {
        const phonediv = document.createElement('div');
        phonediv.classList.add('col');
        phonediv.innerHTML = ` 
        <div class="card p-5">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Show Details</button>
        </div>
    </div>`
        PhonesContainer.appendChild(phonediv);
        toogleSpinner(false);
    });
}
const processSearch = (dataLimit) => {
    toogleSpinner(true);
    const searchfield = document.getElementById('search_field');
    const searchtext = searchfield.value;
    loadphones(searchtext, dataLimit);
}
document.getElementById('btn_search').addEventListener('click', function () {
    processSearch(10);
})
const toogleSpinner = isLoading => {
    const loader = document.getElementById('loader');
    if (isLoading) {
        loader.classList.remove('d-none');
    }
    else {
        loader.classList.add('d-none');
    }
}
document.getElementById('btn_show_all').addEventListener('click', function () {
    processSearch();
})
document.getElementById('search_field').addEventListener('keypress', function (e) {
    console.log(e.key);
    if (e.key === 'Enter') {
        processSearch(10);
    }
});
//loadphones();
