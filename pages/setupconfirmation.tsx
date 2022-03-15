import React from 'react'
import CreateAccount from '../Components/createAccount'
import ProgressBar from '../Components/createAccountForms/ProgressBar'
import SetupConfirmation from '../Components/createAccountForms/SetupConfirmation'

const setupconfirmation = () => {
  return (
    <div>
      <CreateAccount
        actionType="Setup Complete"
        actionDescription="Create your account in a few simple steps and start enjoying uninterrupted enterprise bookings and services management."
        form={<SetupConfirmation />}
      />
    </div>
  )
}

export default setupconfirmation
