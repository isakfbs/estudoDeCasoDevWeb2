import Paciente from "../models/paciente";
export default class PacienteRepositorio {
  constructor() {
    this.pacientes = [];
  }

  create(pacienteData) {
    const paciente = new Paciente(
      this.pacientes.length + 1,
      pacienteData.nome,
      pacienteData.email,
      pacienteData.phone
    );
    this.pacientes.push(paciente);
    return paciente;
  }

  findAll() {
    return this.pacientes;
  }

  findById(id) {
    return this.pacientes.find((p) => p.id === id);
  }

  update(id, pacienteData) {
    const paciente = this.findById(id);
    if (paciente) {
      Object.assign(paciente, pacienteData);
      return paciente;
    }
    return null;
  }

  delete(id) {
    const index = this.pacientes.findIndex((p) => p.id === id);
    if (index !== -1) {
      return this.pacientes.splice(index, 1)[0];
    }
    return null;
  }
}
