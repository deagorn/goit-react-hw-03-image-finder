import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import React from 'react'
import s from './ImageGallery.module.css'

export const ImageGallery = ({images, openModal}) => {
    return (
        <ul className={s.gallery}>
            {images.map(image => <ImageGalleryItem key={image.id} {...image} openModal={openModal}/>)}
           
        </ul>
    );
}


