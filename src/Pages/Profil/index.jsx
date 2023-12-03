import './about.scss';
import Collapse from '../../Components/Collapse';
import profil from '../../assets/images/Profil.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';


const About = () => {
    return (
        <div className="about">
            <section className="about__bio">
                <div className="about__bio__collapse">
                    <Collapse 
                        title= "Présentation"
                        text="Issue de la formation certifiante de développeur intégrateur web de la plateforme Openclassrooms, je développe principalement sur React.js et respecte les bonnes pratiques de code, d’accessibilité, d’optimisation et de SEO."
                    />
                    <Collapse 
                        title= "Bio"
                        text="C’est lors d’une option d’informatique en licence d’anglais que je découvre les toutes premières bases de code html et CSS. Fortement intriguée mais déjà lancée dans un cursus avec pour projet de devenir enseignante, j’ai laissé cet intérêt de côté tout en y repensant ponctuellement. 
                        C’est 5 ans plus tard, après l’abandon de mon projet d’avenir et ma toute première arrivée à pôle emploi que je saisis l’opportunité rêvée de pouvoir faire une formation financée, et me lance enfin en choisissant la plateforme Openclassrooms et sa pédagogie par projets qui était faite pour moi."
                    />
                    <div className="sup">
                        <h2 className="sup__h">Compétences</h2>
                        <ul className="sup__ul">
                            <li>- Langages : Trio HTML5/CSS3(dont scss)/Javascript</li>
                            <li>- Environnement de développement : React</li>
                            <li>- Pratiques annexes : optimisation/débuggage/bonnes pratiques accessibilité/SEO</li>
                        </ul>
                    </div>
                    <div className="sup etudes">
                        <h2 className="sup__h">Etudes</h2>
                        <ul className="sup__ul">
                            <li>- Licence et master 1 LLCER (Langues, Littérature et Civilisations Etrangères et Régionales) cursus ANGLAIS - Universités Grenoble Alpes </li>
                            <li>- Formation certifiante développeur intégrateur web - Openclassrooms </li>
                        </ul>
                    </div>
                </div>
            </section>  
            <section className="about__img">
                <img src={profil} alt="Portrait" className="about__img__portrait"/>
                <div className="about__img__trio">
                    <FontAwesomeIcon className="icone-trio" icon={faHtml5} size="2xl" style={{color: "#fae4ba",}} />
                    <FontAwesomeIcon className="icone-trio" icon={faJs} size="2xl" style={{color: "#f6f6f6",}} />
                    <FontAwesomeIcon className="icone-trio" icon={faCss3Alt} size="2xl" style={{color: "#fae4ba",}} />
                </div>
                    <FontAwesomeIcon className="about__img__react" icon={faReact} spin style={{color: "#fae4ba",}} />

            </section>
        </div>
    );
};

export default About;