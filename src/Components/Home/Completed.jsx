import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import FormDetail from './FormDetail'
import AllEmployee from './AllEmployee'

const Completed = () => {
  return (
    <Flex w={"100%"} gap={"1%"} mt={"5px"}>
        <Box w={"30%"}>
       <FormDetail /> 
        </Box>
        <Box w={"70%"} border={"1px solid red"} textAlign={"center"} borderRadius={20}>
       <AllEmployee />
        </Box>
    </Flex>
  )
}

export default Completed