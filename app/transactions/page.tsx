import { auth } from "@clerk/nextjs/server";
import AddTransactionButton from "../_components/add-transactions-button";
import Navbar from "../_components/navbar";
import { DataTable } from "../_components/ui/data-table";
import { db } from "../_lib/prisma";
import { transactionsColumns } from "./_columns";
import { redirect } from "next/navigation";

const TransitionsPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  // BUSCAR AS TRANSAÇÕES NO BANCO DE DADOS
  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
  });
  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
        {/* TITULO E BOTÃO */}
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton />
        </div>
        {/* TABELA COM OS DADOS */}
        <DataTable columns={transactionsColumns} data={transactions} />
      </div>
    </>
  );
};

export default TransitionsPage;
