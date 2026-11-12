<p align="center">
  <img src="img/icone.png" alt="Logo do Web na Prática" width="180">
</p>

# Web na Prática

Projeto da disciplina **DFEW.08 – Desenvolvimento Front-End para Web** (Universidade Positivo).

Site educativo com dez páginas sobre HTML, CSS, JavaScript e Bootstrap, com exemplos interativos.

## Autores

- **Paulo Geandre Pinto** – desenvolvimento do site e do software
- **Rennan Jackowski** – responsável pelo GitHub e pelos ajustes e revisões do projeto

Professor: Fabricio Olivo

## Como abrir

Baixe o repositório e abra o arquivo `index.html` no navegador. O conteúdo local funciona sem internet e sem servidor. Os links externos precisam de conexão. Descompacte o ZIP inteiro antes de abrir o site.

## Páginas

| Página | Arquivo |
| --- | --- |
| Início | `index.html` |
| Sobre | `sobre.html` |
| HTML | `html.html` |
| CSS | `css.html` |
| Flexbox | `flexbox.html` |
| Galeria | `galeria.html` |
| Mídias | `multimidia.html` |
| Tabelas | `tabelas.html` |
| Contato | `formulario.html` |
| JavaScript | `javascript.html` |

## Pastas

- `css/` – estilos do site e Bootstrap
- `js/` – JavaScript do site e Bootstrap
- `img/`, `video/`, `audio/` – imagens e mídias
- `doc/` – documentação em Word

## Tecnologias

HTML5, CSS3 (Grid e Flexbox), JavaScript puro, Bootstrap 5.3 e localStorage.

## Navegação e dados

O cabeçalho tem o mesmo visual nas dez páginas. O menu utiliza classes do Bootstrap em oito páginas; `sobre.html` e `html.html` usam apenas HTML, CSS e JavaScript próprios, sem carregar Bootstrap. Em telas menores que 1200 px, o botão Menu abre e fecha os links com JavaScript próprio.

O formulário é uma demonstração: as mensagens ficam no `localStorage` do navegador e não são enviadas a um servidor. A página JavaScript também salva o assunto favorito. A persistência depende das permissões e do modo de navegação; limpar os dados do navegador remove essas informações.

## Documentação

A documentação acadêmica em Word está na pasta `doc/`.
