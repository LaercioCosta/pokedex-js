
/* Requsição HTTP

 fetch ("https://pokeapi.co/api/v2/pokemon")


Request Method:
GET = BUSCAR
POST = INSERIR
PUT = ATUALIZAR
DELETE = REMOVER



Request Headers:
content-type: application/json



Request Body
{
    "name": "Teste"
}



Status code:
200 - 299 = Sucesso
300 - 399 = Redirect
400 - 499 = erro no cliente
500 - 599 = erro no servidor */

/* convertPokemonTypesToLi = (pokemonTypes) => {
    return pokemonTypes.map((typeSlot) =>`<li class="type">${type}</li>`)
} */

const pokemonOl = document.getElementById('pokemonList');
const loadMoreBtn = document.getElementById('loadMorebtn');
let offset = 0;
const limit = 10;
const maxRecord = 151;

loadPokemonItens = (offset, limit) => {
    pokeApi.getPokemon(offset, limit).then((pokemonList = []) => {
        const newHtml = pokemonList.map((pokemon) =>
            `<a href="/description?id=${pokemon.id}" id="goToDescripition">
                <li class="listaPokemon ${pokemon.type}">
                    <span class="number">#00${pokemon.id}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.photo}"
                            alt="${pokemon.name}">
                    </div>
                </li>
            </a>
        `
        ).join('');

        pokemonOl.innerHTML += newHtml;
        //     const listItems = []

        //    /* Loop para percorre lista da API*/
        //     for (let i = 0; i < pokemonList.length; i++) {

        //         /* Pegando os items da api (pokemonList[i]) */
        //         const pokemon = pokemonList[i];

        //         /* Transformando lista da api e um lista HTML (convertPokemonToLi(pokemon)) e gerendo um lista nova (listItems) */
        //         listItems.push(convertPokemonToLi(pokemon))
        //         /* pokemonOl.innerHTML += convertPokemonToLi(pokemon) */

        //     }
    });
}

    loadMoreBtn.addEventListener('click', () => {
        offset += limit;

         const qtdRecordNextPage = offset + limit;
    
        if(qtdRecordNextPage >= maxRecord){
            const newList = maxRecord - offset;
            loadPokemonItens(offset, newList)
            loadMoreBtn.parentElement.removeChild(loadMoreBtn)
        }else{
            loadPokemonItens(offset, limit)
            
        }
    })


loadPokemonItens(offset, limit);




