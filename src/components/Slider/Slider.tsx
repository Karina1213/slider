import React from "react";
import "./Slider.css"
import '../Slide/Slide.css'
import {Box} from "../Box/Box";

interface IState {
    activeSlide: number;
}

interface IProps {
    children: (number | string | any) []
}
// the type any was used because no solution was found for JSXElement in this.props.children.map

export class Slider extends React.Component <IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            activeSlide: 0
        };
    }

    dotOnClick = (e: React.MouseEvent) => {
        const value: any = (e.target as HTMLDivElement).dataset
        const slide = parseInt(value.index, 10)

        this.setState({
            activeSlide: slide
        });
    };

    prevSlide(): void {
        console.log(this.props.children)
        const slide = this.state.activeSlide - 1 < 0
            ? this.props.children.length - 1 : this.state.activeSlide - 1;

        this.setState({
            activeSlide: slide
        });
    }

    nextSlide(): void {
        const slide = this.state.activeSlide + 1 < this.props.children.length
            ? this.state.activeSlide + 1 : 0;

        this.setState({
            activeSlide: slide
        });
    }

    render() {
        return (
            <>
                <div className="slider">
                    <div className="slider__box">
                        {this.props.children.map((child: string, index: number) =>
                            <Box active={index === this.state.activeSlide}>
                                {child}
                            </Box>
                        )}
                    </div>

                    <div className="slider__dots">

                        {this.props.children.map((child: string, index: number) =>
                            <div className="dots" key={index}
                                 data-index={index} onClick={this.dotOnClick}>

                                {index === this.state.activeSlide ? "◉" : "◌"}
                            </div>)}
                    </div>
                </div>

                <div className='buttons-box'>
                    <div onClick={this.nextSlide.bind(this)}>
                        <button> next</button>
                    </div>
                    <div onClick={this.prevSlide.bind(this)}>
                        <button> prev</button>
                    </div>
                </div>
            </>
        );
    }
}