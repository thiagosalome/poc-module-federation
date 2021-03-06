import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Routes from "./routes"

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  )
}
