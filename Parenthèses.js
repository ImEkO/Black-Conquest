/*On utilise split() pour transformer la string en array, puis reduce() pour compter les parenthèses dans l'array 
 *et ajouter 1 dans a si on trouver une parenthèse ouverte et -1 si on trouve une parenthèse fermée
 *ensuite on compare a s'il vaut zéro on return true. 
*/

function VerifParenthese(string){
    var arr = string.split("");
    var res = arr.reduce(function(a, b) {
	    if(b == "(") {
		return ++a;
	    } else if(b == ")") {
		return --a;
	    }
	    return a;
	}, 0);
    if (res == 0)
	return true;
    else
	return false;
}

var string = "(a)z)";
console.log(VerifParenthese(string));