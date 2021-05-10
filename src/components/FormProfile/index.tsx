import Link from 'next/link'

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

      <S.ButtonsContainer>
        <Link href={`/forgot-password?email=${email}`} passHref>
          <Button minimal size="medium" as="a">
            Reset password
          </Button>
        </Link>

        <Button size="medium" aria-label="save">
          Save
        </Button>
      </S.ButtonsContainer>
    </S.Form>
  </S.Container>
)

export default FormProfile
