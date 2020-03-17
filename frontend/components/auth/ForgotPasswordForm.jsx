import React from 'react';

export class ForgotPasswordForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
        this.displayErrors = false;
        this.displayforgotPasswordConfirmation = false;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.renderforgotPasswordConfirmation = this.renderforgotPasswordConfirmation.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.forgotPassword(this.state.email);
        this.displayErrors = true;
        this.displayforgotPasswordConfirmation = true;
    }

    renderforgotPasswordConfirmation() {
        if (this.displayforgotPasswordConfirmation && this.props.forgotPasswordConfirmation) {
            return (
                <div>
                    <div key="forgotPasswordConfirmation" className="session__msg--confirmation">
                        {this.props.forgotPasswordConfirmation}
                    </div>
                </div>
            )
        } else {
            return null
        }
    }

    renderErrors() {
        if (this.displayErrors) {
            return (
                <div>
                    {this.props.errors.map((error, i) => (
                        <div key={`error-${i}`} className="session__msg--error">
                            {error}
                        </div>
                    ))}
                </div>
            )
        } else {
            return null
        }
    }

    render() {
        return (
            <div className="session__form-container">
                <div className="session__form-box">
                    <form onSubmit={this.handleSubmit}>
                        Please enter your email to reset your password:

                        <br/>

                        {this.renderforgotPasswordConfirmation()}
                        {this.renderErrors()}

                        <br/>

                        <label className="session__input-container">
                            Email
                            <br />
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="session__textbox"
                            />
                        </label>

                        <br/>

                        <div className="session__btn--submit" onClick={this.handleSubmit}>
                            <input type="submit" value="Send password reset email" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
