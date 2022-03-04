import CreateAccount from '../Components/createAccount'
import BusinessDetailForm from '../Components/createAccountForms/BusinessDetailForm'
const BusinessDetails = () => {
  return (
    <div>
      <CreateAccount
        actionType="Create account"
        actionDescription="Create your account in a few simple steps and start enjoying uninterrupted enterprise bookings and services management."
        enterDetails="Business details"
        basicDetails="Some basic details to get started."
        form={<BusinessDetailForm />}
      />
    </div>
  )
}

export default BusinessDetails
