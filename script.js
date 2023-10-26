var myTextBox = document.getElementById("textBox")
var iniBox = document.getElementById("initiativeBox")
var button = document.getElementById("button")
var myList = document.getElementById("orderList")
var nextTurn = document.getElementById("nextTurn")
var previousTurn = document.getElementById("previousTurn")
var refresh = document.getElementById("refresh")
var Delete = document.getElementById("delete")


function addItem(){
  var text = myTextBox.value
  var iniciative = iniBox.value

  if (((text && iniciative) !== "") && (Delete.className == "")) {
    var newItem = document.createElement("li")
    var iniValue = document.createElement("input")

    newItem.textContent = text
    newItem.id = iniciative

    iniValue.value = iniciative
    
    myList.appendChild(newItem)
    newItem.appendChild(iniValue)
    myTextBox.value = ""
    iniBox.value = ""
    myTextBox.focus();
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

//NEXT TURN
nextTurn.addEventListener("click", function () {
  var save = myList.firstElementChild
  if(save && (Delete.className !== "dm") && myList.getElementsByTagName("li").length > 1){
  myList.removeChild.firstElementChild
  myList.append(save)
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
  if(Delete.className == "dm" || myList.getElementsByTagName("li").length <= 1){
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
  if(Delete.className == "dm" || myList.getElementsByTagName("li").length <= 1){
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
  }
  else{
  Delete.classList = "dm"
  }
})
myList.addEventListener("click", function() {
  var target = event.target
  if(Delete.classList == "dm"){
    myList.removeChild(target)
  }
})
myList.addEventListener("mouseover", function() {
  var target = event.target
  if(Delete.classList == "dm"){
    target.classList = "dm"
  }
  myList.addEventListener("mouseout", function() {
    target.classList = ""
  })
  
})

//CHANGE INPUT VALUE
myList.addEventListener("input", function (event) {
  var target = event.target;
  if (target.tagName === "INPUT") {
    var listItem = target.closest("li");
    if (listItem) {
      listItem.id = target.value;
      listItem.title = target.value;
    }
  }
});