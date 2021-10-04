import React, { useState } from 'react'
import { Container, Content, Flex, Img, Paragraph, Title, WrapperImg, InfoContainer, Description, InfoTitle, InfoJob, ContainerButton, Button } from './Reviews.styles';
import { data } from '../data'
import { FcNext, FcPrevious } from 'react-icons/fc'

const Reviews = () => {
  const [index, setIndex] = useState(0)

  const handleNext = () => {
    setIndex((oldIndex) => oldIndex + 1)
    if( index === data.length - 1) {
      setIndex(0)
    }
  }
  const handlePrev = () => {
    setIndex((oldIndex) => oldIndex - 1)
    if( index === 0) {
      setIndex(data.length - 1)
    }
  }
  return (
    <Container>
    <Flex>
    <Content>
      <Title>Join Our Team</Title>
      <Paragraph>We are technologists, designers, marketers, and educators but first and foremost, we are friends and colleagues. Our mission is to help make people's lives happier, more successful and enjoyable by making their businesses run faster and easier</Paragraph>
    </Content>
    <WrapperImg>
    <Img src={data[index].img} alt={data[index].name} />
    <InfoContainer>
      <InfoTitle>{data[index].name} from {data[index].city}</InfoTitle>
      <InfoJob>{data[index].job}</InfoJob>
      <Description>{data[index].description}</Description>
      <ContainerButton>
        <Button onClick={handlePrev}> <FcPrevious /> </Button>
        <Button onClick={handleNext}> <FcNext /> </Button>
      </ContainerButton>
    </InfoContainer>
    </WrapperImg>
    </Flex>
  </Container>
  )
}

export default Reviews
