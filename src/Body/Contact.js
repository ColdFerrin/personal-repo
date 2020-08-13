import React from 'react';
import './Contact.css';

export class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    render () {
        return (
            <div className={"Contact"}>
            <h2>If you want to contact me?</h2>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)}>
                    <table>
                        <tbody>
                            <tr>
                                <div className="form-group">
                                    <td className="left">
                                        <label htmlFor="name">Name: </label>
                                    </td>
                                    <td className="right">
                                        <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div className="form-group">
                                    <td className="left">
                                        <label htmlFor="exampleInputEmail1">Email Address: </label>
                                    </td>
                                    <td className="right">
                                        <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div className="form-group">
                                    <td className="left">
                                        <label htmlFor="message">Message: </label>
                                    </td>
                                    <td className="right">
                                        <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
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

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    resetForm(){
        this.setState({name:'', email:'', message:''})
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = {};
        data.name = this.state.name;
        data.reply_to = this.state.email;
        data.message = this.state.message;

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
                this.resetForm()
            }else{
                alert("Message failed to send.")
            }
        });

    }
}

