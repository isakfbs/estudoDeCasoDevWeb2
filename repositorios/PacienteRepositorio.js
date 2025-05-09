import Paciente from "../models/paciente";

class PacienteRepositorio {
    constructor(){
        this.pacientes = [];
    }

    create(pacienteData){
        const paciente = new Paciente(
            this.pacientes.length + 1, 
            pacienteData.nome, 
            pacienteData.email, 
            pacienteData.phone);
            this.pacientes.push(paciente);
            return paciente;
    }

    findAll(){
        return this.pacientes;
    }
}