# Sistema para gestão de tarefas.

### Para implementação deste projeto você deve ter instalado em seu computador o NODEJS e algum gerenciador de pacotes à sua escolha tal como npm ou yarn.
### Você deverá ter uma base de dados postgres para poder salvar os dadosBasta baixar o projeto rodar o comando ```yarn``` ou ```npm install``` após a instalação dos pacotes para rodar em ambiente de desenvolvimento, basta digitar o comando ```yarn dev``` ou ```npm run dev```. 
### Não se esqueça de verificar o arquivo env.example e colocar as chaves necessárias como a conexão com a sua base de dados, porta e etc... Caso queira subir um container para a aplicação, após baixar a aplicação pode digitar o comando ```docker build -t seuUsuarioDocker/nomeQueDesejarDoContainer . ``` para criar a imagem.
### Para rodar o container basta rodar o comando ```docker run -p porta:porta idOuNomeDaImagem```. Não se esqueça de verificar a porta exposta no arquivo .dockerfile.
