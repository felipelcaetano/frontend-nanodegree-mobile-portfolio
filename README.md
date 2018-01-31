## Website Performance Optimization portfolio project

### Execução do Projeto
1. Para executar o projeto, primeiro baixe o código que está no repositório [frontend-nanodegree-mobile-portfolio](https://github.com/felipelcaetano/frontend-nanodegree-mobile-portfolio) do GitHub, ou faça um fork do projeto e clone-o em seu computador, como achar melhor.
2. Abra o arquivo index.html, contido na pasta raíz do projeto, em seu navegador de preferência.
3. A página inicial do projeto, possui outros 4 links para as outras páginas existentes. Fique à vontade para navegar nelas.

### Otimizações feitas

#### index.html

1. Inserida a fonte Open Sans no arquivo .css para toda a página ao invés do carregamento via link junto ao *Google*. 
2. Criado arquivo css separado para tratar os estilos específicos para mobile com telas até 480px de largura.
3. Criado script init.js para que as imagens oriundas de sites externos sejam carregadas apenas apos o carregamento inicial da página.
4. Colocado como inline CSS: 
    a. Classe content {padding: 1em 1em;}
    b. footer {padding: 0 0.5em; border-top: 1px solid #ccc;}
    c. footer span {float: right; font-style: italic;}
    d. header{padding: 0 0.5em; color: #C90B0B;}
    e. header img {border-radius: 40px; float: left;}
    f. header p {font-size:1.5em; font-weight: bold; padding-left: 4em;}
    g. header p span {font-size: 0.8em; font-weight: normal;}
    h. Classe hero {padding: 2em; background-color: #f8f8f8; font-size:1.2em;               border-bottom: 1px solid #ccc; border-top: 1px solid #ccc;}
    i. ul, ol {margin: 1em 0; padding: 0 0 0 20px;}
    j. body {margin: 0; font-size: 14px; line-height: 1.61; font-weight: 400;
        background: #fff;}
    k. html {font-size: 100%; overflow-y: scroll; 
        -webkit-tap-highlight-color: rgba(0,0,0,0);-ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: none;}

#### views/js/main.js

1.  Removida a variável var randomPizzas dos dois for loops nas linhas abaixo.
2.  Removida a variável var pizzasDiv dos dois for loops nas linhas abaixo e também foi alterado o querySelectorAll por getElementById.
3.  Alterada em var items, querySelectorAll por getElementsByClassName.
4.  Reduzido o número de pizzas geradas com a variável s de 250 para 200.
5.  Minificado manualmente os arquivos .js através do site [JavaScript Minifier](https://javascript-minifier.com/).
6.  Caso você queira, é possível implementar a ferramenta [Gulp](https://gulpjs.com/) para automatizar o processo de minificação dos arquivos.

#### pizza.html
1. Minificado manualmente cada arquivo .css e .js através do site [JavaScript Minifier](https://javascript-minifier.com/) para os arquivos .js e [CSSMinifier](https://cssminifier.com/) para os arquivos.css.
2. Todas as imagens foram comprimidas através do site [Optimizilla](http://optimizilla.com/).
3.  Caso você queira, é possível implementar a ferramenta [Gulp](https://gulpjs.com/) para automatizar o processo de minificação dos arquivos.