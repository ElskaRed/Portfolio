import './fiche.scss';
import DataProjets from '../../assets/data/projets.json';
import { useParams, Navigate } from "react-router-dom";
import Collapse from '../../Components/Collapse';

import foodImg from '../../assets/images/food-banner.webp';
import bluelImg from '../../assets/images/bluel-banner.webp';
import kasaImg from '../../assets/images/kasa-banner.webp';
import ninaImg from '../../assets/images/nina-banner.webp';
import bankImg from '../../assets/images/bank-banner.webp';

const FicheProjet = () => {
    const { id } = useParams();
    const ficheProjet = DataProjets.find((projet) => projet.id === id);
    

    if (!ficheProjet) {
        return <Navigate to="/error" />;
    }

    let projectImage;
    switch (ficheProjet.id) {
        case "c67ab8a7":
            projectImage = foodImg;
            break;
        case "b9123946":
            projectImage = bluelImg;
            break;
        case "blsdiufg":
            projectImage = kasaImg;
            break;
        case "bl9765h":
            projectImage = ninaImg;
            break;
        case "bl976td":
            projectImage = bankImg;
            break;
        default:
            projectImage = null;
    }

    return(
        <div className="fiche">
            <img src={projectImage} alt="Projet" className="fiche__img"/>
            <section className="fiche__details">
                <div className="infos">
                    <div className="infos__lieu">
                        <h1 className="infos__lieu__title">{ficheProjet?.title}</h1>
                        <div className="infos__lieu__tags">
                            {ficheProjet?.tags.map((tag, index) => (
                                    <p key={index} className="tag">{tag}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="collapses">
                    <Collapse 
                        title="Description du projet"
                        text={ficheProjet?.description}
                        class="medium"
                    />
                    <Collapse 
                        title="Focus du projet"
                        text={ficheProjet?.focus}
                        class="medium"
                    />
                </div>
            </section>
        </div>
    )
};

export default FicheProjet;