import React from "react";
import { addTarefa } from "../actions";
export default function AddTarefa() {
  return (
    <div className="p-4 flex mx-auto flex-col w-full items-center">
      <h1 className="text-2xl text-start w-1/2 text-orange-400 font-bold bg-white p-2 rounded">
        Criando Tarefa:
      </h1>
      <form
        action={addTarefa}
        className="flex flex-col gap-y-4  rounded border p-4 w-1/2 mt-4"
      >
        <input type="text" placeholder="Título Tarefa" className="p-2" />
        <textarea placeholder="Descrição" className="p-2"></textarea>
        <button type="submit" className="border rounded p-2 text-2xl font-bold">
          {" "}
          Cadastrar Tarefa{" "}
        </button>
      </form>
    </div>
  );
}
