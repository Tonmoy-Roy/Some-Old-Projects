let universe = [];

const loaddata = () => {
  fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => {
      universe = data.data.tools; 
      display(universe);
    });
}

const display = (universeData) => {
  const container = document.getElementById('loader');
  container.textContent = '';

  for (const uni of universeData) {
    const create = document.createElement('div');
    create.classList.add('col');
    create.innerHTML = `
        <div class="card h-100">
          <img src="${uni.image}" class="card-img-top" alt="Card Image">
            <h5>Features</h5>
          <ol type ="${uni.listType}">
            ${uni.features}<br>
          </ol>
          <div class="card-body">
            <h5 class="card-title">${uni.name}</h5>
            <p class="card-text">${uni.published_in}</p>
            <!-- Button trigger modal -->
            <div class="text-end class">
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Show Details
              </button>
          
              <!-- Modal -->
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Details</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      ...
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>                   
        </div>
      `
    container.appendChild(create);
  }
}
const sortData = () => {
  const sortedUniverse = universe.slice().sort((a, b) => new Date(a.published_in) - new Date(b.published_in));
  display(sortedUniverse);
}

const sortButton = document.getElementById("sort");
sortButton.addEventListener("click", sortData);

loaddata();
