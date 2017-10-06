/*index parcours le tableau, et tant que index n'atteint pas la fin du tableau, il multiplie par 2 la valeur
 *qu'il pointe ensuite on relance de manière récursive la fonction en incrémentent l'index de 1 et on envoie la 
 *valeur du tableau grâce a l'opérateur spread. Si on arrive à la fin du tableau on retrun le tableau 
*/

function multiply(index, ...array) {
    if(index < array.length) {
	array[index] *= 2;
	return multiply(index + 1, ...array);
    } else {
	return array;
    }
}
console.log(multiply(0, 1, 2, 4));