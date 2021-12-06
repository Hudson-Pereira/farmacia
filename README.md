Projeto de um microserviço de uma farmácia matriz que pode conter até três filiais e cadastro de produtos.

Projeto feito em NestJS, com Prisma e class-validator/class-transform.
Foram feitos testes com a plataforma de teste Thunder Client durante a criação.
Projeto linkado localmente ao banco de dados Postrgres, conforme configuracao do .env abaixo:

DATABASE_URL="postgresql://postgres:root@localhost:5432/farmacia?schema=farmacia"

#####################################################################################

Nesse projeto será possível cadastrar uma matriz apenas, podendo cadastrar 3 filias e quantos produtos quiser.

A rota de base utilizada foi http://localhost:3000.

Na rota base, irá exibir a mensagem: "Bem vindo a API, utilize as rotas /matriz, /filial e /produto... Obrigado".

ROTA MATRIZ

Pela rota POST /matriz, deverão ser inseridos os seguintes dados seguindo os respectivos tipos:
logo: string;
nome: string;
cnpj: number;
end: string;
funcionamento: string;
responsavel: string;
telefone: number;
Todos cotém validação de tipo e se há dado inserido, apenas no caso do funcionamento não é obrigatório inserir dados. O id da matriz será inserido automaticamente. Ao cadastrar um dado, ele retornará com as informações cadastradas.

Com a rota GET /matriz será possível listar os dados da matriz cadastrada. Quando não tiver dados, retornará apenas [].

Com a rota PATCH /matriz/<id> é possível alterar qualquer dado individual ou coletivo, podendo escolher quais e quantos dados serão alterados.

Com a rota GET /matriz/<id> será possível visulizar os dados da matriz cadastrada. Quando

Com a rota DELETE /matriz/<id> será possível excluir os dados da matriz, liberando para que outra possa ser cadastrada.

No banco de dados será possível vizualizar as informações cadastradas e, no caso da matriz, qual ID de suas filiais.

ROTA FILIAL

Pela rota POST /filial, deverão ser inseridos os seguintes dados seguindo os respectivos tipos:
logo: string;
nome: string;
cnpj: number;
end: string;
funcionamento: string;
responsavel: string;
telefone: number;
matrizId: number;
Todos cotém validação de tipo e se há dado inserido, apenas no caso do funcionamento não é obrigatório inserir dados. Em matrizID será necessário inserir o ID da matriz cadastrada.O id da filial será inserido automaticamente. Ao cadastrar um dado, ele retornará com as informações cadastradas. Quando já houverem 3 filiais cadastradas, a API não aceitará mais cadastro, retornando apenas status 200, mas não salvando os dados.

Com a rota GET /filial será possível listar os dados das filiais cadastradas. Quando não tiver dados, retornará apenas [].

Com a rota PATCH /filial/<id> é possível alterar qualquer dado individual ou coletivo, podendo escolher quais e quantos dados serão alterados.

Com a rota GET /filial/<id> será possível visulizar os dados da filial selecionada. Quando

Com a rota DELETE /filial/<id> será possível excluir os dados da filial selecioanda, liberando para que outra possa ser cadastrada.

ROTA PRODUTOS

Pela rota POST /produto, deverão ser inseridos os seguintes dados seguindo os respectivos tipos:
thumbnail: string;
nome: string;
preco: number;
ingredientes: string;
disponibilidade: boolean;
volume: number;
fabricante: string;
Todos cotém validação de tipo e se há dado inserido. O id doproduto será inserido automaticamente. Ao cadastrar um dado, ele retornará com as informações cadastradas.

Com a rota GET /produto será possível listar os dados dos produtos cadastrados. Quando não tiver dados, retornará apenas [].

Com a rota PATCH /produto/<id> é possível alterar qualquer dado individual ou coletivo, podendo escolher quais e quantos dados serão alterados.

Com a rota GET /produto/<id> será possível visulizar os dados da produto selecionada. Quando

Com a rota DELETE /produto/<id> será possível excluir os dados do produto selecioando.

Essa API foi feita por:
Hudson Oliveira Pereira, estudante de programação em JS pela Blue Edtech, no módulo 4.
