// Criando a interface para utilizá-la depois

interface Notificacao {
    id: number,
    titulo: string,
    tipo: "alerta" | "aviso" | "informacao";
    lida: boolean
}

// Crie um array com pelo menos 3 notificações diferentes seguindo a interface.

const inbox: Notificacao[] = [
    {
        id: 1,
        titulo: "Seu boleto vence hoje.",
        tipo: "alerta",
        lida: true
    },
    {
        id: 2,
        titulo: "Nova publicação.",
        tipo: "informacao",
        lida: false
    },
    {
        id: 3,
        titulo: "Você recebeu um pix de R$500.000,00.",
        tipo: "informacao",
        lida: false
    }

]

// Utilizando apenas return
function statusLeitura(notificacao: Notificacao): string {
    if (notificacao.lida === true) return "lida"
    return "não lida"
}

// Utilizando if/else e return

function statusLeitura2(notificacao: Notificacao): string {
    if (notificacao.lida === true) {
        return "lida"
    } else {
        return "nao lida"
    }
}

// Utilizando o if ternário
function statusLeitura3(notificacao: Notificacao): string {
    return notificacao.lida ? "lida" : "nao lida"
}
