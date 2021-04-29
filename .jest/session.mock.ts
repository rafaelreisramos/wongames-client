// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
const session = {
  accessToken: 'token',
  user: { email: 'joe.doe@email.com' }
}
useSession.mockImplementation(() => [session])
