# Tutorial gatsby
Pequeno nivelamento de gatsby

## Motivacao
Entnder as diferencas entre tratamento de gatsby para renderizar as paginas e criar componentes


## Feature
- Gatsby e integrado com React Router Dom, isto traz algumas facilidades
- Tudo construído no arquivo pages são considerados rotas, por exemplo se construir apenas um arquivo contact na raiz do pages sera uma rota /contact
- Index e a referência de rota home
- Possível construir pastas e dentro arquivos no pages, mas importante ressaltar que caso não tenha index na pasta sera considerado uma rota inexistente
- Abaixo um exemplo




```text

|-pages
|
|-company __
|           |
|           |-index ==> aqui sera a rota url/company  
|           |-contact ==> aqui sera a rota url/company/contact
| 
|-contact ==> url/contact
|-index  ==> rota principal 
 
```

## 
- Possível encontrar boilerplates prontos no gatbsy, para iniciar precisa instalar o [cli  gatsby](https://www.gatsbyjs.com/docs/tutorial/part-0/)
- Apos o cli estiver instalado apenas gatsby new   [nome do projeto]  [template](https://www.gatsbyjs.com/starters/)
- Este tutorial seguiu o modelo [hello world](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-hello-world/)
- Este modelo e bem simples ideal para criar algo do zero
- Para trabalhar com  [styled component](https://www.gatsbyjs.com/plugins/gatsby-plugin-styled-components/?=styled) precisa instalar plugins
- Tudo que e possível no React e possível no gatbsy
