import React from 'react';
import { Flex, Spinner } from '@chakra-ui/react'

const Loading = () => {
  return (
    <Flex minH='100vh' justifyContent='center' alignItems='center'>
      <Spinner color='red.600' />
    </Flex>
  )
}

export default Loading;