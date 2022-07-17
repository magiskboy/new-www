import { NextPage } from 'next'
import Head from 'next/head';
import Link, { LinkProps } from 'next/link';
import { Container, Flex, Text } from '@chakra-ui/react'

const Homepage: NextPage = () => {
  return <>
    <Head>
      <title>Homepage</title>
    </Head>
    <Container pt={4}>
      <Flex justify="space-evenly">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/categories" isActive>Categories</NavItem>
        <NavItem href="/tags">Tags</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/bio">Bio</NavItem>
      </Flex>
    </Container>
  </>
}

const NavItem: React.FC<LinkProps & { children: React.ReactNode, isActive?: boolean }> = ({ children, isActive, ...rest }) => {
  return <Link {...rest} passHref>
    <Text as="a" fontFamily="Open Sans, san-serif" fontWeight={isActive ? 600 : 400} textDecoration={isActive ? 'underline' : 'none'}>{children}</Text>
  </Link>
}

export default Homepage;
