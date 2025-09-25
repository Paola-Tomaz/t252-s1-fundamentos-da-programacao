// Tipos / Interfaces
interface Estudante {
    nome: string;
    cursoID: number;
    notas: [number, number, number];
    mensagem: string;
}

type Curso = { id: number, nome: string };

// Lista de cursos (array de objetos, com id)
const listaCursos: Curso[] = [
    { id: 1, nome: "Ciência da Computação" },
    { id: 2, nome: "Biologia" },
    { id: 3, nome: "Psicologia" }
];

// Três estudantes (objetos literais)
const estudantes: Estudante[] = [
    { nome: "Maria", cursoID: 3, notas: [8, 6, 5], mensagem: "Olá, sou a Maria e curso Biologia." },
    { nome: "João", cursoID: 2, notas: [9, 8, 7], mensagem: "Olá, sou o João e curso Psicologia." },
    { nome: "Paola", cursoID: 1, notas: [10, 9, 10], mensagem: "Olá, sou a Maria e curso Ciência da Computação." },
];

// 1) função declarada que calcula a média sem usar loop
function mediaEstudante(estudante: Estudante): number {
    return (estudante.notas[0] + estudante.notas[1] + estudante.notas[2]) / 3
}

// 2) função anônima atribuída a variável (retorna a mensagem baseada na méia)
const estiloAprendizado = function (estudante: Estudante): string {
    const media = mediaEstudante(estudante);
    if (media >= 7) return "Exploradora confiante.\n";
    if (media >= 5) return "Brilha como aprendiz.\n";
    return "Desbravando a programação.\n";
};

// 4) switch/case que retorna o nome do curso a partir do cursoId
function nomeCursoPorID(cursoID: number): string {
    switch (cursoID) {
        case 1:
            return "Ciência da Computação";
        case 2:
            return "Psicologia";
        case 3:
            return "Biologia";
        default:
            return "Curso desconhecido";
    }
}

// 5) exibição final para cada estudante 
estudantes.forEach((estudante) => {
    const media = mediaEstudante(estudante);
    const mensagem = estiloAprendizado(estudante);
    estudante.mensagem = mensagem; // atualiza a propriedade da mensagem

    console.log(`Nome: ${estudante.nome}`);
    console.log(`Curso: ${nomeCursoPorID(estudante.cursoID)}`);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log(`Mensagem: ${estudante.mensagem}`);
})
