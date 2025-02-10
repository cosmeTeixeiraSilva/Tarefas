/*
  Warnings:

  - The required column `uuid` was added to the `tarefas` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tarefas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pendente',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_tarefas" ("createdAt", "descricao", "id", "status", "titulo", "updatedAt") SELECT "createdAt", "descricao", "id", "status", "titulo", "updatedAt" FROM "tarefas";
DROP TABLE "tarefas";
ALTER TABLE "new_tarefas" RENAME TO "tarefas";
CREATE UNIQUE INDEX "tarefas_id_key" ON "tarefas"("id");
CREATE UNIQUE INDEX "tarefas_uuid_key" ON "tarefas"("uuid");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
