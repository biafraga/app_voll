# Componentes do react-native
<Text></Text> -> Como se fosse o p do HTML, Guarda texto.
<View></View> -> Como se fosse a div do HTML. Guarda bloco.
<Pressable></Pressable> -> Envolve algum elemento a ser pressionado.
StyleSheet -> Cria uma folha de estilo para estilização.


# Comandos do REACT NATIVE
1. npx create-expo-app@3 nomedoprojeto -> Cria um app react native com o nome desejado na versão 3.
2. npm start -> Prepara/roda o servidor para ser executado.
3. npm run reset-project -> Reseta o projeto para uma versão mais limpa.
4. npm i ou npm install -> Instala todas as bibliotecas necessárias do node.

# CASES
snake_case -> nome_do_projeto
cammelCase -> nomeDoProjeto
PascalCase -> NomeDoProjeto
kebab-case -> nome-do-projeto

# CASES EM REACT NATIVE
arquivo -> ``snake_case``, mas pode ser cammelCase.
componente -> ``PascalCase``.
função -> ``cammelCase``.

## Estrutura do projeto vollmed
🗂️app
- 📂components
-- 📕LabeledInput.jsx
- 📂services
- 📂screens
-- 📗LoginScreen.jsx
-- 📘RegisterScreen.jsx

## OBS: 
1. Em react native, as propriedades também são conhecidas como props.`Uma boa prática`.
2. Quando você for criar a estilização através do StyleSheet, a constante deverá estar no padrão cammelCase. `Uma boa prática`.
3. Na customização do styles, será necessário deixar uma virgula após cada seletor e após cada propriedade dentro do seletor. `Uma boa prática`.

## Components primitivos
<SafeAreaView> -> é um componente primitivo que garante que o conteúdo seja exibidio dentro das áreas seguras da tela, evitando sobreposição com elementos do sistema como a barra de status. 
<ScrollView> -> é um componente que permite a rolagem do conteúdo quando ele excede o espaço disponível na tela, garantindo que todos os campos do formulário sejam acessíveis mesmo em dispositivos menores. 
<TouchableOpacity> -> é um componente que cria uma área clicável. 

## Estrutura do projeto
1. Eu vou ter um arquivo chamado `index.jsx`, na raiz. Aquivo obrigatório que irá importar o `App.jsx` que está dentro do src.
2. No arquivo `App.jsx` , arquivo obrigatório que pode ou não vir por padrão. Esse arquivo irá importar o arquivo responsável por guardar o registro fechado das rotas.
3. Eu vou ter uma pasta voltada para a minha navegação. Ela normalmente se chama routes/navigation ou tabs. Dentro dessa pasta eu vou ter um arquivo de registro das telas, nomeação das rotas e estilização das telas. Esse arquivo se chama, normalmente, StackRoutes. 
4. Dentro da pasta routes, além do arquivo `StackRoutes.jsx`. eu vou ter um arquivo chamado index.jsx que irá chamar o `StackRoutes.jsx`. Esse index é o arquivo que será chamamdo no `App.jsx`.
5. Todo componente de reuso deverá estar na pasta [src/app/components]. Para caa componente, deverá ter uma pasta com o nome do componente e dentro dela um arquivo `index.jsx` com a exportação do componente nomeado pela pasta.

## Props primitivas
keyboardType = "email-adress" -> é uma prop do TextInput que otimiza o teclado para entrada de email, exibindo caracteres como "@" e "." de forma mais acessível.

securityTextEntry= {true} -> é uma prop que oculta o texto digitado, ideal para campo de senha. 

## Trabalhando com naveção no React Native
1. Link da documentação: `https://reactnavigation.org/`
2. Instalar o core do react navigation: `npm install @react-navigation/native`
3. Instalar as dependências de ajustes: `npx expo install react-native-screens react-native-safe-area-context`
4. Instalar a dependência para utilizar a forma Stack Native (pilha nativa) no projeto: `npm install @react-navigation/native-stack`
