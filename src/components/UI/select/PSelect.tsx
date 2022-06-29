import React from "react";
import styles from "./PSelect.module.css"

const PSelect = ({options, defaultValue, value, onChange}:any) => {
    return (
        <select
            className={styles.pSel}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled={true} value="">{defaultValue}</option>
            {options.map((option: { value: string; name: string; }) =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default PSelect;
