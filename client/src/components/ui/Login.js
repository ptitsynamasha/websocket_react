import React from 'react';
import PropTypes from 'prop-types'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }



    submit(e) {
        e.preventDefault();
        const {_email, _password} = this.refs;
        const {onNewUser, history} = this.props;

        onNewUser(_email.value, _password.value, history);
        _email.value = '';
        _password.value = '';
        _email.focus()
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <div className="form-group">
                    <input ref="_email"
                           type="text"
                           placeholder="email"
                           className="form-control"
                           required
                    />
                </div>
                <div className="form-group">
                    <input
                        ref="_password"
                        type="password"
                        placeholder="password"
                        className="form-control"
                        required
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        )
    }
};

Login.propTypes = {
    onNewUser: PropTypes.func,
    history: PropTypes.object,
};

Login.defaultProps = {
    onNewUser: f => f
};
export default Login