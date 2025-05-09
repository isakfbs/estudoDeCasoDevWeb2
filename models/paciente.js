class Paciente {
    constructor(id, nome, email, phone){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.phone = phone;
        this.cretedAt = new Date();
    }
}
export default Paciente;