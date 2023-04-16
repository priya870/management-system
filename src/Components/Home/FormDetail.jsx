import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import style from "../../Style/FormDetail.module.css";
import { AppContext } from "../../Context/AppContext";
import { addData } from "../../API";

const FormDetail = () => {
  const [isSubmit, setisSubmit] = useState(false);
  const {
    HandleEmotionData,
    updateButton,
    formData,
    setFormData,
    initialValue,
    updateToServer,
  } = useContext(AppContext);

  const handleFormData = (e) => {
    const { name : key, value } = e.target;
    setFormData({ ...formData, [key]: value });
  };

  const HandleAddData = () => {
    setisSubmit(true);
    addData(formData)
      .then((res) => {
        console.log(res);
        setisSubmit(false);
        HandleEmotionData();
      })
      .catch((err) => {
        setisSubmit(false);
      });
    setFormData(initialValue);
    window.location.reload();
  };

  return (
    <Box>
      {/* <Box > */}

      <Box
        border={"1px solid black"}
        borderRadius={"20px"}
        boxShadow={"dark-lg"}
        pl={"20px"}
        pr={"20px"}
      >
        <Text
          textAlign={"center"}
          fontSize={"24px"}
          mt={"15px"}
          fontFamily={"revert-layer"}
          fontWeight={"bold"}
        >
          Form <span style={{ color: "teal" }}>Details</span>
        </Text>{" "}
        <hr />
        <br></br>
        <form>
          <FormControl isRequired>
            <FormLabel className={style.labels}>First name</FormLabel>
            <Input
              name="name"
              // value={formData.name}
              type="text"
              placeholder="Enter User name"
              className={style.input_box}
              onChange={handleFormData}
            />
            <FormLabel className={style.labels}>Email</FormLabel>
            <Input
              value={formData.email}
              type="email"
              placeholder="Enter Your email"
              className={style.input_box}
              onChange={handleFormData}
              name="email"
            />
            <FormLabel className={style.labels}>Phone Number</FormLabel>
            <Input
              value={formData.number}
              type="number"
              placeholder="Enter Your Number"
              className={style.input_box}
              onChange={handleFormData}
              name="number"
            />
            <FormLabel className={style.labels}>Age</FormLabel>
            <Input
              value={formData.age}
              type="text"
              placeholder="Enter Your Age"
              className={style.input_box}
              onChange={handleFormData}
              name="age"
            />
            <br></br>
            <FormLabel className={style.labels}>Gender</FormLabel>
            <select
              className={style.input_box}
              onChange={handleFormData}
              value={formData.gender}
            >
              <option value="male">Male</option>
              <option value="female"> Female</option>
              <option value="Not Prefer"> Prefer Not To Say</option>
            </select>{" "}
            <FormLabel className={style.labels}>Department</FormLabel>
            <select
              className={style.input_box}
              onChange={handleFormData}
              value={formData.department}
            >
              <option value="Front-End Developer"> Front-End Developer</option>
              <option value="Back-End Developer" Developers>
                Back-End Developer
              </option>
              <option value="Full Stack Developer">
                {" "}
                Full Stack Developer
              </option>
            </select>{" "}
            <FormLabel className={style.labels}>Salary</FormLabel>
            <select
              className={style.input_box}
              onChange={handleFormData}
              value={formData.salary}
            >
              <option value="30k">30k</option>
              <option value="40k"> 40k</option>
              <option value="50k">50k</option>
              <option value="60k">60k</option>
              <option value="70k">70k</option>
            </select>{" "}
            <FormLabel className={style.labels}>Image</FormLabel>
            <Input
              type="text"
              placeholder="Image url"
              value={formData.image}
              name="image"
              className={style.input_box}
              onChange={handleFormData}
            />
            <Flex>
              {isSubmit ? (
                <Button>Submit</Button>
              ) : (
                <Button onClick={HandleAddData}>Submit</Button>
              )}
              <Spacer />
              {updateButton ? (
                <Button onClick={updateToServer}>Update Data</Button>
              ) : (
                <Text>.</Text>
              )}
            </Flex>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
};

export default FormDetail;
