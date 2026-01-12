// no react, componentes são funções
//props e um objeto que guarda todas as propriedades passadas para o componente.
//props.children guarda todos os elementos filhos do componente.
export function TituloFormulario(props) {
  return (
    <h2>
      {props.children}
    </h2>
  )
}
