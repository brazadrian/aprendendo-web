var qnt;

function carConteudo() {

	var quantidade = document.getElementById("quantidade").value;
	var valor = 35;
	var preco_total = valor * quantidade;

	document.getElementById("preco_total").innerHTML = preco_total;

	qnt = quantidade;
}

function addProduto() {
	document.getElementById("produtos").innerHTML = qnt; /* Retorna undefined quando é 1
 e de quebra, ainda atualiza a página*/
}

function goToCar() {
  window.location.assign("carrinho.html?#")
}

