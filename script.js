

function adicionaDadosAluno() {
  var nomeAluno = document.getElementById('input_nome').value;
  var raAluno = document.getElementById('input_ra').value;
  var emailAluno = document.getElementById('input_email').value;
  var notaProva1 = parseFloat(document.getElementById('input_prova_1').value);
  var notaAEP1 = parseFloat(document.getElementById('input_aep_1').value);
  var notaProvaIntegrada1 = parseFloat(document.getElementById('input_prova_integrada_1').value);
  var notaProva2 = parseFloat(document.getElementById('input_prova_2').value);
  var notaAEP2 = parseFloat(document.getElementById('input_aep_2').value);
  var notaProvaIntegrada2 = parseFloat(document.getElementById('input_prova_integrada_2').value);

  // Validando as notas
  if (notaProva1 < 0 || notaProva1 > 10 || notaAEP1 < 0 || notaAEP1 > 10 || notaProvaIntegrada1 < 0 || notaProvaIntegrada1 > 10 ||
      notaProva2 < 0 || notaProva2 > 10 || notaAEP2 < 0 || notaAEP2 > 10 || notaProvaIntegrada2 < 0 || notaProvaIntegrada2 > 10) {
    alert("As notas devem estar entre 0 e 10.");
    return;
  }

  // Calculando médias
  var mediaBimestre1 = Math.min(((notaProva1 * 0.8) + (notaAEP1 * 0.1) + (notaProvaIntegrada1 * 0.1)), 10);
  var mediaBimestre2 = Math.min(((notaProva2 * 0.8) + (notaAEP2 * 0.1) + (notaProvaIntegrada2 * 0.1)), 10);
  var mediaFinal = ((mediaBimestre1 + mediaBimestre2) / 2).toFixed(2);

  // Determinando status
  var statusAluno;
  if (mediaFinal >= 6) {
    statusAluno = "Aprovado";
  } else if (mediaFinal >= 3) {
    statusAluno = "Recuperação";
  } else {
    statusAluno = "Reprovado";
  }

  // Criando a linha da tabela
  var novaLinha = "<tr><td>" + nomeAluno + "</td><td>" + raAluno + "</td><td>" + emailAluno + "</td><td>" + notaProva1 + "</td><td>" +
               notaAEP1 + "</td><td>" + notaProvaIntegrada1 + "</td><td>" + mediaBimestre1 + "</td><td>" + notaProva2 + "</td><td>" +
               notaAEP2 + "</td><td>" + notaProvaIntegrada2 + "</td><td>" + mediaBimestre2 + "</td><td>" + mediaFinal + "</td><td>" +
               statusAluno + "</td><td><button onclick='editarAluno(this)'>Editar</button><button onclick='excluirAluno(this)'>Excluir</button></td></tr>";

  // Adicionando a linha à tabela
  document.querySelector("#alunosTable tbody").innerHTML += novaLinha;

  // Limpando os campos do formulário
  document.getElementById('cadastroForm').reset();

  // Salvando dados no localStorage
  var dadosAluno = {
    nome: nomeAluno,
    ra: raAluno,
    email: emailAluno,
    prova1: notaProva1,
    aep1: notaAEP1,
    provaIntegrada1: notaProvaIntegrada1,
    prova2: notaProva2,
    aep2: notaAEP2,
    provaIntegrada2: notaProvaIntegrada2
  };
  localStorage.setItem(raAluno, JSON.stringify(dadosAluno));
}
