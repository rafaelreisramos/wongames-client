import Image from 'next/image'
import { Download } from '@styled-icons/boxicons-solid'
import { useCart } from 'hooks/use-cart'

import * as S from './styles'

export type PaymentInfoProps = {
  number: string
  flag: string | null
  img: string | null
  purchaseDate: string
}

export type GameItemProps = {
  id: string
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
  as?: React.ElementType
}

const GameItem = ({
  id,
  img,
  title,
  price,
  downloadLink,
  paymentInfo,
  ...props
}: GameItemProps) => {
  const { isInCart, removeFromCart } = useCart()

  return (
    <S.Container data-cy="game-item" {...props}>
      <S.GameContent>
        <S.ImageBox>
          <Image src={img} alt={title} layout="fill" objectFit="cover" />
        </S.ImageBox>

        <S.Content>
          <S.Title>
            {title}
            {!!downloadLink && (
              <S.DownloadLink
                href={downloadLink}
                target="_blank"
                aria-label={`Get ${title} here`}
              >
                <Download size={22} />
              </S.DownloadLink>
            )}
          </S.Title>
          <S.Group>
            <S.Price>{price}</S.Price>
            {isInCart(id) && (
              <S.Remove onClick={() => removeFromCart(id)}>Remove</S.Remove>
            )}
          </S.Group>
        </S.Content>
      </S.GameContent>

      {!!paymentInfo && (
        <S.PaymentContent>
          <p>{paymentInfo.purchaseDate}</p>
          <S.CardInfo>
            <span>{paymentInfo.number}</span>
            {!!paymentInfo.img && !!paymentInfo.flag && (
              <Image
                src={paymentInfo.img}
                alt={paymentInfo.flag}
                width={38}
                height={24}
              />
            )}
          </S.CardInfo>
        </S.PaymentContent>
      )}
    </S.Container>
  )
}

export default GameItem
