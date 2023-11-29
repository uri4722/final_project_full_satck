import axios from "axios";

async function fetchDataGet(sendData, URL) {
    try {
        const response = await axios.get(URL);
        console.log(response);;
        sendData(response.data)
    } catch (error) {
        console.log(error);
        console.log(error.response.data);
    }
}


export async function fetchDataPost(sendData, URL, body, setMessage) {

    try {
        const response = await axios.post(URL, body);
        sendData(response.data)
        console.log(response.data);
    } catch (error) {
        if (setMessage) {
            setMessage({ body: error.response.data, type: "failed" })
        }

        console.error(error);
    }

}

export async function fetchDataDelete(URL) {
    try {
        const response = await axios.delete(URL);
        console.log(response);;
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchDataPut(URL, body) {
    try {
        const response = await axios.put(URL, body);
        console.log(response);
        return response
    } catch (error) {
        console.error(error);
    }

}
export default fetchDataGet