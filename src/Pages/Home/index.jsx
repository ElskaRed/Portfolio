import './home.scss';
import portrait from '../../assets/images/portrait.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div className="home">
            <section className="home__intro">
                <h1 className="home__intro__name">Roxanne Vignon</h1>
                <p className="home__intro__sub">Développeuse web front-end</p>
                <FontAwesomeIcon className="home__intro__logo" icon={faReact} spin style={{color: "#fae4ba",}} />
            </section>
            <div className="home__portrait">
                <img src={portrait} alt="portrait Roxanne Vignon" className="home__portrait--img" />
                <div className="home__portrait--shadow"></div>
            </div>
        </div>
    );
};

export default Home;