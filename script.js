var myTextBox = document.getElementById("textBox")
var iniBox = document.getElementById("initiativeBox")
var button = document.getElementById("button")
var myList = document.getElementById("orderList")
var nextTurn = document.getElementById("nextTurn")



function addItem(){
  var text = myTextBox.value
  var iniciative = iniBox.value

  if ((text && iniciative) !== "") {
    var newItem = document.createElement("li")
    var iniValue = document.createElement("input")

    newItem.textContent = text
    newItem.id = iniciative
    newItem.title = iniciative

    iniValue.value = iniciative
    
    myList.appendChild(newItem)
    newItem.appendChild(iniValue)
    myTextBox.value = ""
    iniBox.value = ""
    myTextBox.focus();
  }
  sortItems()
}
function sortItems() {
  var items = myList.children;
  for (var i = 0; i < items.length; i++) {
    for (var j = i + 1; j < items.length; j++) {
      if (items[i].id < items[j].id) {
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

nextTurn.addEventListener("click", function () {
  var lastElement = myList.lastElementChild
  myList.insertBefore(lastElement, myList.firstElementChild)

})

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