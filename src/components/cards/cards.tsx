import React, { Component }  from 'react';
import { Commentaire } from '../../data/commentaire';
import { Publication } from '../../data/publication';
import CommentDisplay from '../comment/comment' ;
import './cards.css';

class Cards extends Component<{publication:Publication, commentaires:Commentaire[], addCommentHandler:any, currentCommentId: any}> {
    postCommentaire(event: any){
        let textarea = event.target[0] ;
        let contenu = textarea.value ;
        const com = new Commentaire(this.props.currentCommentId(), "Sitraka Randriamanana", "assets/img/profil.jpg", contenu, this.props.publication.id) ;
        this.props.addCommentHandler(com) ;
        textarea.value = "" ;
    }
    render(){
        return(
            <div className="card">
                <div className="card-header profil">
                    <img src={ this.props.publication.userPdp } alt="photo_profil" />
                    <p><b>{ this.props.publication.userName }</b></p>
                </div>
                <div className="card-content">
                    <h3>{ this.props.publication.titre }</h3>
                    <p>{ this.props.publication.description }</p>
                </div>
                <hr></hr>
                {
                    this.props.commentaires.length == 0 ? <h5>Aucun commentaire</h5>:null
                }
                {
                    this.props.commentaires.map(item => {
                        return (
                            <CommentDisplay com={item} />
                        ) ;
                    })
                }
                <form onSubmit={(e) => { e.preventDefault() ; this.postCommentaire(e)}} className="card-comment-section">
                    <textarea placeholder="Ajouter un commentaire"></textarea>
                    <button>Publier</button>
                </form>
                
            </div>
        );
    }
}

export default Cards;