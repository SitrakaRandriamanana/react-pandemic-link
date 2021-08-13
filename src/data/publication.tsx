export class Publication{
    id: number ;
    userName: string ;
    userPdp: string ;
    titre: string
    description: string ;

    constructor(id = 0, userName = "", userPdp = "", titre = "", description = ""){
        this.id = id ;
        this.userName = userName ;
        this.userPdp = userPdp ;
        this.titre = titre ;
        this.description = description ;
    }
}