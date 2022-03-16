import React from 'react'
import CreateAccount from '../components/createAccount'
import BusinessPhotos from '../createAccountForms/businessPhotos'
import ProgressBar from '../createAccountForms/progressBar'

const businessphotos = () => {
  return (
    <div>
      <CreateAccount
        actionType="Business Information"
        actionDescription="Create your account in a few simple steps and start enjoying uninterrupted enterprise bookings and services management."
        form={<BusinessPhotos />}
      />
    </div>
  )
}

export default businessphotos
