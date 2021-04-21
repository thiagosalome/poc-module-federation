import * as React from "react"
import {
  ChakraProvider,
  theme,
  Box,
  Container,
} from "@chakra-ui/react"
import AuthorList from "./components/AuthorsList"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box as='section'>
      <Container maxW='container.lg'>
        <AuthorList />
      </Container>
    </Box>
  </ChakraProvider>
)
