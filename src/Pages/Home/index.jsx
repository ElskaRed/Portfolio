import './home.scss';
import portrait from '../../assets/images/portrait.webp';
import logo from '../../assets/images/logo-react.png';


const Home = () => {
    return (
        <div className="home">
            <section className="home__intro">
                <h1>Roxanne Vignon</h1>
                <p>Développeuse web front-end</p>
                <img src={logo} alt="Logo react" className="home__intro__logo"/>
            </section>
            <img src={portrait} alt="portrait Roxanne Vignon" className="home__portrait" />
        </div>
    );
};

export default Home;