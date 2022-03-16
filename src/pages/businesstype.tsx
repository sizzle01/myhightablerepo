import React from 'react'
import CreateAccount from '../createAccountForms/components/createAccount'
import BusinessInfo from '../createAccountForms/businessInfo'
import ProgressBar from '../createAccountForms/progressBar'

const Businesstype = () => {
  return (
    <div>
      <CreateAccount
        actionType="Business Information"
        actionDescription="Create your account in a few simple steps and start enjoying uninterrupted enterprise bookings and services management."
        basicDetails="Welcome to hightable, complete the follow information to get fully setup."
        progressBar={
          <ProgressBar businessName="Ichiraku Ramen Arigato" width="20%" />
        }
        form={<BusinessInfo />}
      />
    </div>
  )
}

export default Businesstype
