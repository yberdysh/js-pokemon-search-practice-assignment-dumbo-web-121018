document.addEventListener('DOMContentLoaded', () => {
  // console.log(POKEMON)
  //YOUR CODE HERE
  let pokeContainer = document.querySelector("#pokemon-container")
  const input = document.querySelector("#pokemon-search-form");
  initialLoadPokes()
  // input.addEventListener("input", filterPokes)
  input.addEventListener("input", filterPokes)

  function fetchPokes(){
     return fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
  }

  function initialLoadPokes(){
    fetchPokes()
    .then(putPokesOnDOM)
  }

  function putPokesOnDOM(pokemons){
    pokemons.forEach(pokemon => {
      pokeContainer.innerHTML +=
      `<div class="pokemon-card">
      <div class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
        <div class="pokemon-image">
          <img data-id=${pokemon.id} data-action="flip" class="toggle-sprite" src=${pokemon.sprites.front}>
        </div>
      </div>
    </div>`

    })
  }

  function filterPokes(event){
    let string = event.target.value
    pokeContainer.innerHTML = ""
    fetchPokes()
    // .then(console.log)
    .then(pokemons => pokemons.filter(pokemon => pokemon.name.includes(string)))
    .then(putPokesOnDOM)

    // console.log(event)

  }

  function flip(pokemonId){
    console.log("flipping...")
    // fetch(`http://localhost:3000/pokemon/${pokemon.id}`)
    // .then(res => res.json())
    // .then(pokemon => {
    //   document.querySelector(`.pokemon-image img[data-id=${pokemon.id}]`)
    // })
  }

})
