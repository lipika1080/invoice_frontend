import React, { useEffect, useState } from "react";
import { getInvoices, deleteInvoice } from "./api";
import { Box, Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

const InvoiceList: React.FC = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    const data = await getInvoices();
    setInvoices(data);
  };

  const handleDelete = async (id: string) => {
    await deleteInvoice(id);
    fetchInvoices();
  };

  return (
    <Box p={5}>
      <Table>
        <Thead>
          <Tr>
            <Th>Customer</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
            <Th>Date</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {invoices.map((invoice: any) => (
            <Tr key={invoice.id}>
              <Td>{invoice.customer}</Td>
              <Td>{invoice.amount}</Td>
              <Td>{invoice.status}</Td>
              <Td>{invoice.date}</Td>
              <Td>
                <Button colorScheme="red" onClick={() => handleDelete(invoice.id)}>Delete</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default InvoiceList;
