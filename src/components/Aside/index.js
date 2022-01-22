import './Aside.css';
import ButtonFilter from '../ButtonFilter';
import ButtonAttr from '../ButtonAttr';
import { useHandlers } from '../../utils/handlerFunctions';

const boxList = [
    "Cardboard",
    "Fish burgers",
    "Blue",
    "Pink",
    "Green",
    "Yellow",
    "Paw",
    "Shopping cat",
    "Meow Express",
]

const colorList = [
    "Peach",
    "Beige",
    "Honey mustard",
    "Gray",
    "Banana",
    "Yellow",
    "White",
    "Cream",
    "Lavender"
]

export default function Aside(){

    const {
        handlerNameFilter,
        handlerIdFilter,
        handlerButtonBox,
        handlerButtonColor
    } = useHandlers()

    return (
        <div className="Aside">
            <div className="Wrapper">
                <h2>Filter</h2>
                <ButtonFilter 
                titleText="Ordenar Alphabeticamente"  
                buttonText="A - Z"
                styleText="name-search"
                handler={handlerNameFilter}
                />
                <ButtonFilter 
                titleText="Ordenar por id"
                buttonText="ID"
                styleText="id-search"
                handler={handlerIdFilter}
                />
                <div className="Aside__container Aside__attributes">
                    <h6>Attributes</h6>
                    <div className="Aside__box">
                        <h5>Box</h5>
                        <div className="grid grid--one">
                            {
                            boxList.map(box => 
                            <ButtonAttr 
                                key={box} 
                                textButton={box}  
                                color="white"
                                handlerButton={handlerButtonBox}
                                />
                            )}
                        </div>
                    </div>
                    <div className="Aside__box">
                        <h5>Color</h5>
                        <div className="grid grid--one">
                            {
                            colorList.map(color =>
                            <ButtonAttr 
                            key={color} 
                            textButton={color}  
                            color="white"
                            handlerButton={handlerButtonColor}
                            />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
