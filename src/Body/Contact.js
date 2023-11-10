import React, {useState} from 'react';
import './Contact.css';

export function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameInput = e => {
        setName(e.target.value);
    }

    const handleEmailInput = e => {
        setEmail(e.target.value);
    }

    const handleMessageInput = e => {
        setMessage(e.target.value);
    }

    const resetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    }

    const handleSubmit = e => {
        e.preventDefault();
        const data = {};
        data.name = name;
        data.reply_to = email;
        data.message = message;

        fetch('https://cdr3q63x45.execute-api.us-east-1.amazonaws.com/prod/static-site-mailer',{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response)=>{
            if (response.status === 200){
                alert("Message Sent.");
                resetForm()
            }else{
                alert("Message failed to send.")
            }
        });

    }

    return (
        <div className={"Contact"}>
            <h2>If you want to contact me?</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                <table>
                    <tbody>
                    <tr>
                        <div className="form-group">
                            <td className="left">
                                <label htmlFor="name">Name: </label>
                            </td>
                            <td className="right">
                                <input type="text" className="form-control" value={name} onChange={handleNameInput} />
                            </td>
                        </div>
                    </tr>
                    <tr>
                        <div className="form-group">
                            <td className="left">
                                <label htmlFor="exampleInputEmail1">Email Address: </label>
                            </td>
                            <td className="right">
                                <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={handleEmailInput} />
                            </td>
                        </div>
                    </tr>
                    <tr>
                        <div className="form-group">
                            <td className="left">
                                <label htmlFor="message">Message: </label>
                            </td>
                            <td className="right">
                                <textarea className="form-control" rows="5" value={message} onChange={handleMessageInput} />
                            </td>
                        </div>
                    </tr>
                    </tbody>
                </table>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className={"btn-cont-wrks"}>
                <a style={{textDecoration: 'none', color: 'black'}} href={"https://github.com/ColdFerrin/personal-site-contact-sender"}>
                    <div className={'Link-surround-cont-wrks'}>
                        <p className={'Link-cont-wrks'}>
                            Click Here to See
                        </p>
                        <p className={'Link-cont-wrks'}>
                            How This Page Works
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
}
