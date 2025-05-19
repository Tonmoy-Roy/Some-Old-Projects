const loaddata=()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>display(data))
}
const display=countries=>{
    const store=document.getElementById('load');
    countries.forEach(country => {
        console.log(country);
        const one = document.createElement('li');
        one.classList.add('country');
        one.innerHTML=` 
            <h3>name : ${country.name.common}</h3>
            <p>capital : ${country.capital}</p>
            <button onclick="print('${country.cca2}')">Details</button>
        `
        store.appendChild(one);
    });
}
const print=printing=>{
    //console.log("details coming soon");
    const url=`https://restcountries.com/v3.1/alpha/${printing}`;
    console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>showcountry(data[0]));
}
const showcountry=show=>{
 //   console.log(show);
    const flag=document.getElementById('flag');
    flag.innerHTML=` 
        <h3>name : ${show.name.common}</h3>
        <img src="${show.flags.png}"</img>
    `
}