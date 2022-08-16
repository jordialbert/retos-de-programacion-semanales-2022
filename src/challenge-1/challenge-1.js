/*
 * Challenge #1
 * "Is it an anagram?"
 * Level: MEDIUM
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 */

function main() {
    console.log(isAnagram("night", "thing"));
    console.log(isAnagram("night", "love"));
    console.log(isAnagram("night", "night"));
}

function isAnagram(firstWord, secondWord) {
    if (firstWord === secondWord) {
        return false;
    }

    firstWordArray = [...firstWord].sort();
    secondWordArray = [...secondWord].sort();

    return (firstWordArray.length === secondWordArray.length) &&
    (firstWordArray.every((value, index) => value === secondWordArray[index]));
}
