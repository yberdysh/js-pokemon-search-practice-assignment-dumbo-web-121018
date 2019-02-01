document.addEventListener('DOMContentLoaded', () => {
  // console.log(POKEMON)
  //YOUR CODE HERE
  let pokeContainer = document.querySelector("#pokemon-container")
  const input = document.querySelector("#pokemon-search-form input");
  console.log("input", input);
  fetchPokes()
  input.addEventListener("keyUp", filterPokes)

  function fetchPokes(){
     fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
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
    console.log("hello world")
    // console.log(event)

  }

  // function flip(pokemonId){
  //   fetch(`http://localhost:3000/pokemon/${pokemon.id}`)
  //   .then(res => res.json())
  //   .then(pokemon => {
  //     document.querySelector(`.pokemon-image img[data-id=${pokemon.id}]`)
  //   })
  // }

})
