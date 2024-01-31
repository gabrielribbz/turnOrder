function salvarParaProcura() {
  var sugestoes = JSON.parse(localStorage.getItem('textHistory')) || [];

  
  for (var i = 0; i < myList.children.length; i++) {
    if(!sugestoes.includes(myList.children[i].textContent)){
      sugestoes.push(myList.children[i].textContent);
    }
  }
  localStorage.setItem('textHistory', JSON.stringify(sugestoes));
}

function obterSugestoesSalvas() {
  
  if (sugestoesSalvas) {
    return JSON.parse(sugestoesSalvas);
  } else {
    return []; 
  }
}

function populateDatalist() {
  // Obtemos os itens do localStorage
  const items = JSON.parse(localStorage.getItem('textHistory')) || [];

  // Selecionamos o datalist
  var datalist = document.getElementById('sugestoes-container');


  // Adiciona um option para cada elemento no localStorage
  items.forEach(item => {
    const option = document.createElement('option');
    option.value = item;    
    datalist.appendChild(option);
  });
}
;