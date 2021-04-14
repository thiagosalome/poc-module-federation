import React, { useEffect, useState } from 'react';
import { Flex, Grid } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';

// Components
import Author from 'src/components/Author';

// Services
import api from 'src/services/api'

// Types
import AuthorProps from 'src/types/Author'

const AuthorList = () => {
  const [authors, setAuthors] = useState<AuthorProps[]>()

  useEffect(() => {
    async function fetchAuthors () {
      const { data } = await api.get('/persons?_quantity=20')
      const AuthorsWithRating = data.data.map((Author: AuthorProps) => ({
        ...Author,
        rating: Math.random() * (100 - 50) + 50,
      }))
      setAuthors(AuthorsWithRating)
    }

    if (!authors) {
      fetchAuthors()
    }
  }, [authors])

  if (!authors) {
    return (
      <Flex minH='100vh' justifyContent='center' alignItems='center'>
        <Spinner color='blue.600' />
      </Flex>
    )
  }

  return (
    <Grid templateColumns='repeat(auto-fit, minmax(230px, 1fr))' gap={6} py='4'>
      {
        authors.map((author) => (
          <Author key={author.phone} author={author} />
        ))
      }
    </Grid>
  )
}

export default AuthorList;