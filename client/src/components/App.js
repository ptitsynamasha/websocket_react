import React from 'react'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import {ChatPage, Error404Page, AboutPage, LoginPage, LogoutPage} from "./pages";
import {ContainerUserDetails} from './containers'

window.React = React;


class App extends React.Component {

    render() {
        return (
            <div>
                <h1>Chat</h1>
                <HashRouter>
                    <div className="main">
                        <Switch>
                            <Route exact path="/" component={LoginPage} />
                            <Route path="/chat" component={ChatPage} />
                            <Route path="/about" component={AboutPage} />
                            <Route path="/logout" component={LogoutPage} />
                            <Redirect from="/services" to="/about/services" />
                            <Route exact path="/user/:id" component={ContainerUserDetails} />
                            <Route component={Error404Page} />
                        </Switch>
                    </div>
                </HashRouter>
            </div>
        )
    }
}

export default App
