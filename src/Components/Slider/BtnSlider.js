import leftArrow from "./icons/left-arrow.svg"
import rightArrow from "./icons/right-arrow.svg"

const BtnSlider = (props)=>{
    // console.log(props.direction);
    return(
        <button onClick={props.moveSlide} className={props.direction === "next" ?"btn-slide next": "btn-slide prev"}>
            {/* RENDU CONDITIONNELLE PROPS */}
            <img src={props.direction === "next" ? rightArrow : leftArrow} alt =""/>
            {/* RENDU CONDITIONNELLE PROPS  */}
        </button>
    )
}
export default BtnSlider