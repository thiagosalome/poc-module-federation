import { Box, Container } from '@chakra-ui/layout';
import React from 'react';
import Loading from 'src/components/Loading';

// @ts-ignore
const BooksList = React.lazy(() => import('books_application/BooksList'))

const Books = () => {
  return (
    <Box as='section'>
      <Container maxW='container.lg'>
        <React.Suspense fallback={<Loading />}>
          <BooksList />
        </React.Suspense>
      </Container>
    </Box>
  )
}

export default Books;