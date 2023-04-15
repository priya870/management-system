import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
// import { Link } from 'react-router-dom' 
import { AppContext } from '../../Context/AppContext'

const EmployeeCard = ({data}) => {
    const {handleDelete,handleEditData,updateButton,setUpdateButton,setEditedId} = useContext(AppContext)
    
    const manageEdit = () =>{
      handleEditData(data.id);
      setEditedId(data.id)
      setUpdateButton(!updateButton)
    }



  return (
  <Box w = {"98%"} m = {"auto"} border = {"1px solid black"} mt = {"5%"} h = {"500px"}>
            <Flex>
            <Box w = {"50%"}  border = {"1px solid red"}>
                <Flex gap = {"1%"}>
                    <Box w = {"60%"} border = {"1px solid blue"}>
                        <Text>{data.name}</Text>
                        <Text>{data.number}</Text>
                        <Text>{data.salary}</Text>
                      
                        <Button onClick={()=>handleDelete(data.id)}>Delete</Button>
                        <Button onClick={manageEdit}>Edit</Button>
                        <Button>View More</Button>
                    </Box>
                    <Box w = {"60%"} border = {"1px solid blue"}>
                      <Image src = {data.image}/>
                    </Box>
                </Flex>
            </Box>
        </Flex>
  
    
    
    
  </Box>
  )
}

export default EmployeeCard