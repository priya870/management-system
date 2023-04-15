import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import EmployeeCard from './EmployeeCars'
import { AppContext } from '../../Context/AppContext'

const AllEmployee = () => {
  const {data,titleSortBy,settitleSortBy,totalProduct,limit,page,FilterBy,setFilterBy,FilterByGender,setFilterByGender} = useContext(AppContext)
  return (
    <Box>
    <Text fontWeight={"bold"} mt={1} fontSize={30} border={"1px solid black"} w={"50%"} m={"auto"} borderRadius={10} fontStyle={"italic"}>Employee management system</Text>
    <SimpleGrid w="full" columns={[1,2]} spacing={5}>
      {
        data?.map((el)=>(
          <EmployeeCard data={el} key={el.id}/>
        ))
      }
    </SimpleGrid>
    </Box>
  )
}

export default AllEmployee