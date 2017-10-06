/*Filter retourne un nouveau tableau conteant le tableau d'origine sans les
 * occurances demander dans la callback via le tableau(a).indexOf 
 * qui compare la première position d'un élément dans le tableau et sa
 * position actuelle. Pour les doublons les positions seront differentes.
*/

function ArrayDoublon(a){
    uniqueArray = a.filter(function(item, pos) {
	    return a.indexOf(item) == pos;
	})
	return uniqueArray;
}
var array = [42, 101010, 7, 42, 7, 42, 101010, 42, 101010, 7, 42, 101010, 42, 101010, 7, 42, 7, 42, 101010, 42];
console.log(ArrayDoublon(array));