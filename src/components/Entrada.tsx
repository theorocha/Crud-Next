interface InProps {
  texto: string;
  tipo: "text" | "number";
  valor: any;
  onlyRead?: boolean;
  valorMudou?: (valor: any) => void;
  className?: string;
}

export default function Entrada(props: InProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">{props.texto}</label>
      <input
        className="border border-purple-500 rounded-lg focus:outline-none bg-gray-100 px-4 py-2 focus:bg-white"
        type={props.tipo}
        value={props.valor}
        readOnly={props.onlyRead}
        onChange={(e) => props.valorMudou?.(e.target.value)}
      />
    </div>
  );
}
