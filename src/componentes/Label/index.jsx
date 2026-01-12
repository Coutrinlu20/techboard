// children, htmlFor são propriedades passadas para o componente Label
export function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor}>
      {children}
    </label>
  )
}
