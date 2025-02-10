import React from "react";
import { getTarefas } from "./actions";

export default async function Tarefa() {
  const res = await getTarefas(); // Chama diretamente o Server Action
  //JSON com todo retorno da Server Action
  console.log(res);
  return (
    <div className="bg-[#121212] p-4">
      <h1 className="text-2xl">Minhas Tarefas</h1>
    </div>
  );
}
