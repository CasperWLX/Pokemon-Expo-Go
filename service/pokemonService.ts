import util from './clientUtils'
import { create } from 'zustand'
import { pokemonInterface } from '../interface/pokemonInterface'

interface apiInterface {
    pokemonToGuess: pokemonInterface;
    listOfGuessedPokemon: pokemonInterface[];
    listOfAllPokemon: pokemonInterface[];
    fetchOnePokemon: (identifier: string) => Promise<pokemonInterface>;
    fetchAllPokemon: () => void;
    setPokemonToGuess: (pokemon: pokemonInterface) => void;
    addOnePokemonToArray: (pokemon: pokemonInterface) => void;
    cleanArray: () => void;
}

const pokemonEndpoints = "/database/v2"

const pokemonService = create<apiInterface>()((set, get) => ({

    pokemonToGuess: {} as pokemonInterface,
    listOfGuessedPokemon: [],
    listOfAllPokemon: [],

    fetchOnePokemon: async (identifier) => {
        try {
            const response = await util.get(`${pokemonEndpoints}/pokemon/${identifier}`)
            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.error("That pokemon does not exist in the database");
            alert("That pokemon does not exist in my database")
        }
    },

    fetchAllPokemon: async () => {
        try {
            const response = await util.get(`${pokemonEndpoints}/pokemon/all`)
            if (response.status === 200) {
                set({listOfAllPokemon: response.data})
            }
        } catch (error) {
            console.error("Error fetching all pokemon");
            alert("Something went wrong while fetching all pokemon")
        }
    },

    setPokemonToGuess: (pokemon) => {
        set({ pokemonToGuess: pokemon })
    },

    addOnePokemonToArray: (pokemon) => {
        const currentList = get().listOfGuessedPokemon;

        set({
            listOfGuessedPokemon: [ pokemon, ...currentList],
        });
    },

    cleanArray: () => set({ listOfGuessedPokemon: [] }),
}))

export default pokemonService;