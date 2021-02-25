import Link from 'next/link'

import Logo from 'components/Logo'
import Heading from 'components/Heading'

import * as S from './styles'

const Footer = () => (
  <S.Container>
    <Logo color="black" />

    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>

        <a href="mailto:">sac@wongames.com</a>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow Us
        </Heading>

        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www..com"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/games">Home</Link>
          <Link href="/games">Store</Link>
          <Link href="/search">Buscar</Link>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>
        <span>Nome da rua</span>
        <span>CEP da localidade</span>
        <span>Cidade, País</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Won Games 2020 All rights reserved.</S.Copyright>
  </S.Container>
)

export default Footer
