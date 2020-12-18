import React from 'react';
import './App.css';
import {Slider} from "./components/Slider/Slider";
import {Slide} from "./components/Slide/Slide";

export const App: React.FC = () => {

    return (
        <div className='app'>
            <Slider>
                <Slide srcImage='https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/HA1RQCRQJ7.jpg'/>
                <Slide srcImage='https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/EVHXF4MUT6.jpg'/>
                <Slide srcImage="https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/D7VE3SK3RD.jpg"/>

                <Slide>
                    <form>
                        <p><input placeholder="Name" name="user"/></p>
                        <p><input type="submit" value="submit"/></p>
                    </form>
                </Slide>
            </Slider>
        </div>
    );
}




