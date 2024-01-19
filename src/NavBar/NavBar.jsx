import { HStack, Image, Input, Button, Text, Avatar } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeSearchKeyword } from "../Redux/ReduxSlices";
//import { Link } from "@chakra-ui/react";

export default function NavBar() {
  const getSearchKeyword = useSelector((state) => state.pizza.searchKeyword);
  const dispatch = useDispatch();
  return (
    <>
      <HStack justifyContent={"space-between"} marginBottom={"10px"}>
        <Image
          src="https://logowik.com/content/uploads/images/pizza1543.logowik.com.webp"
          height={"50px"}
        />
        <Text fontWeight="bold">Pizza Doremii</Text>
        <Input
          placeholder="Search"
          width={"50%"}
          onChange={(e) => dispatch(storeSearchKeyword(e.target.value))}
        >
          {console.log(getSearchKeyword)}
        </Input>

        <HStack>
          <Button colorScheme="yellow">
            <ReactRouterLink style={{ color: "black", fontWeight: "bold"}} to="/history">
              Order History
            </ReactRouterLink>
          </Button>
          <Avatar name='Profile' src='https://img.freepik.com/free-vector/3d-cartoon-young-woman-smiling-circle-frame-character-illustration-vector-design_40876-3100.jpg?size=626&ext=jpg&ga=GA1.2.1147689959.1705638586&semt=ais' />
          <p>Devita Helga</p>
        </HStack>
      </HStack>
    </>
  );
}
