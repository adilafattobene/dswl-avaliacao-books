# AVALIAÇÃO - DISCIPLINA DSWL - IFSP Campinas

## Descrição:

Algumas editoras de livros no Brasil vem passando por um grande crise. Nesse contexto o editor da Companhia das Letras Luiz Schwarcz divulgou um carta fazendo um apelo para que as pessoas presenteiem as outras com livros. Um trecho da carta pode ser visto abaixo:

“Presentear com livros hoje representa não só a valorização de um instrumento fundamental da sociedade para lutar por um mundo mais justo como a sobrevivência de um pequeno editor ou o emprego de um bom funcionário em uma editora de porte maior; representa uma grande ajuda à continuidade de muitas livrarias e um pequeno ato de amor a quem tanto nos deu, desde cedo: o livro.”

Crie um front end utilizando React para cadastrar livros em um banco de dados. Você deve simular um banco de dados com um vetor de objetos livros como descrito abaixo.

1.  (1,0) Crie a aplicação utilizando o React. Na página inicial crie os links para as rotas descritas no item 3.
2.  (3,0) Utilizando React Context simule um conjunto de dados com o seguintes objetos.

    ```javascript
    {
        id: 0,
        name: "A liberdade é uma luta constante",
        author: "Angela Davis",
        pages: "144" },
    {
        id: 1,
        name: "Multidão: guerra e democracia na era do império",
        author: "Antonio Negri e Michael Hardt",
        pages: "540" },
    {
        id: 2,
        name: "A liberdade é uma luta constante",
        author: "Angela Davis",
        pages: "144"
    }
    ```

3.  (4,0) Crie as rotas e views para a manutenção dos livros.

    (a) Na rota /incluir crie um formulário que colete os seguintes dados:

        i. nome
        ii. autor
        iii. numpaginas
        iv. timestamp

    (b) Na rota /alterar exiba um campo para o usuário digitar o id do livro a ser alterado e permita a alteração de todos os dados menos o id.

    (c) Na rota /deletar exiba um campo para o usuário digitar o id do livro a ser removido.

    (d) Na rota /consultar exiba todos os livros.

4.  (2,0) Validações:

    (a) nome do livro é obrigatório e deve conter no mínimo 5 e no máximo 50 caracteres.

    (b) Autor do livro é obrigatório e deve conter no mínimo 3 e no máximo 100 caracteres.

### ATENÇÃO !!!

O sistema deve funcionar com o comando npm start.
