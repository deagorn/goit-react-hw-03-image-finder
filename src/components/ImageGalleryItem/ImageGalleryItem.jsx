import React from 'react'
import s from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({webformatURL, largeImageURL, id, tags}) => {
    return (
        <li className={s.gallery_item}>
            <img src={webformatURL} alt={tags} />
        </li>
    );
}



