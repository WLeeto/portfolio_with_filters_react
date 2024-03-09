import './filters.css'
import React from 'react'
import { useState } from 'react';


export const Filters = (props) => {
    const filterName = props.name.replace(/\s+/, '_')
    const [active, setActive] = useState(false)

    const handleFilterChange = () => {
        setActive(!active)
    }

    return (
        <div className={`filter ${filterName} ${active ? 'active' : ''}`} onClick={handleFilterChange}>
            {props.name}
        </div>
    )
}
