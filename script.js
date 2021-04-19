var ListaDeTimes = []

var Azul = {
  nome: 'Azul',
  vitorias: 2,
  empates: 3,
  derrotas: 1,
  pontos: 0,
	partidas: 0
}

var Vermelho = {
  nome: 'vermelho',
  vitorias: 2,
  empates: 3,
  derrotas: 1,
  pontos: 0,
	partidas: 0
}


ListaDeTimes.push(Azul, Vermelho)

function LimparTabela() {
  ListaDeTimes = []
  ExibirTimeNaTela(ListaDeTimes)
}


function AssingElementosHtml() {
	formularioTimeNovo = document.getElementById('formularioTimeNovo')
	nomeTimeNovo = document.getElementById('nomeTimeNovo')
	vitoriasTimeNovo = document.getElementById('vitoriasTimeNovo')
	empatesTimeNovo = document.getElementById('empatesTimeNovo')
	derrotasTimeNovo = document.getElementById('derrotasTimeNovo')
	botaoAdicionarTimeNovo = document.getElementById('AdicionarTimeNovo')
	botaoNovoTime = document.getElementById('NovoTime')
}
AssingElementosHtml()

function TelaInicial() {
	formularioTimeNovo.style.visibility = 'hidden'
	nomeTimeNovo.value = null
	vitoriasTimeNovo.value = null
	empatesTimeNovo.value = null
	derrotasTimeNovo.value = null
	botaoNovoTime.style.visibility = 'visible'
}
TelaInicial()

function NovoTime() {
	formularioTimeNovo.style.visibility = 'visible'
	botaoNovoTime.style.visibility = 'hidden'
}

function AdicionarTime() {
	var NovoTime = {
		nome: nomeTimeNovo.value,
	 	vitorias: parseInt(vitoriasTimeNovo.value),
	 	empates: parseInt(empatesTimeNovo.value),
	 	derrotas: parseInt(derrotasTimeNovo.value),
		pontos: 0,
		partidas: 0
	}
	if(NovoTime != ''){
    ListaDeTimes.push(NovoTime)
	ExibirTimeNaTela(ListaDeTimes)
	TelaInicial()
  } else {
    alert("Por favor insira pelo menos o 0")
  }
}

function CalculaPontos(Time) {
  var pontos = (Time.vitorias * 3) + Time.empates
  return pontos }

function CalculaPartidas(Time) {
  var partidas = Time.vitorias + Time.empates + Time.derrotas
  return partidas }

function ExibirTimeNaTela(ListaDeTimes) {
	var html = ''
	for (i in ListaDeTimes) {
		var Time = ListaDeTimes[i]
		Time.pontos = CalculaPontos(Time)
		Time.partidas = CalculaPartidas(Time)
		
		html += '<tr><td>' + Time.nome + '</td>'
		html += '<td>' + Time.vitorias + '</td>'
		html += '<td>' + Time.empates + '</td>'
		html += '<td>' + Time.derrotas + '</td>'
		html += '<td>' + Time.pontos + '</td>'
		html += '<td>' + Time.partidas + '</td>'
		html += '<td><button onClick="AdicionarVitoria(' + i + ')">Vitória</button></td>'
			if (Time == ListaDeTimes[0]) {
				html += '<td rowspan=' + ListaDeTimes.length + ' scope="rowgroup"><button onClick="AdicionarEmpate(' + i + ')">Empate</button></td></tr>' }
	}
	var TabelaDosTimes = document.getElementById('TabelaDosTimes')
	TabelaDosTimes.innerHTML = html
}
ExibirTimeNaTela(ListaDeTimes)

function AdicionarVitoria(i) {
	var TimeVencedor = ListaDeTimes[i]
	TimeVencedor.vitorias++
	
	var ListaPerdedores = ListaDeTimes.filter(function(value, index, arr){ 
      return value != TimeVencedor})
	
	for (i in ListaPerdedores) {
		var TimePerdedor = ListaPerdedores[i]
		TimePerdedor.derrotas++
	}
	ExibirTimeNaTela(ListaDeTimes)
}

function AdicionarEmpate(i) {
	for (index in ListaDeTimes) {
		var Time = ListaDeTimes[index]
		Time.empates++
		ExibirTimeNaTela(ListaDeTimes)
	}
}

function AdicionarDerrota(i) {
	var TimePerdedor = ListaDeTimes[i]
	TimePerdedor.derrotas++
	exibirTimeNaTela(ListaDeTimes)
}
