import { Box, Container } from '@chakra-ui/layout';
import React from 'react';
import Loading from 'src/components/Loading'
// @ts-ignore
const AuthorsList = React.lazy(() => import('authors_application/AuthorsList'))

const Authors = () => {
  return (
    <Box as='section'>
      <Container maxW='container.lg'>
        <React.Suspense fallback={<Loading />}>
          <AuthorsList />
        </React.Suspense>
      </Container>
    </Box>
  )
}

export default Authors;