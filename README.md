# Desafio 04. Introdução ao React

Aplicação do zero utilizando **Webpack, Babel, Webpack Dev Server e ReactJS**.

Criação de uma **interface** semelhante com a do **Facebook** utilizando React JS.

## Tela da aplicação:

![Facebook](assets/facebook.png)

## Configuração do projeto

- **Criar o arquivo package.json:**
```js
yarn init -y
```

- **Dependências de desenvolvimento:**
```js
yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli -D
```

- **React e React-dom:**
```js
yarn add react react-dom
```

- **Babel loader:**
```js
yarn add babel-loader -D
```

- **DevServer:**
```js
yarn add webpack-dev-server -D
```

- **Adiciona os 'loaders' de css**

```js
 yarn add style-loader css-loader -D
```

*style-loader:* importa o css do componente para o index.js da raiz.

*css-loader:* possibilita importações dentro do css [ @import url('out.css'); background: url('img/img.jpg') ]

- **Adicionando imagens (file loader)**

```js
 yarn add file-loader -D
```

- **plugin-proposal-class-properties**

Possubilita do uso de *state* sem a necessidade de criar um *constructor* em classes.

```js
yarn add @babel/plugin-proposal-class-properties -D
```
