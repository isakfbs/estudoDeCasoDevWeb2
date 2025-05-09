export default class Agendamento {
    constructor(id, pacienteId, medicoId, date, time, status = "agendado"){
        this.id = id;
        this.pacienteId = pacienteId;
        this.medicoId = medicoId;
        this.date = date;
        this.time = time;
        this.status = status;
        this.createdAt= new Date();
    }
}