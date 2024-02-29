import React from 'react'
import s from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({webformatURL, largeImageURL, id, tags, openModal}) => {
    return (
        <li className={s.gallery_item} onClick={() => openModal({ id, tags, largeImageURL })}>
            <img src={webformatURL} alt={tags} />
        </li>
    );
}



