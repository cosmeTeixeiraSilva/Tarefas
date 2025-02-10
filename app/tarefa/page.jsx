import React from "react";
import { getTarefas } from "./actions";
import Link from "next/link";

export default async function Tarefa() {
  const res = await getTarefas(); // Busca as tarefas do banco
  const tarefas = res.dados
  return (
    <div className="bg-[#121212] p-4 text-white gap-y-4">
      <div className="mb-4">
        <Link href={"/tarefa/create"} className="bg-blue-500 p-2 rounded">Nova Tarefa</Link>
      </div>

      <div className="bg-slate-200 p-2 rounded text-black w-[80vw]">

        {tarefas.length > 0 ? (
          <ul>
            {tarefas.map((tarefa) => (
              <li key={tarefa.id} className="border-b p-2">
                <strong>{tarefa.titulo}</strong>: {tarefa.descricao}
              </li>
            ))}
          </ul>
        ) : (
          <p>Não há tarefas cadastradas.</p>
        )}

      </div>
    </div>
  );
}
