import React from "react";
import './Slide.css'

interface IProps {
    srcImage?: string;
    children?: React.ReactNode;
}

export const Slide: React.FC<IProps> = (props: IProps) => {
    const srcImage = props.srcImage;
    const {children} = props;

    return (
        <div className='slide'>
            <img className='slide-image' src={srcImage}/>
            {children}
        </div>
    );
}