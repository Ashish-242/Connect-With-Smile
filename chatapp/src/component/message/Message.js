import React from 'react'
import "./Message.css";



const Message = ({ user, message, classs }) => {
    if (user) {
        // agar user exist krta h to
        return (
            <div className={`messageBox ${classs}`}  >
                {`${user}: ${message}`}
                {/* manlo user ashish  h or message h whatsapp
                to print hoga ashish : whatsapp */}
            </div>
        )
    }
    else {


        return (
            <div className={`messageBox ${classs}`}>
                {`You: ${message}`}
            </div>
        )
    }
}

export default Message

