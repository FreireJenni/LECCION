// importacion de modelos de clases.
import { CasoUsoEstudiante } from '../use-cases/casoS'
import repositorioEstudiante, { CasoUsoEstudiante } from '../entity/respositorio'
import { RenderTemplate } from '../table-render.js'

// crear las instancias de las clases
const RepositorioEstudiante = new RepositorioEstudiante()
const CasoUsoEstudiante = new CasoUsoEstudiante(repositorioEstudiante)
const renderTemplate = new RenderTemplate(repositorioEstudiante.matricula)

// se agrega la referencia a los constroles del formulario HTML
const tbody = document.querySelector("#id-table-estudiante > tbody")
const tfoot = document.querySelector("#id-table-estudiante> tfoot")

const formRegistroEstudiante = document.querySelector('#id-form-registro-estudiante')

// capturamos en evento submit del formulario HTML addEventListener
formRegistroEstudiante.addEventListener('submit', (event) => {
  alert()
  event.preventDefault();
  // creamos un objeto FormData con los valores de los controles del Formulario HTML
  const formdata = new FormData(event.target)
  // covertimos los datos en objeto key: values (diccionario)
  const data = Object.fromEntries(formdata.entries())

  data.tipoNombre = selectTipo.options[selectTipo.selectedIndex].text

  // modelo de negocio agregar cuentas bancarias
  CasoUsoEstudiante.crearMatricula(data)
  // renderizar datos en la tabla HTML
  tbody.innerHTML = renderTemplate.renderTbody()
  tfoot.innerHTML = renderTemplate.renderTfoot()
})