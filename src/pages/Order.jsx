import { Heading, MenuDivider, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";
import { BiFilter } from "react-icons/bi";
import { BsCalendar3 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import OrderTable from "../components/OrderTable";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import {
  setPayment,
  setOrderType,
  setOrderStatus,
  clearFilter,
} from "../store/filterSlice";
import { useDispatch } from "react-redux";
import "../styles/Order.scss";
import Sidebar from "../components/Sidebar";

const Order = () => {
  const dispatch = useDispatch();
  const styles = {
    display: "flex",
  };

  return (
    <main className="main">
      <Sidebar/>
      <div className="order">
        <Heading>Order Details</Heading>
        <div className="mainFilter">
          <form style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: "11px",
                left: "5px",
              }}
            >
              <CiSearch fontSize={"1.2rem"} color="black" />
            </div>
            <input placeholder="Search" type="text" name="search" />
          </form>
          <Menu>
            <MenuButton as={Button}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <BiFilter fontSize={'3rem'} fontWeight={'bold'}/>
                &nbsp; <Text mr={2}>Filters</Text>
              </div>
            </MenuButton>
            <MenuList p={2}>
              <Text fontWeight={"bold"}>Order Status</Text>
              <div style={styles}>
                <input
                  type="radio"
                  name="orderStatus"
                  value="New Order"
                  onClick={(e) => dispatch(setOrderStatus(e.target.value))}
                />
                <MenuItem>New Order</MenuItem>
              </div>
              <div style={styles}>
                <input
                  type="radio"
                  name="orderStatus"
                  value="Updated Order"
                  onClick={(e) => dispatch(setOrderStatus(e.target.value))}
                />
                <MenuItem>Updated Order</MenuItem>
              </div>

              <MenuDivider />
              <Text fontWeight={"bold"}>Payment</Text>
              <div style={styles}>
                <input
                  type="radio"
                  name="paymentStatus"
                  value="Paid"
                  onClick={(e) => dispatch(setPayment(e.target.value))}
                />
                <MenuItem>Paid</MenuItem>
              </div>
              <div style={styles}>
                <input
                  type="radio"
                  name="paymentStatus"
                  value="Un-Paid"
                  onClick={(e) => dispatch(setPayment(e.target.value))}
                />
                <MenuItem>Un-Paid</MenuItem>
              </div>
              <MenuDivider />
              <Text fontWeight={"bold"}>Order Type</Text>
              <div style={styles}>
                <input
                  type="radio"
                  name="typeStatus"
                  value="Delivery"
                  onClick={(e) => dispatch(setOrderType(e.target.value))}
                />
                <MenuItem>Delivery</MenuItem>
              </div>
              <div style={styles}>
                <input
                  type="radio"
                  name="typeStatus"
                  value="Dine In"
                  onClick={(e) => dispatch(setOrderType(e.target.value))}
                />
                <MenuItem>Dine-In</MenuItem>
              </div>
              <div style={styles}>
                <input
                  type="radio"
                  name="typeStatus"
                  value="Take Away"
                  onClick={(e) => dispatch(setOrderType(e.target.value))}
                />
                <MenuItem>Take Away</MenuItem>
              </div>
            </MenuList>
          </Menu>
          <Button>
            <BsCalendar3 fontSize={'2rem'} fontWeight={'bold'}/>
            &nbsp; Today &nbsp;&nbsp; <IoIosArrowDown fontSize={'2rem'} fontWeight={'bold'}/>
          </Button>
          <Button onClick={() => dispatch(clearFilter())}>Clear Filters</Button>
        </div>
        <OrderTable />
      </div>
    </main>
  );
};

export default Order;
