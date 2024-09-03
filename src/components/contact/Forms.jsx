import React from 'react'
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';

const Forms = () => {
  const {t} = useTranslation('contact')
  return (
    <Form>
      <div className='d-flex'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{t('firstNameLabel')}  </Form.Label>
        <Form.Control type="text" placeholder={t('firstNamePlaceholder')} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{t('lastNameLabel')} </Form.Label>
        <Form.Control type="text" placeholder={t('lastNamePlaceholder')}/>
      </Form.Group>
      </div>
     
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{t('emailLabel')} </Form.Label>
        <Form.Control type="email" placeholder={t('emailPlaceholder')} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{t('messageLabel')} </Form.Label>
        <Form.Control as="textarea" rows={6} />
      </Form.Group>
    </Form>
  )
}

export default Forms