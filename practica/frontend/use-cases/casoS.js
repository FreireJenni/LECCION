import Estudiante from '../entity/estudiante.js'
import ListadoEstudiante from '../entity/casoEstudiante.js'

class CasoUsoEstudiante {

  constructor(repositorioEstudiante) {
    this.repositorioEstudiante= repositorioEstudiante
  }

  crearEstudiante(data) {

    const matricula = this.repositorioEstudiante.getExisteEstudiante(
      data.cedula,
      data.nombre,
      data.apellidos,
      data.genero,
      data.direccion
    )

    if (!matricula) {

      const Estudiante = new Estudiante(
        data.cedula,
        data.nombres.toUpperCase(),
        data.apellidos.toUpperCase(),
        data.genero
      )
    
      this.repositorioEstudiante.crearCuenta(crearEstudiante)

    }
    else {
      alert('Existe Estudiante con Numero de matricula repetido')

    }

  }

}

export {
  CasoUsoEstudiante
}