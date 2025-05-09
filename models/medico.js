import Especialidade from "./especialide"; 

export default class Medico  {
    constructor(id, name, email, phone, especialidadeId){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.especialidadeId = especialidadeId;
        this.createdAt = new Date();
    }
}