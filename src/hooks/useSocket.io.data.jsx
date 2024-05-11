import { useEffect, useState } from 'react';
import io from 'socket.io-client';
const websocketurl =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEVELOPMENT_WEBSOCKET_BASEURL
    : process.env.REACT_APP_PRODUCTION_WEBSOCKET_BASEURL;


export const socket = io.connect(websocketurl, {
  "transports": ['websocket']
});
export const useSocketIoData = (event) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        socket && socket.on(event, (receivedData) => {
            setData(receivedData);
        });

        return () => {
            socket &&  socket.disconnect();
        };
    }, [socket]);

    return data;
};
export const useSocketIoSendData = (event) => {
    const sendData = (data) => {
        socket && socket.emit(event, data);
    };

    return sendData;
}

