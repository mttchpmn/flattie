import axios from "axios";

let mockFlatData = {};

// TODO - Call real API

export const getFlat = async (flatId) => {
  console.log("GETTING FLAT FOR USER ID: ", flatId);

  const { data } = await axios.get(`http://localhost:4000/flats/${flatId}`);

  console.log("data: ", data);

  return data;
};

export const createFlat = (flat) => {
  console.log("CREATING FLAT: \n", flat);

  mockFlatData = flat;
};

const updateFlat = () => {
  // TODO - Implement this
};

export const deleteFlat = (flatId) => {
  console.log("DELETING FLAT WITH FLAT ID: ", flatId);

  mockFlatData = {};
};
