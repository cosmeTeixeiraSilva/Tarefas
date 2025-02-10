"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { addTarefa } from "../actions";
import Link from "next/link";
import { revalidatePath } from "next/cache";

export default function AddTarefa() {
  const router = useRouter();
  const { pending } = useFormStatus();

  async function handleAction(formData) {
    const response = await addTarefa(formData);

    if (response?.success) {
      revalidatePath("/tarefa")
      router.push("/tarefa"); // Redireciona após sucesso
    }
  }

  return (
    <div className="p-4 flex mx-auto flex-col w-full items-center mt-8">
      <h1 className="text-2xl text-start w-1/2 text-orange-400 font-bold bg-white p-2 rounded">
        Criando Tarefa:
      </h1>
      <form
        action={handleAction} // Chama a função com lógica de redirecionamento
        className="flex flex-col gap-y-4 rounded border p-4 w-1/2 mt-4"
      >
        <input name="titulo" type="text" placeholder="Título Tarefa" className="p-2 rounded text-blue-500" required />
        <textarea name="descricao" placeholder="Descrição" className="p-2 rounded text-blue-500" required></textarea>

        <div className="botoes w-full flex gap-x-4">
          <button type="submit" className="border rounded p-2 text-2xl font-bold w-1/2 bg-orange-500" disabled={pending}>
            {pending ? "Salvando..." : "Cadastrar Tarefa"}
          </button>
          <Link href="/tarefa" className="bg-blue-500 p-2 w-1/2 rounded flex items-center justify-center font-bold text-2xl">
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
}
