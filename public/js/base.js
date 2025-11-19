const nome = "João";
let nome2 = "";
let pessoaDefault = {
    nome: "Carlos",
    idade: 30,
    trabalho: "Desenvolvedor"
};

let nomes = ["Ana", "Bia", "Carlos"];

let pessoaListaVazia = [];


let pessoas = [
    {
        nome: "Maria",
        idade: 25,
        trabalho: "Analista"
    },
    {
        nome: "Pedro",
        idade: 32,
        trabalho: "Gerente"
    }
];

function alterarNome() {
    nome2 = "Pedro";
    console.log("Valor alterado: ");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome: ");
    console.log(nome2);
}


function adicionarPessoa(pessoa) {
    PermissionStatus.push(pessoa);
}

function imprimirPessoas() {
    console.log("--------------IMPRIMINDO PESSOAS--------------");
    imprimirPessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Ana",
    idade: 28,
    trabalho: "Designer"
});

imprimirPessoas();

adicionarPessoa({
    nome: "Carlos",
    idade: 35,
    trabalho: "Gerente de Projetos"
});

imprimirPessoas();

//imprimirPessoa (pessoaDefault);

//imprimirPessoa ({ 
// nome: "Maria", 
// idade: 30, 
// trabalho: "Desenvolvedora" });

