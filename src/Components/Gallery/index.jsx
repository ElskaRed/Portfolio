import './gallery.scss';
import Card from '../Card/index';
import projets from "../../assets/data/projets.json";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

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
                <Link key={projet.id} to={`/project/${projet.id}`}>
                    <Card image={projectImages[index]} title={projet.title} />
                </Link>
            ))}
        </div>
    );
};

export default Gallery;