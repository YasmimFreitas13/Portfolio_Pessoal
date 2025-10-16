document.addEventListener('DOMContentLoaded', () => {
  const filtroBotoes = document.querySelectorAll('.filtro_btn');
  const projetos = document.querySelectorAll('.card_projeto');

  filtroBotoes.forEach(botao => {
    botao.addEventListener('click', () => {
      // Remove a classe 'active' de todos os botões
      filtroBotoes.forEach(btn => btn.classList.remove('active'));

      // Adiciona a classe 'active' ao botão clicado
      botao.classList.add('active');

      // Pega o valor do atributo data-filter
      const filtro = botao.dataset.filter;

      // Itera sobre todos os projetos
      projetos.forEach(projeto => {
        // Se o projeto tiver a classe do filtro, ele é exibido
        // Caso contrário, ele é ocultado
        if (projeto.classList.contains(filtro) || filtro === 'todos') {
          projeto.classList.remove('hidden');
        } else {
          projeto.classList.add('hidden');
        }
      });
    });
  });
});
    




 
