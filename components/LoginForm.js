import React, {Component} from 'react';
import AuthForm from './AuthForm';
import mutation from '../components/mutations/Login'
import { graphql } from 'react-apollo';
import query from '../queries/currentUser';

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {errors: []};
    }
    componentWillUpdate(nextProps){
        //this props is old current set ofprops
        //nextProps the next set of props that will be in place
        //when the components rerender
        if(!this.props.data.user && nextProps.data.user){
            
        }
    }
     onSubmit({email, password}){
         this.props.mutate({
             variables: {email, password},
             refetchQueries: [{ query }]
         }).catch(res => {
            errors = res.graphQLErrors.map(error => error.message)
            this.setState({errors })
         })

     }
    render(){
        return(
            <div className='container'>
                <h3>Login</h3>
                <AuthForm errors={this.state.errors} 
                onSubmit={this.onSubmit.bind(this)}/>
            </div>
        )
    }
};

export default graphql(query) (
graphql(mutation) (LoginForm)
);