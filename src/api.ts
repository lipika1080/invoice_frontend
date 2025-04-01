import axios from "axios";

const API_URL = "https://invoicebackend.azurewebsites.net/invoices";

export const getInvoices = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addInvoice = async (invoice: any) => {
  const response = await axios.post(API_URL, invoice);
  return response.data;
};

export const updateInvoice = async (id: string, invoice: any) => {
  const response = await axios.put(`${API_URL}/${id}`, invoice);
  return response.data;
};

export const deleteInvoice = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
