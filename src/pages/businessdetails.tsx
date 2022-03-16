import Buttons from '../components/buttons'
import CreateAccount from '../components/createAccount'
import BusinessDetailForm from '../createAccountForms/businessDetailForm'
const BusinessDetails = () => {
  return (
    <div>
      <CreateAccount
        actionType="Create account"
        actionDescription="Create your account in a few simple steps and start enjoying uninterrupted enterprise bookings and services management."
        enterDetails="Business details"
        basicDetails="Some basic details to get started."
        loginButton={
          <Buttons
            type="submit"
            description="Go to Login"
            background="#666670"
            width="100%"
            height="65px"
            fontSize="14px"
            color="#ffffff"
          />
        }
        form={<BusinessDetailForm />}
      />
    </div>
  )
}

export default BusinessDetails
