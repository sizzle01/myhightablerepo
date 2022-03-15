import Buttons from '../Components/Buttons'
import CreateAccount from '../Components/createAccount'
import UserDetailsForm from '../Components/createAccountForms/userDetailsForm'

const userdetails = () => {
  return (
    <div>
      <CreateAccount
        actionType="Create account"
        actionDescription="Create your account in a few simple steps and start enjoying uninterrupted enterprise bookings and services management."
        enterDetails="Enter your details"
        basicDetails="Some basic details to get started."
        loginButton={
          <Buttons
            description="Go to Login"
            background="#666670"
            width="100%"
            height="65px"
            fontSize="14px"
            color="#ffffff"
          />
        }
        form={<UserDetailsForm />}
      />
    </div>
  )
}

export default userdetails
