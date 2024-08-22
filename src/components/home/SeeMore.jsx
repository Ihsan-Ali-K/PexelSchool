import React from 'react'
import "./SeeMore.scss"
import { Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
const SeeMore = () => {
  const {t} = useTranslation('home')

  return (
    <div className='container big-button p-5 d-flex justify-content-center'>
        <Button className='button' href='/staff' >{t('seeMore')}</Button>
    </div>
  )
}

export default SeeMore