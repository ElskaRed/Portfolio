import './fiche.scss';
import DataProjets from '../../assets/data/projets.json';
import { useParams, Navigate } from "react-router-dom";
import Collapse from '../../Components/Collapse';


const FicheProjet = () => {
    const { id } = useParams();
    const ficheProjet = DataProjets.find((projet) => projet.id === id);
    

    if (!ficheProjet) {
        return <Navigate to="/error" />;
    }

    return(
        <div className="fiche">
            <img src="" alt="blbl"/>
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