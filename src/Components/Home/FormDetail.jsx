import { Box, Button, Center,  FormControl, FormLabel, Input,  Text } from "@chakra-ui/react";
import React, { useState } from "react";
import style from "../../Style/FormDetail.module.css";


const obj = {
  name: "",
  email : "",
  number:"",
  age :"",
  gender:"",
  department:"",
  salary:"",
  image:"",

}
const FormDetail = () => {
  const[user,setUser] = useState([]);
  const[state,setState] = useState(obj)

  
const handleChange = (e)=>{

  setState({...state ,[e.target.name] : e.target.value })


}

const submit = (e) =>{
  e.preventDefault();
  setUser([...user ,state])
  setState(obj);
  console.log(state);
}

const postData = (obj) =>{
  return fetch("http://localhost:8080/employee", {
    method :"POST",
    body:JSON.stringify(obj),
    headers:{
     "Content-Type" :"applicatin/json",
    }

  }).then((res)=>res.json())
}


  return (
    <Box>
      {/* <Box > */}
       
          <Box
            border={"1px solid black"}
            h="850px"
            borderRadius={"20px"}
            boxShadow={"dark-lg"}
            // bgColor={"#EBEEF3"}
            pl={"20px"}
            pr={"20px"}
          >
            <Text
              textAlign={"center"}
              fontSize={"23px"}
              mt={"15px"}
              fontFamily={"monospace"}
              
            >
              Form Details
            </Text>{" "}
            <hr /><br></br>
            <form onSubmit={submit}>
            <FormControl isRequired  >
              <FormLabel className={style.labels}>First name</FormLabel>
              
              <Input
                name = "name"
                value={state.name}
                type="text"
                placeholder="Enter User name"
                className={style.input_box}
                onChange={handleChange}
              />
              
              <FormLabel className={style.labels}>Email</FormLabel>
              <Input
                value={state.email}
                type="email"
                placeholder="Enter Your email"
                className={style.input_box}
                onChange={handleChange}
                name = "email"
              />
              
              <FormLabel className={style.labels}>Phone Number</FormLabel>
              <Input
                value={state.number}
                type="number"
                placeholder="Enter Your Number"
                className={style.input_box}
                onChange={handleChange}
                name = "number"
              />
              
              <FormLabel className={style.labels}>Age</FormLabel>
              <Input
                value={state.age}
                type="text"
                placeholder="Enter Your Age"
                className={style.input_box}
                onChange={handleChange}
                name = "age"
              />
              <br></br>
              <FormLabel className={style.labels}>Gender</FormLabel>
              <select className={style.input_box}  onChange={handleChange} value = {state.gender}>
                <option value="male">Male</option>
                <option value="female"> Female</option>
                <option value="Not Prefer"> Prefer Not To Say</option>
              </select>{" "}
              
              <FormLabel className={style.labels}>Department</FormLabel>
            
              <Input
                type="text"
                placeholder="Enter Department"
                value={state.department}
                className={style.input_box}
                onChange={handleChange}
                name = "department"
              />
              
              <FormLabel className={style.labels}>Salary</FormLabel>
              <Input
                type="number"
                placeholder="Enter your salary"
                value={state.salary}
                className={style.input_box}
                onChange={handleChange}
                name = "salary"
              />
              
              <FormLabel className={style.labels}>Image</FormLabel>
            
              <Input
                type="text"
                placeholder="Image url"
                value={state.image}
                name = "image"
                className={style.input_box}
                onChange={handleChange}
              />
              <Center>
                <Button type="submit" className={style.submit_btn} colorScheme="blue">Submit</Button>
              </Center>
              </FormControl>
              </form>
          </Box>
      </Box>
    // </Box>
  );
};

export default FormDetail;
