"use server";

import db from '../_db/banco';
//Pegando todas as Tarefas no Banco de Dados 
export async function getTarefas() {
    try {
        const res = await db.tarefas.findMany();
        const dados = res;
        console.log("Lado Servidor diz:")
        console.log("Pegando as Tarefas", dados);
        return { status: 200, dados, message: "dados recuperados com sucesso" };
    } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
        return [];
    }
}
//Adicionando Tarefa ao Banco de Dados 
export async function addTarefa(FormData) {
    try {
        //Dados Recebidos do Front End
        console.log(FormData);
        let titulo = "Lavar";
        let descricao = "Lavar o CarroS"
        const tarefas = await db.tarefas.create(
            {
                data: {
                    titulo,
                    descricao
                }

            }
        );
        console.log("Lado Servidor diz:")
        console.log("Pegando as Tarefas", tarefas);
        return tarefas;
    } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
        return [];
    }
}
