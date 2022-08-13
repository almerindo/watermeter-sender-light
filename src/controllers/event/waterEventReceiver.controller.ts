import { IIzar } from '../../diplomat/in/izar.interface';
import axios from 'axios';

const URL_API = 'http://200.100.0.114';

// eslint-disable-next-line import/prefer-default-export
export const eventReceiver = async (izarData: IIzar): Promise<void> => {
  axios
      .post(`${URL_API}/event/new`, izarData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  //axios
};
