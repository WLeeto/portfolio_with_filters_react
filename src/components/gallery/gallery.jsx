import React from 'react'
import { useState } from 'react';
import './gallery.css'

export const PhotoGallery = ({ data }) => {

    let filteredData = data

    const categories = ["All", ...new Set(data.map(item => item.category))]
    const [activeFilter, setActiveFilter] = useState(null)

    const handleFilter = (category) => {
        setActiveFilter(category === activeFilter ? null : category)
    }

    if (activeFilter && activeFilter !== 'All') {
        filteredData = data.filter(item => item.category === activeFilter)
    }

  return (
    <div>
        <div className='filter-block'>
            {categories.map(category => (
                <div
                 className={`filter ${category === activeFilter ? 'active' : ''}`} 
                 onClick={() => handleFilter(category)}>
                    {category}
                </div>
            ))}
        </div>

        <div className='photo-gallery'>
            {filteredData.map((image, index) => (
                <img key={index} src={image.img} />
            ))}
        </div>
    </div>
  )
}