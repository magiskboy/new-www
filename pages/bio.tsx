import React, { useRef, useEffect } from 'react';
import { Text, Button, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Head from 'next/head'
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
    }, 500);
  }, []);

  return <>
    <Head>
      <title>Nguyen Khac Thanh - Bio Information</title>
    </Head>
    <Flex h="100vh" bgImg={backgroundImg.src} bgPos="center" justify="center" pt={4} minW="100%">
      <Flex ref={mainRef} direction="column" align="center" opacity={0} filter="blur(10px)" transition="opacity 1s ease-in-out, filter 1s ease-in-out" w="100%" maxW="400px">
        <Avatar src={avatarImg} width={120} height={120} layout="fixed" />
        <Text as="h5" padding="0.25rem 0.75rem" color="white" bgColor="blackAlpha.500" fontFamily="Open Sans, san-serif" fontSize="1.1rem" m="1rem 0 4rem 0" borderRadius="1rem" border="1px solid white" backdropBlur={2} fontWeight={600}>@mag1skboy</Text>
        <Flex direction="column" w="100%" gap={4}>
          <ContactButton href="https://nkthanh.dev" icon={<Image src={websiteIcon} alt="Official Website" />} text="Official Website" />
          <ContactButton href="https://github.com/magiskboy" icon={<Image src={githubIcon} alt="Github" />} text="Github" />
          <ContactButton href="https://twitter.com/mag1skboy" icon={<Image src={twitterIcon} alt="Twitter" />} text="Twitter" />
          <ContactButton href="https://www.linkedin.com/in/thanh-nguyen-khac" icon={<Image src={linkedinIcon} alt="LinkedIn" />} text="LinkedIn" />
        </Flex>
      </Flex>
    </Flex>
  </>
}

const ContactButton: React.FC<{ href: string, icon: React.ReactElement, text: string }> = ({ href, icon, text }) => (
  <Button as="a" href={href} target="_blank" display="flex" justifyContent="center" gap="0.7rem" w="100%" padding="1.5rem 0" borderRadius="2rem" bgColor="rgba(255,255,255,0.8)" backdropBlur={2} fontFamily="Open Sans, san-serif">{icon}{text}</Button>
)

const Avatar = styled(Image)`
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.8);
`;

export default BioPage;
