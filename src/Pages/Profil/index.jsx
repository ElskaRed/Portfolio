import './about.scss';
import Collapse from '../../Components/Collapse';
import profil from '../../assets/images/Profil.jpg';


const About = () => {
    return (
        <div className="about">
            <img src={profil} alt="Portrait" className="about__portrait"/>
            <div className="about__text">
                <div className="about__text__collapse">
                    <Collapse 
                        title= "Présentation"
                        text="Issue de la formation certifiante de développeur intégrateur web de la plateforme Openclassrooms, je développe principalement sur React.js et respecte les bonnes pratiques de code, d’accessibilité, d’optimisation et de SEO."
                    />
                    <Collapse 
                        title= "Bio"
                        text="C’est lors d’une option d’informatique en licence d’anglais que je découvre les toutes premières bases de code html et CSS. Fortement intriguée mais déjà lancée dans un cursus avec pour projet de devenir enseignante, j’ai laissé cet intérêt de côté tout en y repensant ponctuellement. 
                        C’est 5 ans plus tard, après l’abandon de mon projet d’avenir et ma toute première arrivée à pôle emploi que je saisis l’opportunité rêvée de pouvoir faire une formation financée, et me lance enfin en choisissant la plateforme Openclassrooms et sa pédagogie par projets qui était faite pour moi."
                    />
                </div>
                <div>
                    <h2>Compétences</h2>
                    <ul>
                        <li>Langages : Trio HTML5/CSS3(dont scss)/Javascript</li>
                        <li>Environnement de développement : React</li>
                        <li>Pratiques annexes : optimisation/débuggage/bonnes pratiques accessibilité/SEO</li>
                    </ul>
                </div>
                <div>
                    <h2>Etudes</h2>
                    <ul>
                        <li>Licence et master 1 LLCER (Langues, Littérature et Civilisations Etrangères et Régionales) cursus ANGLAIS - Universités Grenoble Alpes </li>
                        <li>Formation certifiante développeur intégrateur web - Openclassrooms </li>
                    </ul>
                </div>
            </div>    
        </div>
    );
};

export default About;