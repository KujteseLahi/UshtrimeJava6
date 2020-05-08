
function shtoLajmin(){
  
  var div = document.createElement("div");
  div.className="form-group";
  var img = document.createElement("img");
  img.src = "Ubtlogo.png";
  img.className="foto-lajmi";
  div.appendChild(img);
  var a = document.getElementById('titulli-new');
  var defV = a.defaultValue;
  var cV = a.value;

  var title = document.createElement("h3");

  var titleText = document.createTextNode(cV);
      
  title.appendChild(titleText);
  div.appendChild(title);
  

 var b = document.getElementById('permbajtja-new');
 var defV1 = b.defaultValue;
  var cV1 = b.value;
 var teksti = document.createElement("p");
  var text = document.createTextNode(cV1);
  
  teksti.appendChild(text)
  div.appendChild(teksti);

  var c = document.createElement('h6');
  var data = document.createTextNode("data");
  c.appendChild(data);
  div.appendChild(c);

  
  var element = document.getElementById("right-side")
  element.prepend(div);
  
  
  var element = document.getElementById("right-side")
  element.prepend(div);


  var numriL = element.childElementCount;
  
    
  if(numriL == 9){
    
    element.removeChild(element.lastElementChild);
}
 
 
   
  
}
