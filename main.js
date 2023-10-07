function adicionarContato() {
   
    var nome = document.querySelector('input[type="text"]').value;
    var telefone = document.querySelector('input[type="tel"]').value;

    
    if (nome !== '' && telefone !== '') {
        // Selecione a tabela de contatos
        var tabela = document.querySelector('table');

       
        var adicionarContato = document.createElement('td');

        
        var celulaNome = document.createElement('th');
        var celulaTelefone = document.createElement('th');

        
        celulaNome.textContent = nome;
        celulaTelefone.textContent = telefone;

        
        novaLinha.appendChild(celulaNome);
        novaLinha.appendChild(celulaTelefone);

        

        
    }
}


document.querySelector('#form-agenda').addEventListener('submit', function (e) {
    e.preventDefault(); 
    adicionarContato(); 
});