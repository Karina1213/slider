import React from "react";
import './Box.css'

interface IProps {
    active?: boolean;
    children?: React.ReactNode;
}

export const Box: React.FC<IProps> = (props: IProps) => {
    const {children} = props;

    const renderBox = props.active ?
        <div className="box" data-active={props.active}>
            {children}
        </div> : null

    return (
        <>
            {renderBox}
        </>
    );
}