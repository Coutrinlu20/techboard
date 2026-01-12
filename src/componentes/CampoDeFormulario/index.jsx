//desestruturação de props
//extrai a propriedade children do objeto props
 export function CampoDeFormulario({ children }) {
   return (
      <fieldset>
         {children}
      </fieldset>
   )

}