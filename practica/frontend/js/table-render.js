export class RenderTemplate {

    constructor(matricula) {
      this.matricula = matricula
    }
  
    renderTbody() {
      
      return this.matricula.map((matricula) => {
    
        return `<tr>
              <td><b>${matriucla.estudiante.numero}</b></td>
              <td>${matricula.estudiante.cedula}</td>
              <td>${matricula.estudiante.nombres}</td>
              <td>${matricula.estudiante.genero}</td>
              <td>${matricula.estudiante.direccion}</td>
      
          </tr>`
      }).join('')
    }
  
    renderTfoot() {
      return
    }
  }