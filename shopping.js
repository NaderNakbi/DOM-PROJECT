filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("card-item");
  if (c == "all")c = "" ;
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


//
function show1()
{
    var drop = document.getElementById("dropdown")
    drop.style.display=drop.style.display=="block"?"none":"block"
}

function add()
  {
    
    document.querySelectorAll('.add').forEach(item=>{
        item.addEventListener('click',event =>{
            console.log(item.parentElement)
            itemcopy = item.parentElement.cloneNode(true);
      itemcopy.setAttribute("class","added-item")
      document.getElementById("number").innerText= Number(document.getElementById("number").innerText)+1
            document.getElementById("dropdown").append(itemcopy)
        })
    })
  }
  add()