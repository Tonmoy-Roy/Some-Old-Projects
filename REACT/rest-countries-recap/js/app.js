const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => display(data))
  }
  
  const display = countries => {
    const countrHTML = countries.map(country => getHTML(country)).join('');
    const container = document.getElementById('show');
    container.innerHTML = countrHTML;
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
    container.style.gridGap = '10px';
  }
  
  const getHTML = country => {
    return `
      <div style="border: 1px solid #ccc; border-radius: 5px; padding: 10px;">
        <h2>${country.name.common}</h2>
        <p>Area : ${country.area}</p>
        <p>State : ${country.region}</p>
        <img src="${country.flags.png}" alt="${country.name.common} flag" style="width: 100%; background-color: #f1f1f1; border-radius: 5px;">
      </div>
    `;
  }
  
  loadCountries();