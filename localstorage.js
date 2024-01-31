
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
        
        salvarListaNoLocalStorage();
    }
});

window.onload = function() {
    var listaSalva = localStorage.getItem('minhaLista');
    if (listaSalva) {
        var data = JSON.parse(listaSalva);
        for (var i = 0; i < data.itens.length; i++) {
            addSavedItem(data.itens[i], data.iniValues[i], data.hpValues[i]);
        }
    }
    populateDatalist()
    

};

function addSavedItem(item, iniValue, hpValue) {
    var newItem = document.createElement("li");
    var hpInput = document.createElement("input");
    var iniInput = document.createElement("input");

    newItem.textContent = item;
    newItem.id = iniValue

    hpInput.value = hpValue;
    hpInput.classList = "healthpoints";

    iniValue.type = "number"
    hpInput.type = "number"
    hpInput.placeholder = "HP"

    hpInput.value = hpValue;

    iniInput.value = iniValue;
    iniInput.classList = "iniciativePoints"
    myList.appendChild(newItem);
    newItem.appendChild(hpInput);
    newItem.appendChild(iniInput);
}

function salvarListaNoLocalStorage() {
    var itens = [];
    var iniValues = [];
    var hpValues = [];

    for (var i = 0; i < myList.children.length; i++) {
        itens.push(myList.children[i].textContent);
        iniValues.push(myList.children[i].id);
        hpValues.push(myList.children[i].getElementsByClassName("healthpoints")[0].value);
       
    }

    localStorage.setItem('minhaLista', JSON.stringify({ itens, iniValues, hpValues }));
}

