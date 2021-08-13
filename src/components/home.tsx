import React, { Component }  from 'react';
import Cards from './cards/cards';
import { Commentaire } from '../data/commentaire';
import { Publication } from '../data/publication';


class Home extends Component {

    state ={
        posts: [
          new Publication(1, "Sitraka Randriamanana", "/img/profil.jpg", "Quels sont les signes pour le corona virus?", "J'ai des douleurs au thorax."),
          new Publication(2, "Elena sorokina", "/img/user1.jpg", "J'ai des problemes respiratoires, que doit-je faire?", "J'ai besoins de votre aides."),
          new Publication(3, "Sitraka Randriamanana", "/img/profil.jpg", "Je perd le gout, est-ce un signe du corona virus?", "J'ai vraiment peur, que doit-je faire?")
        ] as Publication[],
        comments: [
          new Commentaire(1, "Elena Sorokina", "/img/user1.jpg", "Consulter un docteur", 1),
          new Commentaire(2, "Elena Sorokina", "/img/user1.jpg", "le plus vite si non ca va s'aggraver", 1),
          new Commentaire(3, "Alicia Soberano", "/img/user2.jpg", "Consulter un docteur le plus vite", 2)
        ] as Commentaire[],
        ajoutCommentaire: (nouveau:Commentaire) => {
          const modif = this.state.comments ;
          modif.push(nouveau) ;
          this.setState({
            comments: modif
          })
        },
        lastCommentId: () => {
          const coms = this.state.comments ;
          return coms[coms.length - 1].id + 1 ;
        }
       
      }
    render(){
        return(
            <div className="App">
            {
              this.state.posts.map((item) => {
                let comsako = this.state.comments.filter(x => {
                  return x.postId == item.id ;
                }) ;
                return (
                  <Cards key={item.id} currentCommentId={this.state.lastCommentId} publication={item} addCommentHandler={this.state.ajoutCommentaire} commentaires={comsako} />
                ) ;
              })
            }
          </div>
        );
    }
}


export default Home;
