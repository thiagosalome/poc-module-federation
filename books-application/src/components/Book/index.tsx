import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

// Types
import BookProps from 'src/types/book'

type BookComponentProps = {
  book: BookProps
}

const Book = ({ book }: BookComponentProps) => {
  const { image, title, author, published, rating } = book
  const formattedPublished = new Intl.DateTimeFormat('pt-BR').format(new Date(published))

  return (
    <Flex bg='white' rounded='xl' boxShadow='1px 1px 10px #cccccc' p='2.5'>
      <Box as='figure' w='100px' h='full'>
        <Image h='full' w='full' objectFit='cover' rounded='xl' fallbackSrc="https://via.placeholder.com/100" src={image} alt={title} />
      </Box>
      <Box ml='2'>
        <Heading as='h3' size='xs' mb='1'>{title}</Heading>
        <Text color='gray.600' fontSize='xs' mb='2'>{author}</Text>
        <span
          style={{
            backgroundImage: `linear-gradient(90deg, #2B6CB0 ${rating}%, #cccccc ${100 - rating}%)`,
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text'
          }}
        >
          ★★★★★
        </span>
        <Text color='gray.500' fontSize='xs' mt='3'>{formattedPublished}</Text>
      </Box>
    </Flex>
  )
}

export default Book;