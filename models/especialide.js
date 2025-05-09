export default class Especialidade{
    constructor(id,name, descricao){
        this.id = id;
        this.name = name;
        this.descricao = descricao;
        this.createdAt = new Date();
    }

    getId(){
        return this.id;
    }
}