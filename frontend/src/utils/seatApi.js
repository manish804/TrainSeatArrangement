import axios from "axios";
const api_url = "https://train-seat-arrangement.vercel.app";


// signup new user api
export const bookTrainSeat = async (numberOfSeats) => {
  console.log(numberOfSeats);
  try {
    const response = await axios({
      method: "POST",
      url: `${api_url}/seat`,
      data: numberOfSeats
    });
    return response;
  } catch (error) {
    console.log(error)
    return error;
  }
}