import * as React from "react"
import {
  ChakraProvider,
  theme,
  Box,
  Container,
} from "@chakra-ui/react"
import BookList from "./components/BookList"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box as='section'>
      <Container maxW='container.lg'>
        <BookList />
      </Container>
    </Box>
  </ChakraProvider>
)
