export class Commentaire{
    id: number ;
    userName: string ;
    userPdp: string ;
    contenu: string ;
    postId: number ;

    constructor(id = 0, userName = "", userPdp = "", contenu = "", postId = 0){
        this.id = id ;
        this.userName = userName ;
        this.userPdp = userPdp ;
        this.contenu = contenu ;
        this.postId = postId ;
    }
}