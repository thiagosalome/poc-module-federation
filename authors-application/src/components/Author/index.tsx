import React from 'react';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { IconButton } from '@chakra-ui/button';
import { CgWebsite } from 'react-icons/cg'

// Types
import AuthorProps from 'src/types/Author'

type AuthorComponentProps = {
  author: AuthorProps
}

const Author = ({ author }: AuthorComponentProps) => {
  const { firstname, lastname, image, website, email, phone } = author
  const colors = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple']
  const variants = [100, 200, 300, 400, 500, 600, 700, 800]
  const randomIndex = Math.floor(Math.random() * (8 - 0))
  const boxColor = `${colors[randomIndex]}.${variants[randomIndex]}`
  return (
    <Box bg='white' rounded='xl' overflow='hidden' boxShadow='1px 1px 10px #cccccc'>
      <Box bg={boxColor} h='80px' w='full' />
      <Flex mt='-35px' px='2' alignItems='center' justifyContent='space-between'>
        <Box as='figure' boxSize='70px' bg='white' rounded='full' p='1' border='2px solid black'>
          <Image rounded='full' h='full' w='full' objectFit='cover' fallbackSrc="https://via.placeholder.com/50" src={image} alt={firstname} />
        </Box>
        <Link href={website} isExternal>
          <IconButton
            colorScheme='gray'
            color='gray.600'
            rounded='full'
            aria-label='Access website'
            icon={<CgWebsite />}
          />
        </Link>
      </Flex>
      <Box mt='2' p='2.5'>
        <Heading as='h3' size='xs' mb='1'>{`${firstname} ${lastname}`}</Heading>
        <Text color='gray.600' fontSize='xs' mb='2'>{email}</Text>
        <Text color='gray.500' fontSize='xs' mt='3'>{phone}</Text>
      </Box>
    </Box>
  )
}

export default Author;