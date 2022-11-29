const pokemonDiv = document.getElementById('PokeDiv');
let urlParam = new URLSearchParams(window.location.search);
const pokemonID = urlParam.get("id");
const idDetails = pokemonID - 1;

returnPokemonName = (value) => {
    if (value.name == urlsplit)
        return value
}

loadPokemonDescription = () => {
    calcularPesoeAltura = (value) => {
        return divisão  = value/ 10
    }
    pokeApi.getPokemon(idDetails, 1 ).then((pokemonDetail = []) => {
        
        const newHtml = pokemonDetail.map((PokemonInformation) =>
            `
        <section class='sectionBackgroud ${PokemonInformation.type}'>
            <section class="descripitionOfPokemon">
                <span class="material-symbols-outlined" onclick="voltarParaPaginaInicial()">arrow_back</span>
                <ol class="lisDescripitionOfPokemon">
                    <li>
                        <div class="nameAndIdforPokemon">
                            <span class="name">${PokemonInformation.name}</span>
                            <span>#00${PokemonInformation.id}</span>
                        </div>
                        <div class="typesInDescripition">
                            <ol class="listTypesInDescripition">
                            ${PokemonInformation.types.map((type) => `
                                <li class="pokemonTypesName ${type}">
                                ${type}
                                </li>`).join('')}
                            </ol>
                        </div>
                    </li>
                </ol>
            </section>

            <section class="moreInformetionOfPokemon">
                <div>
                    <img class="imgDetailForPokemon"
                        src="${PokemonInformation.photo}"
                        alt="Bulbasaur">
                </div>
                <ol class="listForMoreInformetionOfPokemon">
                    <li class="nameForMoreInformetionOfPokemon">
                        About
                    </li>
                </ol>
            
                <table class="tableAboutInfoPokemon">
                    <tr>
                            <td class="nameInformationForTablePokemon">Abilities</td> 
                            ${PokemonInformation.abilities.map((ability) => `<td class="informationForTablePokemon">${ability}</td>`).join('')}  
                    </tr>
                    
                    <tr>
                            <td class="nameInformationForTablePokemon">Weight</td> 
                            <td class="informationForTablePokemon">${calcularPesoeAltura(PokemonInformation.weight)} Kg</td>
                    </tr>

                    <tr>
                            <td class="nameInformationForTablePokemon">Height</td> 
                            <td class="informationForTablePokemon">${calcularPesoeAltura(PokemonInformation.height)} Cm</td> 
                    </tr>
                                
                </table>
            </section>
            </section>
            `
        )
        console.log(pokemonDetail)
        pokemonDiv.innerHTML += newHtml;
    });
}

voltarParaPaginaInicial = () => {
    window.location.href = "../../index.html"
}



loadPokemonDescription()