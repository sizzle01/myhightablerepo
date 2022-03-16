import React from 'react'
import CreateAccount from '../createAccountForms/components/createAccount'
import BusinessSpeciality from '../createAccountForms/businessSpeciality'

const businessspeciality = () => {
  return (
    <div>
      <CreateAccount
        actionType="Create account"
        actionDescription="Create your account in a few simple steps and start enjoying uninterrupted enterprise bookings and services management."
        form={<BusinessSpeciality />}
      />
    </div>
  )
}

export default businessspeciality
