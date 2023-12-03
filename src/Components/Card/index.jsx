import './card.scss';

const Card = (props) => {
    return (
        <article className="card">
            <img src={props.image} alt={props.title} className="card__img" />
            <div className="card__shadow"></div>
            <div className="card__info">
                <h2 className="card__info__title">{props.title}</h2>
                <p className="card__info__text">{props.text}</p>
            </div>
        </article>
    )
}

export default Card;