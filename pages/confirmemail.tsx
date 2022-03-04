import CreateAccount from '../Components/createAccount'
import Confirmation from '../Components/createAccountForms/Confirmation'

const ConfirmEmail = () => {
  return (
    <div>
      <CreateAccount
        actionType="Create account"
        actionDescription="Create your account in a few simple steps and start enjoying uninterrupted enterprise bookings and services management."
        enterDetails="Confirm email"
        basicDetails="Please enter the code that was sent to your email or use the magic link in the email to confirm that it’s your email."
        form={<Confirmation />}
      />
    </div>
  )
}

export default ConfirmEmail
