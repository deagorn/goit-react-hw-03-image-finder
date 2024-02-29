import React from 'react'
import s from './Button.module.css'

export const Button = ({onClick}) => {
  return (
      <button onClick={onClick} className={s.button}>Load more</button>
  )
}
