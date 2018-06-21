import React from 'react'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Form = ({handleSubmit, handleChange}) => (
	<form 
		id="contact" 
		name="contact" 
		method="post" 
		data-netlify="true" 
		data-netlify-honeypot="subject"
		onSubmit={handleSubmit}
	>
		<h2>Contact me</h2>
		<input type="hidden" name="form-name" value="contact" />
		<input className="nbf" name="subject" type="text" onChange={handleChange}/>
		<label for="name">Name:</label>
		<input type="text" name="name" id="name" onChange={handleChange} />
		<label for="email">Email:</label>
		<input type="text" name="email" id="email" onChange={handleChange} />
		<label for="message">Message:</label>
		<textarea name="message" id="message" onChange={handleChange} />
		<button type="submit" className="cta">Send</button>
	</form>
)
class Contact extends React.Component {
  constructor(props){
    super(props);

    this.state = {
			sent: false
		}
		this.showSuccessMessage = this.showSuccessMessage.bind(this);
  }

	handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => this.showSuccessMessage())
      .catch(error => alert(error));
  };

	showSuccessMessage = e => {
		this.setState({sent: true});
	}

  render(){
		const sent = this.state.sent
    return(
			<div>
				{sent === true ? "<h2 className="thank-you-message">Thank you for your message</h2>" : <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} /> } 
			</div>
      )
    }
  }

  export default Contact
