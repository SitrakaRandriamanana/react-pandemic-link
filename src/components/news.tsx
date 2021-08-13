import React, { Component }  from 'react';

class News extends Component {

    render(){
        return(
            <div className="News">
                <div className="content flex">
                    <div>
                        <img src="./img/sars-cov-2.jpg" alt="covid-19" />
                    </div>
                    <div>
                        <h2>ORIGINES DU COVID</h2>
                        <p>L'OMS a souligné ce jeudi avoir besoin de "toutes les données" sur le Covid pour enquêter sur l'hypothèse d'une fuite de laboratoire en Chine, invitant tous les pays "y compris la Chine" à partager les données existantes sur les premiers cas. "Partager les données et autoriser le réexamen d'échantillons(...) n'est pas autre chose que ce que nous incitons tous les pays, y compris la Chine, à soutenir pour que nous puissions avancer dans l'étude des origines (de la pandémie) rapidement et efficacement", a avancé l'OMS dans un communiqué.</p>
                    </div>
                </div>
                <div className="content flex">
                    <div>
                        <h2>Symptômes</h2>
                        <h3>La COVID-19 affecte les individus de différentes manières. La plupart des personnes infectées développent une forme légère à modérée de la maladie et guérissent sans hospitalisation.</h3>
                        <div>
                            <h4>Symptômes les plus fréquents:</h4>
                            <p>fièvre, toux sèche, fatigue</p>
                            <h4>Symptômes les moins fréquents</h4>
                            <p>courbatures
                                maux de gorge,
                                diarrhée,
                                conjonctivite,
                                maux de tête,
                                perte de l’odorat ou du goût,
                                éruption cutanée, ou décoloration des doigts ou des orteils</p>
                        </div>
                      
                    </div>
                    <div>
                        <img src="./img/Coronavirus-COVID-19.jpg" alt="covid-19" />
                    </div> 

                </div>
                
                <div className="content flex">
                    <div>
                        <h2>VACCINATION CONTRE LE POLIO</h2>
                        <p>Alors que le monde se bat contre le COVID-19, d'autres maladies évitables continuent de menacer dangereusement les enfants, comme la polio.
                        Agissez : Faites-vous vacciner et faites vacciner vos proches.
                        La campagne de vaccination contre la polio à Madagascar est soutenue par l'UNICEF et le gouvernement américain.</p>
                    </div>
                    <div>
                        <img src="./img/vaccin.jpg" alt="covid-19" />
                    </div>
                </div>
             
            </div>
        );
    }
}


export default News;