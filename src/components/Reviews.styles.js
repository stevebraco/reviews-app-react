import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #061237;
  overflow-x: hidden;
  padding: 1rem;
  @media screen and (max-width: 940px) {
    height: initial;
  }
 
`;

export const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 940px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 500px) {
      font-size: 1.2rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 2rem;
  @media screen and (max-width: 500px) {
      font-size: .8rem;
    line-height: 1.5rem;

  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 7rem;
  @media screen and (max-width: 940px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const Content = styled.div`
  max-width: 600px;
  color: whitesmoke;
  @media screen and (max-width: 940px) {
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const WrapperImg = styled.div`
  position: relative;
  height: 100%;
  z-index: 1;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #1455FE;
    display: block;
    top: -40px;
    right: -100px;
    z-index: -1;
  }
  `;

export const Img = styled.img`
  width: 400px;
  height: 600px;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  position: absolute;
  padding: 1.5rem;
  width: 250px;
  height: 200px;
  left: -40px;
  bottom: -20px;
  background: #fff;
  @media screen and (max-width: 500px) {
    bottom: 0;
    right: 0;
    left: 0;
  }
`;

export const InfoTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  padding-bottom: .4rem;
`;

export const InfoJob = styled.p`
  padding-bottom: .4rem;
  color: #858484;
`;

export const Description = styled.p`
  font-size: .8rem;
  line-height: 1.4rem;
`;

export const ContainerButton = styled.div`
padding: .5rem 0;
  text-align: center;
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
`;
