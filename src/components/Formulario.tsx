import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "@/core/Cliente";
import Botao from "./Botao";

interface formProps {
  cliente: Cliente;
  clienteMudou?: (cliente: Cliente) => void;
  cancelado?: () => void;
}

export default function Form(props: formProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? "");
  return (
    <div>
      {id ? (
        <Entrada
          onlyRead={true}
          texto="Código"
          valor={id}
          tipo="text"
          className="mb-4"
        ></Entrada>
      ) : (
        false
      )}
      <Entrada
        texto="Nome"
        valor={nome}
        tipo="text"
        valorMudou={setNome}
        className="mb-4"
      ></Entrada>
      <Entrada
        texto="Idade"
        valor={idade}
        tipo="number"
        valorMudou={setIdade}
      ></Entrada>

      <div className="mt-3 flex justify-end">
        <Botao
          className="bg-gradient-to-r from-blue-600 to-blue-800 mr-2"
          onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao
          onClick={props.cancelado}
          className="bg-gradient-to-r from-gray-400 to-gray-600"
        >
          Cancelar
        </Botao>
      </div>
    </div>
  );
}
