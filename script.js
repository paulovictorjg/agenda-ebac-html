document
  .getElementById('formContato')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const listaContatos = document.getElementById('listaContatos');

    // Criar nova linha na tabela
    const novaLinha = document.createElement('tr');

    const colunaNome = document.createElement('td');
    colunaNome.textContent = nome;
    novaLinha.appendChild(colunaNome);

    const colunaTelefone = document.createElement('td');
    colunaTelefone.textContent = telefone;
    novaLinha.appendChild(colunaTelefone);

    // Adicionar linha na tabela
    listaContatos.appendChild(novaLinha);

    // Limpar campos do formulário
    document.getElementById('formContato').reset();
  });
