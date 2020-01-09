import React from "react";

interface EmptyPreloader {
    title: string
}
export const EmptyPreloader: React.FC<EmptyPreloader> = ({title}) => {
    return (
        <React.Fragment>
            <div className='center-align'>{title}</div>
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
        </React.Fragment>
    )
}