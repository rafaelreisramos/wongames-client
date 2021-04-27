import Auth from 'templates/Auth'
import FormResetPassword from 'components/FormResetPassword'

export default function ForgotPassword() {
  return (
    <Auth title="Reset password">
      <FormResetPassword />
    </Auth>
  )
}
