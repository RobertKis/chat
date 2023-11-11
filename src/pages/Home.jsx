import { useEffect, useState } from "react";
import MessageContainer from "components/MessageContainer";
import SendMessageForm from "components/SendMessageForm";
import styled from "styled-components";
import moment from "moment/moment";
import Data from "data/data";

const Chat = styled.div``;

const Today = styled.span`
    font-family: Inter, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 9px;
    color: #1E1E1E;
`;

const Container = styled.div`
    background: #ECEEF1;
    margin-top: 100px;
    width: 798px;
    margin-left: auto;
    margin-right: auto;
    padding: 50px 50px 5px 50px;
    border-radius: 10px;
    max-height: 600px;
    overflow-y: scroll;
`;

const Home = () => {
    const [messages, setMessages ] = useState([]);

    useEffect(() => {
        setMessages(Data.comments);
    }, [])

    const sendMessage = ( message ) => {
        setMessages(messages => [...messages, message])
    } 

    return <Chat>
        <Container>
            <Today>{moment().format('dddd, d.M.YYYY')}</Today>
            <MessageContainer messages={messages} />
            <SendMessageForm sendMessage={sendMessage} />
        </Container>
    </Chat>
}

export default Home;