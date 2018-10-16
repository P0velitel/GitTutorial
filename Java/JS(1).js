/*function Reverse(str){
    var a = "";
for(var i = str.length - 1; i >= 0; i--){
    a += str[i];
}
console.log(a);
return a;
}
Reverse("abc");
*/
function ucFirst(str){
str = str[0].toUpperCase() + str.substring(1);
console.log(str);
return str;
}

ucFirst("vlad");

function ucWords(str){
    /*let a = '' + str.substring(0,1).toUpperCase();
    for(let i = str.length - 1; i >= 0; i++){
        if(" ".equals(str.substring(i-1,i)))
        a = a + str.substring(i,i+1).toUpperCase();
        else
        a = a +str.substring(i,i+1);
    }
    console.log(a);
    return a;*/

    str = str.split(' ');
    let res = '';
    for (let i = 0; i < str.length; i++) {
        res += (ucFirst(str[i])) + " ";
    }
    return res;
}
function redExp(str){
    
}
console.log(ucWords("vlad max toxa"));