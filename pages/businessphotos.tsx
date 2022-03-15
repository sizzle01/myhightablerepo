import React from 'react'
import CreateAccount from '../Components/createAccount'
import BusinessPhotos from '../Components/createAccountForms/BusinessPhotos'
import ProgressBar from '../Components/createAccountForms/ProgressBar'

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
