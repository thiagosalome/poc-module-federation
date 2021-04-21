import React from 'react';
import { Link as ReactLink } from 'react-router-dom'
import { Container, Grid, Heading, Link } from '@chakra-ui/layout';
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from 'react-icons/ai'

const Home = () => {
  return (
    <Container maxW='2xl' minH='100vh' display='flex' alignItems='center' justifyContent='center'>
      <Grid templateColumns='repeat(auto-fit, minmax(150px, 1fr))' gap='5' p='4' w='full'>
        <Link as={ReactLink} to='/' bg='white' textDecoration='none' rounded='10px' cursor='pointer' display='flex' flexDirection='column' alignItems='center' boxShadow='1px 1px 10px #cccccc' p='5'>
          <AiOutlineHome size='24px' color='#4A5568' />
          <Heading as='h3' size='sm' mt='5' mb='0' color='gray.600'>Home</Heading>
        </Link>
        <Link as={ReactLink} to='/authors' bg='white' textDecoration='none' rounded='10px' cursor='pointer' display='flex' flexDirection='column' alignItems='center' boxShadow='1px 1px 10px #cccccc' p='5'>
          <AiOutlineUser size='24px' color='#4A5568' />
          <Heading as='h3' size='sm' mt='5' mb='0' color='gray.600'>Autores</Heading>
        </Link>
        <Link as={ReactLink} to='/books' bg='white' textDecoration='none' rounded='10px' cursor='pointer' display='flex' flexDirection='column' alignItems='center' boxShadow='1px 1px 10px #cccccc' p='5'>
          <AiOutlineBook size='24px' color='#4A5568' />
          <Heading as='h3' size='sm' mt='5' mb='0' color='gray.600'>Livros</Heading>
        </Link>
      </Grid>
    </Container>
  )
}

export default Home;