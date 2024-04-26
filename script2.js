//Caio Gomulski RA:231663882

function editarAluno(botaoEditar) { // Função para editar dados do aluno
  var linhaAluno = botaoEditar.parentNode.parentNode; // Obtém a linha do aluno a partir do botão de edição
  var celulas = linhaAluno.getElementsByTagName("td");// Obtém todas as células (td) da linha do aluno
  var inputsFormulario = document.getElementById('cadastroForm').getElementsByTagName("input"); // Obtém todos os inputs do formulário de cadastro
  for (var i = 0; i < celulas.length - 1; i++) {  // Loop através das células da linha, exceto a última
    inputsFormulario[i].value = celulas[i].innerHTML;  // Define o valor de cada input para o conteúdo das células 
  }
  linhaAluno.parentNode.removeChild(linhaAluno);  // Remove a linha do aluno da tabela
}

function excluirAluno(botaoExcluir)  // Função para excluir aluno
 var linhaAluno = botaoExcluir.parentNode.parentNode; // Obtém a linha do aluno a partir do botão de excluir
  var raAluno = linhaAluno.getElementsByTagName("td")[1].innerHTML;  // Obtém o RA do aluno da segunda célula 
  localStorage.removeItem(raAluno);  // Remove o item do localStorage usando o RA como chave
  linhaAluno.parentNode.removeChild(linhaAluno); // Remove a linha do aluno da tabela
}
</script>
