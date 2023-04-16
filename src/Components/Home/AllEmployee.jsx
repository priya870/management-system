import { Box,   Grid , Button , Text} from '@chakra-ui/react'
import React, { useContext } from 'react'
import EmployeeCard from './EmployeeCars'
import { AppContext } from '../../Context/AppContext'

const AllEmployee = () => {
  const {data,titleSortBy,settitleSortBy,totalProduct,limit,page,FilterBy,setFilterBy,FilterByGender,setFilterByGender} = useContext(AppContext)
  return (
    <Box>
    <Text fontWeight={"bold"} mt={1} fontSize={32} textDecoration={"underline"} w={"50%"} m={"auto"} borderRadius={10} fontFamily={"monospace"}>Employee <span style = {{color:"#DE4C71"}}> Management </span>System</Text>
   
      <Grid gridTemplateColumns={"repeat(2,1fr)"}>
      {
        data?.map((el)=>(
          <EmployeeCard data={el} key={el.id}/>
        ))
      }
      </Grid>

      <Button>SortByName</Button>
      <Button>SortByGender</Button>
      
    
    </Box>
  )
}

export default AllEmployee