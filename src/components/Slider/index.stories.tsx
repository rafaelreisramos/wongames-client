import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'

import Slider, { SliderSettings } from '.'

export default {
  title: 'Slider',
  component: Slider
} as Meta

const Slide = styled.div`
  background: lightgray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid darkgray;
  text-align: center;
`

const horizontalSettings: SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

export const Horizontal: Story = () => (
  <Slider settings={horizontalSettings}>
    <Slide>Slide 1</Slide>
    <Slide>Slide 2</Slide>
    <Slide>Slide 3</Slide>
    <Slide>Slide 4</Slide>
  </Slider>
)

const verticalSettings: SliderSettings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

export const Vertical: Story = () => (
  <Slider settings={verticalSettings}>
    <Slide>Slide 1</Slide>
    <Slide>Slide 2</Slide>
    <Slide>Slide 3</Slide>
    <Slide>Slide 4</Slide>
  </Slider>
)
