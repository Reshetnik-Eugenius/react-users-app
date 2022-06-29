import React from "react";
import style from "./PModal.module.css";

const PModal = ({children, visible, setVisible}:any) => {

    const rootClasses = [style.pModal];
    if(visible) {
        rootClasses.push(style.active);
    }

    return (
        <div 
            className={rootClasses.join(' ')}
            onClick={()=>setVisible(false)
        }>
            <div 
                className={style.pModalContent}
                onClick={(event)=>event.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default PModal;
