import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import "../styles/sidebar.scss";
import { AiOutlineRight } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button bg={"red"} color={"white"} width={'80%'} >
        <Box  w={'80%'} display={'flex'} justifyContent={'space-between'} fontSize={'1.2rem'}>
        <Text mr={5}>Orders</Text> <AiOutlineRight />
        </Box>
        
      </Button>
    </div>
  );
};

export default Sidebar;
