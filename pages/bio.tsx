import React, { useRef, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image'
import styled from '@emotion/styled';
import avatarImg from '../images/avatar.jpg';
import backgroundImg from '../images/background.jpg';
import websiteIcon from '../images/website.png';
import linkedinIcon from '../images/linkedin.png';
import githubIcon from '../images/github.png';
import twitterIcon from '../images/twitter.png';

const BioPage: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      mainRef.current.style.opacity = '1';
      mainRef.current.style.filter = 'blur(0px)';
    }, 1000);
  }, [mainRef.current]);

  return <Page>
    <Wrapper ref={mainRef}>
      <Avatar src={avatarImg} width={120} height={120} layout="fixed" />
      <Nickname>@mag1skboy</Nickname>
      <ContactContainer>
        <ContactButton><a href="https://nkthanh.dev" target="_blank"><Icon src={websiteIcon} />Official Website</a></ContactButton>
        <ContactButton><a href="https://github.com/magiskboy" target="_blank"><Icon src={githubIcon} />Github</a></ContactButton>
        <ContactButton><a href="https://twitter.com/mag1skboy" target="_blank"><Icon src={twitterIcon} />Twitter</a></ContactButton>
        <ContactButton><a href="https://www.linkedin.com/in/thanh-nguyen-khac" target="_blank"><Icon src={linkedinIcon} />LinkedIn</a></ContactButton>
      </ContactContainer>
    </Wrapper>
  </Page>
}

const Page = styled.div`
  background-image: url(${backgroundImg.src});
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  padding: 2rem 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  filter: blur(10px);
  transition: opacity 2s ease-in-out, filter 2s ease-in-out;
`;

const Nickname = styled.h5`
  background-color: rgba(2, 0, 0, 0.4);
  backdrop-filter: blur(7px);
  color: white;
  font-size: 1.1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.7);
  font-weight: 600;
  font-size: 1rem;
  font-family: Open Sans, san-serif;
  margin: 1rem 0 4rem 0;
`;

const ContactContainer = styled.ul`
  display: block;
  width: 70vw;
`;

const ContactButton = styled.li`
  border-radius: 2.5rem;
  margin: 1.5rem 0;
  list-style-type: none;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;

  a {
    width: 100%;
    color: black;
    display: flex;
    justify-content: center;
    padding: 0.8rem 0;
    text-align: center;
    font-size: 1rem;
    font-family: Open Sans, san-serif;
    margin-left: 0.5rem;
    gap: 0.5rem;
  }
`;

const Avatar = styled(Image)`
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.8);
`;

const Icon = ({ src }: { src: StaticImageData }) => {
  const defaultIconSize = 24;
  return <Image src={src} width={defaultIconSize} height={defaultIconSize} layout="fixed" style={{ display: 'block' }} />
}

export default BioPage;
