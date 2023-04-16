import { Box, Button, Flex, Image, Text,} from '@chakra-ui/react'
import React, { useContext } from 'react'
import {AiFillDelete ,AiOutlineEdit ,AiOutlineArrowsAlt} from "react-icons/ai";
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
  <Box w = {"98%"} m = {"auto"} mt = {"5%"} boxShadow={"lg"} borderRadius={"15px"} border={"1px solid black"} p = {'10px'}>
            
            <Box >
                <Flex gap = {"1%"}>
                    <Box w = {"60%"} p = "10px">
                        <Text fontSize={"22px"} fontFamily={"monospace"} fontWeight={"600"}  >{data.name}</Text>
                        <Text fontSize={"20px"} fontFamily={"monospace"}  >{data.number}</Text>
                        <Text fontSize={"20px"} fontFamily={"monospace"} >{data.salary}</Text>
                        <Text fontSize={"20px"} fontFamily={"cursive"} fontWeight={"bold"}   color={"#DE4C71"}>{data.department}</Text>  
                        <Button onClick={()=>handleDelete(data.id)}mr = {"12px"} color = {"black"}><AiFillDelete color = {"black"} fontSize={"18"} />Delete</Button>
                        <Button onClick={manageEdit} color = {"black"} bgColor={"none"}><AiOutlineEdit color = {"black"} fontSize={"18"}/>Edit</Button><br></br>
                        <Button mt = {"10px"} color='black' border={'1px solid black'} bgColor={"teal"}>View Details <AiOutlineArrowsAlt fontSize={"20px"}/></Button>
                    </Box>
                    <Box w = {"45%"} >
                      <Image  borderRadius={"50%"}  border = {"1px solid black"} src = {data.image}/>
                    </Box>
                </Flex>
            </Box>
        
  
    
    
    
  </Box>
  )
}

export default EmployeeCard