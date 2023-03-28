import React from 'react'

export const ButtonUI = ({typeBtn,style, text}) => {
  return (
    <button type={typeBtn} className={style}>{text}</button>
  )
}
