export default interface userInterface {
    username: string,
    numberOfAttempts: number,
    bestAttempt: number,
    guessedPokemon: {
        [pokemonName: string]: number;
    };
}