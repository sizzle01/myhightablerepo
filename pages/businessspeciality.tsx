import React from 'react'
import CreateAccount from '../Components/createAccount'
import BusinessSpeciality from '../Components/createAccountForms/BusinessSpeciality'

const businessspeciality = () => {
  return (
    <div>
      <CreateAccount
        actionType="Create account"
        actionDescription="Create your account in a few simple steps and start enjoying uninterrupted enterprise bookings and services management."
        form={<BusinessSpeciality name="Ichiraku Ramen Arigato" />}
      />
    </div>
  )
}

export default businessspeciality
