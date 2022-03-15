import { Box } from '@chakra-ui/react'
import React from 'react'
import CreateAccount from '../Components/createAccount'
import BusinesSocialsForm from '../Components/createAccountForms/BusinesSocialsForm'
import ProgressBar from '../Components/createAccountForms/ProgressBar'

const businesssocials = () => {
  return (
    <div>
      <Box>
        <CreateAccount
          actionType="Business Information"
          actionDescription="Create your account in a few simple steps and start enjoying uninterrupted enterprise bookings and services management."
          basicDetails="Welcome to hightable, complete the follow information to get fully setup."
          progressBar={
            <ProgressBar businessName="Ichiraku Ramen Arigato" width="40%" />
          }
          form={<BusinesSocialsForm />}
        />
      </Box>
    </div>
  )
}

export default businesssocials
