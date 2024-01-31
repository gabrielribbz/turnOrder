var myTextBox = document.getElementById("textBox")
var iniBox = document.getElementById("initiativeBox")
var button = document.getElementById("button")
var myList = document.getElementById("orderList")
var nextTurn = document.getElementById("nextTurn")
var previousTurn = document.getElementById("previousTurn")
var refresh = document.getElementById("refresh")
var Delete = document.getElementById("delete")
var selectElement = document.getElementById("selectElement")
var turnNumber = document.getElementById("turnNumber")
var diceNumber = document.getElementById("diceNumber")
var opcoes = document.getElementById("opcoes")
var pressTimer;


document.getElementById("delete").addEventListener("touchstart", iniciarContagem);
document.getElementById("delete").addEventListener("touchend", pararContagem);
document.getElementById("delete").addEventListener("mousedown", iniciarContagem);
document.getElementById("delete").addEventListener("mouseup", pararContagem);

var block = 0;

function addItem(){
  var text = myTextBox.value
  var iniciative = iniBox.value
  var datalist = document.getElementById('sugestoes-container');

  if (((text && iniciative) !== "") && (block == 0)) {
    var newItem = document.createElement("li")
    var iniValue = document.createElement("input")
    var hpValue = document.createElement("input")
    var option = document.createElement('option');

    iniValue.type = "number"
    hpValue.type = "number"
    hpValue.classList = "healthpoints"
    iniValue.classList = "iniciativePoints"
    hpValue.placeholder = "HP"

    newItem.textContent = text
    newItem.id = iniciative

    iniValue.value = iniciative
    
    myList.appendChild(newItem)
    newItem.appendChild(hpValue)
    newItem.appendChild(iniValue)
    

    myTextBox.value = ""
    iniBox.value = ""
    myTextBox.focus();

    option.value = text
    datalist.appendChild(option);
    salvarParaProcura();
  }
  else{
    button.classList = "shakeElement"
  
    button.addEventListener("animationend", () => {
      button.classList = ""
    });
  }
}
function sortItems() {
  var items = myList.children;
  for (var i = 0; i < items.length; i++) {
    for (var j = i + 1; j < items.length; j++) {
      if (parseInt(items[i].id) < parseInt(items[j].id)) {
        myList.insertBefore(items[j], items[i]);
      }
    }
  }
}

function createEffect() {
  var target = event.target
  var tN = turnNumber.value;
  var dN = diceNumber.value;
  var selectedOption = opcoes.options[opcoes.selectedIndex].text;

  if (tN !== "" && dN !== "") {
    var newSpan = document.createElement("span");
    var newInput = document.createElement("input")
    newSpan.id = tN
    newInput.value = newSpan.id
    newSpan.textContent = selectedOption + " DICE:" + dN + " TN:";
    target.appendChild(newSpan);
    newSpan.appendChild(newInput)

    turnNumber.value = "";
    diceNumber.value = "";
  }
}




button.addEventListener("click", function () {
  addItem();
})
myTextBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
      addItem();
  }
});
iniBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
      addItem();
  }
});

myTextBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
      addItem();
  }
});

//SELECT ITEM FOR EFFECT
selectElement.addEventListener("click", function (){
  if(selectElement.className == "slct"){
    selectElement.classList = ""
    block = 0
  }
  else{
  selectElement.classList = "slct"
  block = 1
  }
})


//NEXT TURN
nextTurn.addEventListener("click", function () {
  var save = myList.firstElementChild

  if(save && (block == 0) && myList.getElementsByTagName("li").length > 1){
  myList.removeChild.firstElementChild
  myList.append(save)
  
  var span = myList.firstElementChild.querySelector("span");
  var tN = span.querySelector("input")
  if (tN) {
      tN.value--
      if(tN.value <= 0){
        myList.firstElementChild.removeChild(span)
      }
      alert("Effect")
  }

  }
  
  else{
    nextTurn.classList = "shakeElement"
    nextTurn.addEventListener("animationend", () => {
      nextTurn.classList = ""
    });
  }
})


//PREVIOUS TURN
previousTurn.addEventListener("click", function () {
  if(block == 1 || myList.getElementsByTagName("li").length <= 1){
    previousTurn.classList = "shakeElement"
    previousTurn.addEventListener("animationend", () => {
      previousTurn.classList = ""
    });
  }
  else{
  myList.insertBefore(myList.lastElementChild, myList.firstElementChild)
  }
})
//AUTOMATIC ORDER
refresh.addEventListener("click", function () {
  if(block == 1 || myList.getElementsByTagName("li").length <= 1){
    refresh.classList = "shakeElement"
    refresh.addEventListener("animationend", () => {
      refresh.classList = ""
    });
  }
  else{
  sortItems()
  }
})

//DELETE
Delete.addEventListener("click", function (){
  if(Delete.classList == "dm"){
    Delete.classList = ""
    block = 0
    
  }
  else{
  Delete.classList = "dm"
  block = 1
  }
})

//DELETE ALL
function iniciarContagem() {
  pressTimer = window.setTimeout(function() {
    exibirCaixaMensagem()
  }, 3000);
}
function pararContagem() {
  window.clearTimeout(pressTimer);
  
}
function exibirCaixaMensagem() {
      var resposta = window.confirm("Are you sure?");

      if (resposta) {
        while(myList.firstChild){
          myList.removeChild(myList.firstChild)
          localStorage.removeItem('minhaLista');
          }
      } else {
      }
    }


myList.addEventListener("click", function() {
  var target = event.target
  if(Delete.classList == "dm"){
    myList.removeChild(target)
  }

  if(selectElement.className == "slct"){
    createEffect()
    selectElement.classList = ""
    block = 0
}
})

myList.addEventListener("mouseover", function(event) {
  var target = event.target;
  if(Delete.classList == "dm"){
    target.classList.add("deleteAnim")
  }
  if(selectElement.className == "slct"){
    target.classList.add("slctAnim")
  }
  
myList.addEventListener("mouseout",function(event){
  event.target.classList.remove("deleteAnim","slctAnim")
})
})

//CHANGE INI VALUE
myList.addEventListener("input", function (event) {
  var target = event.target;
  var listItem = target.closest("li");
  if ((target.classList == "iniciativePoints") && block == 0) {
    
    if (listItem) {
      listItem.id = target.value;
    }
  }
});

//OPEN TAB
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");

  tabButtons.forEach(function (span) {
    span.addEventListener("click", function () {
      const content = this.nextElementSibling;
      if (content.id === "active" && document.querySelector(".tab-button").id === "tabopen") {
        content.id = ""
        setTimeout(function() {
          document.querySelector(".tab-button").id = ""
        }, 200);
        
      } if (content.id != "active" && document.querySelector(".tab-button").id != "tabopen") {
        document.querySelector(".tab-button").id = "tabopen"
        setTimeout(function() {
          content.id = "active"
        }, 100);
      }
    });
  });
});
