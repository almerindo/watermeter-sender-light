import { IIzar } from '../../diplomat/in/izar.interface';
import axios from 'axios';

const URL_API = 'http://200.100.0.114:3000';

// eslint-disable-next-line import/prefer-default-export
export const eventReceiver = async (izarData: IIzar): Promise<void> => {
  try {
    const response = await axios.post(`${URL_API}/event/new`, izarData);
    console.info(response.data);
    
  } catch (error: any) {
    console.error(error.message)
  }
  //axios
};
