import axios from "axios";

async function fetchData(sendData, URL) {
    try {
        const response = await axios.get(URL);
        console.log(response);;
        sendData(response.data)
    } catch (error) {
        console.log(error);
    }

}
export default fetchData