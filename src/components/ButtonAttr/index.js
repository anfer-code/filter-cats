export default function ButtonAttr({textButton, color, handlerButton}) {

    return (
        <button onClick={() => handlerButton(textButton)} className={`Attr__btn btn__${color}`}>
            {textButton}
        </button>
    );
};
