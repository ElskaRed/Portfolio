import './gallery.scss';
import Card from '../Card/index';
import projets from "../../assets/data/projets.json";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Gallery = () => {
    const [projectImages, setProjectImages] = useState([]);

    useEffect(() => {
        const loadImage = async () => {
            const images = await Promise.all(
                projets.map(async (projet) => {
                    const module = await import(`../../assets/images/${projet.image}`);
                    return module.default;
                })
            );
            setProjectImages(images);
        };
        loadImage();
    }, []); 

    return (
        <div className="gallery">
            {projets.map((projet, index) => (
                <div className="card">
                    <Link key={projet.id} to={`/project/${projet.id}`}>
                        <Card image={projectImages[index]} title={projet.title} text={projet.bref}/>
                    </Link>
                    <div className='card__liens'>
                        {projet.demo && (
                            <a href={projet.demo} className="card__liens__demo">Demo</a>
                        )}
                        <a href={projet.git} className="card__liens__git">
                            <FontAwesomeIcon size="2xl" icon={faGithub} style={{ color: "#ffffff" }} />
                        </a>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Gallery;