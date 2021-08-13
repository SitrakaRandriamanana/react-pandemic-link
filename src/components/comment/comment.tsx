import {Component} from 'react' ;
import './comment.css' ;
import '../cards/cards.css' ;
import { Commentaire } from '../../data/commentaire';

class CommentDisplay extends Component<{com:Commentaire}>{
    render(){
        return (
            <div>
                <div className="card-header profil">
                    <img src={ this.props.com.userPdp } alt="photo_profil" />
                    <p><b>{ this.props.com.userName }</b></p>
                </div>
                <div>
                    <p>{this.props.com.contenu}</p>
                </div>
            </div>
        ) ;
    }
}

export default CommentDisplay ;