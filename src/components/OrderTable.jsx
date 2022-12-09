import React from "react";
import "../styles/OrderTable.scss";
import { HiExternalLink } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Text, Badge } from "@chakra-ui/react";
import { data as datas } from "../data";
import { setPayment, setOrderType, setOrderStatus} from "../store/filterSlice";
import { useDispatch, useSelector } from "react-redux";


const OrderTable = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  let data = datas.filter(
    (curr) =>
      (filter.payment === "" ? true : curr.payment === filter.payment) &&
      (filter.orderType === "" ? true : curr.orderType === filter.orderType) &&
      (filter.orderStatus === "" ? true : curr.orderStatus === filter.orderStatus)
  );
  return (
    <div className="orderTable">
       { data.length === 0 ?<h1 style={{
        fontWeight:'bold',
        textAlign:'center',
       }}>No Data Available to Preview</h1> :
      <TableContainer fontWeight={'bold'} height={'80vh'} overflowY={'scroll'}>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Order ID</Th>
              <Th>Table no</Th>
              <Th>Customer name</Th>
              <Th>
                <Menu>
                  <MenuButton>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "bold",
                      }}
                    >
                      <Text mr={2}> ORDER TYPE </Text>{" "}
                      <IoIosArrowDown fontWeight={"bold"} />
                    </div>
                  </MenuButton>
                  <MenuList
                    border="2px solid black"
                    fontWeight="bold"
                    onClick={(e) => {
                      dispatch(setOrderType(e.target.value));
                    }}
                  >
                    <MenuItem color="red" fontWeight="bold" value="Delivery">
                      Delivery
                    </MenuItem>
                    <MenuItem color="blue" fontWeight="bold" value="Dine In">
                      Dine In
                    </MenuItem>
                    <MenuItem color="green" fontWeight="bold" value="Take Away">
                      Take Away
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Th>
              <Th>
                <Menu>
                  <MenuButton>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "bold",
                      }}
                    >
                      <Text mr={2}> ORDER STATUS </Text>{" "}
                      <IoIosArrowDown fontWeight={"bold"} />
                    </div>
                  </MenuButton>
                  <MenuList
                    border="2px solid black"
                    fontWeight="bold"
                    onClick={(e) => dispatch(setOrderStatus(e.target.value))}
                  >
                    <MenuItem color="red" fontWeight="bold" value="New Order">
                      New Order
                    </MenuItem>
                    <MenuItem
                      color="blue"
                      fontWeight="bold"
                      value="Updated Order"
                    >
                      Updated Order
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Th>
              <Th>
                <Menu>
                  <MenuButton>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "bold",
                      }}
                    >
                      <Text mr={2}> PAYMENT </Text>{" "}
                      <IoIosArrowDown fontWeight={"bold"} />
                    </div>
                  </MenuButton>
                  <MenuList
                    border="2px solid black"
                    fontWeight="bold"
                    onClick={(e) => dispatch(setPayment(e.target.value))}
                  >
                    <MenuItem color="red" fontWeight="bold" value="Paid">
                      Paid
                    </MenuItem>
                    <MenuItem color="blue" fontWeight="bold" value="Un-Paid">
                      Un-Paid
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Th>
              <Th>Date</Th>
              <Th>View Order</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((curr, i) => {
              return (
                <Tr key={i}>
                  <Td>{curr.orderId}</Td>
                  <Td>{curr.tableNo}</Td>
                  <Td>{curr.customerName}</Td>
                  <Td>
                    <Text
                      color={
                        curr.orderType === "Delivery"
                          ? "red"
                          : curr.orderType === "Dine In"
                          ? "blue"
                          : "green"
                      }
                    >
                      {" "}
                      {curr.orderType}
                    </Text>{" "}
                  </Td>
                  <Td>
                    {
                      <Badge
                        p={2}
                        variant="subtle"
                        br={3}
                        colorScheme={
                          curr.orderStatus === "New Order" ? "orange" : "purple"
                        }
                      >
                        {curr.orderStatus}
                      </Badge>
                    }{" "}
                  </Td>
                  <Td>
                    {
                      <Badge
                        p={2}
                        variant="subtle"
                        colorScheme={curr.payment === "Paid" ? "green" : "red"}
                      >
                        {curr.payment}
                      </Badge>
                    }
                  </Td>
                  <Td>
                    19 Dec 2022 <br /> 7:00 am
                  </Td>
                  <Td>
                    <HiExternalLink fontSize={"1.2rem"} />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>}
    </div>
  );
};

export default OrderTable;
