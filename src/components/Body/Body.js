import React from "react";
import "./Body.css"


const  Body = () => {
    return (
        <div className = "body">
            <img className = "africa-map" src = "../../../public/img/africa.jpg" alt="africa.jpg"/>
                <div className = "row-food">

                    <div className = "africa-food">
                        <p className = "food-title">
                            Thypical African Food
                        </p>
                        <p className = "food-nav">
                            Awesome raw zebra
                        </p>
                        <p className = "food-nav">
                            Awesome raw niger
                        </p>
                        <p className = "food-nav">
                            Awesome raw water
                        </p>
                    </div>
                    
                </div>
            <div className = "curiosities">
                <p> ciao </p>
                <p> ciao </p>
            </div>
            
        </div>
    )

}
export default Body