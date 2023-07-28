import React , {Component} from "react";
export default class Welcome extends React.Component {

    render(){
        return <div>
            <p>Welcome {this.props.user.id} - {this.props.user.name}</p>
            <Logout/>
        </div>
    }
}
class Logout extends Component {
    render(){
        return <a href="#">Logout</a>
    }
}