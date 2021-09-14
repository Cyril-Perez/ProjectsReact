import React, {useState} from "react"
import "./Slider.css"
import dataSlider from "./dataSlider"
import BtnSlider from "./BtnSlider"

const Slider = ()=>{
    const [slideAnim, setSlideAnim]= useState({
        index : 1,
        inProgress : false
    })
    const nextSlide = ()=>{
        if (slideAnim.index !== dataSlider.length && !slideAnim.inProgress){
            console.log("slideAnim index",slideAnim.index.inProgress);
            console.log("dataSlider index",dataSlider.length);
            console.log(slideAnim.inProgress);
            // gestion du cliques anti spam

        setSlideAnim({index : slideAnim.index +1 , inProgress : true})

        setTimeout(()=>{
            setSlideAnim({index : slideAnim.index +1 , inProgress : false})
        }, 400)

        }else if (slideAnim.index === dataSlider.length && !slideAnim.inProgress){
        setSlideAnim({index : 1 , inProgress : true})

        setTimeout(()=>{
            setSlideAnim({index : 1 , inProgress : false})
        }, 400)
        }
    }
    const prevSlide = ()=>{
        if(slideAnim.index !== 1 && !slideAnim.inProgress){
            setSlideAnim({index : slideAnim.index -1, inProgress : true})

            setTimeout(()=>{
                setSlideAnim({index : slideAnim.index -1 , inProgress : false})
            }, 400)
        }
        else if (slideAnim.index === 1 && !slideAnim.inProgress){
            setSlideAnim({index : 5 , inProgress : true})

            setTimeout(()=>{
                setSlideAnim({index : 5 , inProgress : false})
            }, 400)
        }
    }

    const moveDot = (index)=>{
        setSlideAnim({index : index , inProgress : false})

    }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index)=>{
            return(
                <div
                key={obj.id} 
                className={slideAnim.index === index +1 ? "slide active-anim": "slide"}
                >
                    {/* process.env.PUBLIC_URL  en mode production  <img src= {process.env.PUBLIC_URL +`/Imgs/img${index + 1}.jpg`}/> */}
                   <img src= {`/Imgs/img${index + 1}.jpg`} alt =""/> 
                   
                </div>
            )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            <div className="container-dots">

                {/* METHODE REPETITION                
                <div className={slideAnim.index === 1 ? "dot active": "dot"}></div>
                <div className={slideAnim.index === 2 ? "dot active": "dot"}></div>
                <div className={slideAnim.index === 3 ? "dot active": "dot"}></div>
                <div className={slideAnim.index === 4 ? "dot active": "dot"}></div>
                <div className={slideAnim.index === 5 ? "dot active": "dot"}></div> */}

                {
                    Array.from({length:5}).map((item, index)=>{
                        return (
                        <div key={item} onClick = {()=>{moveDot(index+1)}} className={slideAnim.index === index +1 ? "dot active": "dot"}></div>                         
                        )
                    })
                }
            </div>
        </div>
    )

}
export default Slider;