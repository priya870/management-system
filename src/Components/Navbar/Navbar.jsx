import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  // Image,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.200', 'teal')} px={4} boxShadow={"dark-lg"}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontFamily={"cursive"} fontSize={"25px"} fontWeight={"bold"}>Employer Management</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

            
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}