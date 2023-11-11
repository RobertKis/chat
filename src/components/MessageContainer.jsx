import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Message = styled.div`
    margin-bottom: 50px;
    display: flex;
`;

const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;
    margin-right: 5px;
`;

const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    min-height: 100px;
    width: 500px;
`;

const ReplyLink = styled.span`
    margin-right: auto;
    margin-top: auto;
    color: #023168;
    font-family: Inter, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 10px;
`;

const Time = styled.span`
    margin-top: auto;
    margin-left: auto;
    color: #82878D;
    font-family: Inter, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 10px;
`;

const Text = styled.p`
    color: #82878D;
    font-family: Inter, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 12px;
`;

const Name = styled.p`
    margin-bottom: 0;
    font-family: Inter, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 12px;
    color: #1E1E1E;
    margin-top: 10px;
`;

const MessageContainer = ({ messages }) => {
    const messageRef = useRef();

    useEffect(() => {
        if (messageRef && messageRef.current){
            const { scrollHeight, clientHeight } = messageRef.current;
            messageRef.current.scrollTo({
                left: 0, 
                top: scrollHeight - clientHeight, 
                behavior: 'smooth'
            });
        }
    }, [messages])

    const convertTimeStamp = ( timestamp ) => {
        const convertedTime =  new Date(timestamp * 1000);

        return `${convertedTime.getHours()}:${convertedTime.getMinutes()}`
    }

    return <div ref={messageRef}>
        {messages.map((m, index) => 
            <Message key={index}>
                <LeftSide>
                    <img src={m.author.picture} />
                    <Time>{convertTimeStamp(m.timestamp)}</Time>
                </LeftSide>                
                <RightSide>
                    <Name>{m.author.name}</Name>
                    <Text>{m.text}</Text>
                    <ReplyLink>Reply</ReplyLink>
                </RightSide>
            </Message>
        )}
    </div>
}

export default MessageContainer;