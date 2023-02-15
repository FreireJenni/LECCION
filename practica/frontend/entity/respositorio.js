class RepositorioEstudiante{
    constructor(matricula) {
      this.matricula = []
    }
  
    crearMatricula(matricula) {
      this.matricula.push(matricula)
      console.log(this.matricula)
    }
  
    getGeneraNumMatricula() {
      let numeroMatricula= this.matricula.length + 1
      return numeroMatricula.toString().padStart(10, '0')
    }
  

  
  }
  export default RepositorioEstudiante