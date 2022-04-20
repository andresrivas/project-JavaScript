//Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically (every 1000 ms) 
//removing one letter from the end of the string and attaching it to the front.
//see setInterval function



// se genera una funcion asociada al html animate_string
// se crean las variables llamando los elementos

function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; 
    var text = textNode.data; //representa una longitud en la cadena

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}

Explanati