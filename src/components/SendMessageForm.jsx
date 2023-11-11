import { useState } from "react";
import { Button, InputGroup, Form } from "react-bootstrap"
import styled from "styled-components";
import User from "data/userData";

const ChatForm = styled(Form)`
    .input-group {
        display: flex;

        input {
            height: 48px;
            font-family: Inter, Helvetica, sans-serif;
            font-weight: 700;
            font-size: 10px;
            color: #82878D;
            box-shadow: 0px 4px 4px 0px #00000040;
        }

        button {
            margin-left: -100px !important;
            height: 34px;
            border-radius: 5px !important;
            margin-top: auto;
            width: 79px;
            margin-bottom: auto;
            z-index: 9999;
            background: #D9D9D9;
            font-family: Inter, Helvetica, sans-serif;
            font-weight: 700;
            font-size: 10px;
            color:#1E1E1E;
        }
    }
`;

const SendMessageForm = ({ sendMessage }) => {
    const [message, setMessage] = useState(User);

    return <ChatForm onSubmit={e => {
            e.preventDefault();
            sendMessage(message);
            setMessage('');
        }}>
        <InputGroup className="mb-3">
            <Form.Control placeholder='...type something' onChange={e => setMessage({...User, text: e.target.value, timestamp:  Math.floor(Date.now() / 1000)})} value={message.text} />
                <Button variant="outline-secondary" id="button-addon2" disabled={!message} type='submit'>
                    Send
                </Button>
        </InputGroup>
    </ChatForm>
}

export default SendMessageForm;