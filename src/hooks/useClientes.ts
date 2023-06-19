import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteDB";
import ColecaoCliente from "@/backend-firebase/db/ColecaoCliente";
import { useEffect, useState } from "react";
import useTabelaouForm from "./useTabelaouForm";

export default function useClientes() {
  const repo: ClienteRepositorio = new ColecaoCliente();

  const { tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario } =
    useTabelaouForm();

  const [cliente, setCliente] = useState<Cliente>(Cliente.void());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {}, []);
  //   useEffect(obterTodos, []);

  function obterTodos() {
    repo.obterTodos(cliente).then((clientes) => {
      setClientes(clientes);
      exibirTabela();
    });
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    exibirFormulario();
  }

  async function clienteExcluido(cliente: Cliente) {
    await repo.excluir(cliente);
    obterTodos();
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente);
    obterTodos();
  }

  function novoCliente() {
    setCliente(Cliente.void());
    exibirFormulario();
  }

  return {
    novoCliente,
    salvarCliente,
    clienteExcluido,
    clienteSelecionado,
    obterTodos,
    cliente,
    clientes,
    tabelaVisivel,
    exibirTabela,
  };
}
