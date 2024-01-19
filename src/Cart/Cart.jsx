import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  Heading,
  StackDivider,
} from "@chakra-ui/react";
import CartItem from "./CartItem";

export default function Cart() {
  const getCartData = useSelector((state) => state.pizza.cartData);
  return (
    <Card ml={4} width="100%" minWidth="16rem" minHeight="10rem">
      <center>
        <CardHeader>
          <Heading size="100%">Cart</Heading>
          {getCartData.length <= 0 ? (
            <div>
              <img
                src="https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-4085814-3385483.png?f=webp"
                style={{ height: 200 }}
              ></img>
              <p>
                Keranjang kamu masih kosong, yuk pilih pizzamu terlebih dahulu
              </p>
            </div>
          ) : (
            <div></div>
          )}
        </CardHeader>
      </center>
      <CardBody maxWidth="25rem" minWidth="25rem">
        <Stack divider={<StackDivider />} spacing="4">
          {getCartData.length > 0 ? (
            // If cart is not empty, render CartItem components
            getCartData.map((item, index) => (
              <CartItem key={index} itemIndex={index} item={item}></CartItem>
            ))
          ) : (
            <div></div>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
}
//xyz
