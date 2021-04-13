import React, { useEffect, useState } from 'react';
import { Flex, Grid } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';

// Components
import Book from 'src/components/Book';

// Services
import api from 'src/services/api'

// Types
import BookProps from 'src/types/book'

const BookList = () => {
  const [books, setBooks] = useState<BookProps[]>()

  useEffect(() => {
    async function fetchBooks () {
      const { data } = await api.get('/books?_quantity=20')
      const booksWithRating = data.data.map((book: BookProps) => ({
        ...book,
        rating: Math.random() * (100 - 50) + 50,
      }))
      setBooks(booksWithRating)
    }

    if (!books) {
      fetchBooks()
    }
  }, [books])

  if (!books) {
    return (
      <Flex minH='100vh' justifyContent='center' alignItems='center'>
        <Spinner color='blue.600' />
      </Flex>
    )
  }

  return (
    <Grid templateColumns='repeat(auto-fit, minmax(230px, 1fr))' gap={6} py='4'>
      {
        books.map((book) => (
          <Book key={book.isbn} book={book} />
        ))
      }
    </Grid>
  )
}

export default BookList;