import './Card.css';
import pixel_pic from '../../assets/pixel_cat.jpg';

export default function Card(
    {
        name, 
        dna, 
        edition, 
        description, 
        box, 
        color,
        dateBirth,
        energy,
        level,
        health
    }) {

    return (
        <div className="Card">
            <div className="Card__text">
                <div className="Card__personal">
                    <h2>{name}</h2>
                    <span>{edition}</span>
                </div>
                <span>{dna}</span>
            </div>
            <div className="Card__img">
                <img src={pixel_pic} alt="pixel cat" />
            </div>
            <div className="Card__data">
                <p>{description}</p>
                <div className="Card__description">
                    <div className="Card__generic">
                        <p>Box: <span>{box}</span></p>
                        <p>Color: <span>{color}</span></p>
                        <p>Date <br />of Birth: <span>{dateBirth}</span> </p>
                    </div>
                    <div className="Card__states">
                        <p>Energy: <span>{energy}</span></p>
                        <p>Meow <br />Level: <span>{level}</span></p>
                        <p>Health: <span>{health}</span> </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

