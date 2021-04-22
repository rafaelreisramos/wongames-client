import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'

import * as S from './styles'

export type FormProfileProps = {
  username?: string
  email?: string
}

const FormProfile = ({ username, email }: FormProfileProps) => (
  <S.Container>
    <Heading lineBottom size="small" color="black">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="username"
        label="Username"
        placeholder="Username"
        initialValue={username}
      />

      <TextField
        type="email"
        name="email"
        label="E-mail"
        placeholder="E-mail"
        initialValue={email}
        disabled
      />

      <TextField
        type="password"
        name="password"
        label="Password"
        placeholder="Type your password"
      />

      <TextField
        type="password"
        name="new_password"
        label="New Password"
        placeholder="New password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </S.Container>
)

export default FormProfile
