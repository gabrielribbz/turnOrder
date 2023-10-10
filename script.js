var myTextBox = document.getElementById("textBox")
var iniBox = document.getElementById("initiativeBox")
var button = document.getElementById("button")
var myList = document.getElementById("orderList")
var nextTurn = document.getElementById("nextTurn")

button.addEventListener("click", function () {
  var text = myTextBox.value
  var iniciative = iniBox.value

  if ((text && iniciative) !== "") {
    var newItem = document.createElement("li")
    newItem.textContent = text
    newItem.id = iniciative
    newItem.title = iniciative
    myList.appendChild(newItem)
    myTextBox.value = ""
    iniBox.value = ""
  }
  var itens = myList.children
  for (var i = 0; i < itens.length; i++) {
    for (var j = i + 1; j < itens.length; j++) {
      if (parseInt(itens[i].id) < parseInt(itens[j].id)) {
        var save = itens[i]
        myList.removeChild(itens[i])
        myList.appendChild(save)
        i = 0
        j = 1
      }
    }
  }
})

nextTurn.addEventListener("click", function () {
  var lastElement = myList.lastElementChild
  myList.insertBefore(lastElement, myList.firstElementChild)

})