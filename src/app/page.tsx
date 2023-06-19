"use client";
import Botao from "@/components/Botao";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Formulario from "@/components/Formulario";
import useClientes from "@/hooks/useClientes";

export default function Home() {
  const {
    clienteSelecionado,
    clienteExcluido,
    novoCliente,
    salvarCliente,
    cliente,
    clientes,
    tabelaVisivel,
    exibirTabela,
  } = useClientes();
  return (
    <div
      className={`flex h-screen justify-center items-center text-white bg-gradient-to-r from-blue-500 to-purple-500`}
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao
                className=" bg-gradient-to-r from-green-600 to-green-800 mb-4"
                onClick={novoCliente}
              >
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Tabela>
          </>
        ) : (
          <Formulario
            cancelado={exibirTabela}
            clienteMudou={salvarCliente}
            cliente={cliente}
          ></Formulario>
        )}
      </Layout>
    </div>
  );
}

//npm i firebase@8.8.0
