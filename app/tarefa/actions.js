"use server";

import { redirect } from 'next/navigation';
import db from '../_db/banco';
import { revalidatePath } from 'next/cache';
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



export async function addTarefa(formData) {
    try {
        const titulo = formData.get("titulo");
        const descricao = formData.get("descricao");

        if (!titulo || !descricao) {
            throw new Error("Título e descrição são obrigatórios.");
        }

        await db.tarefas.create({ data: { titulo, descricao } });

      
        return { success: true }; // Retorna um sinal de sucesso
    } catch (error) {
        console.error("Erro ao adicionar tarefa:", error.message);
        return { error: error.message };
    }
}
