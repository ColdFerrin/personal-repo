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
            <h2>If you need to contact me?</h2>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
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

        fetch('https://bap6ezx09d.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer',{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response)=>{
            if (response.status === 'success'){
                alert("Message Sent.");
                this.resetForm()
            }else if(response.status === 'fail'){
                alert("Message failed to send.")
            }
        });

    }
}

