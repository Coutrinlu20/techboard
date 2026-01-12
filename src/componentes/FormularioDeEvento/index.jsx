import { TituloFormulario } from "../TituloFormulario"
import { CampoDeFormulario } from "../CampoDeFormulario"
import { Label } from "../Label"
import { CampoDeEntrada } from "../CampoDeEntrada"
import './FormularioDeEvento.css'

export function FormularioDeEvento() {
  return (
    <form className="Form-Doevento">
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <CampoDeFormulario>
        <Label htmlFor="nome">
          Qual o nome do evento?
        </Label>
        <CampoDeEntrada type="text" id='nome' />
      </CampoDeFormulario>
    </form>
  )
}