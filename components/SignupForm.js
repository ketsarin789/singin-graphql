import React, {Component} from 'react';
import AuthForm from './AuthForm';
import {graphql} from 'react-apollo';
import mutation from '../components/mutations/Signup'
import query from '../queries/currentUser';

class SignupForm extends Component{
    constructor(props){
        super(props);
        this.state = {errors: [] };
    }
    onSubmit({email, password}){
        this.props.mutate({
            variables: {email, password},
            refetchQueries: [{ query }]
        }).catch(res => {
        errors = res.graphQLErrors.map(error => error.message)
        this.setState({errors })
    })};

    render(){
        return(
            <div className='container'>
                <h3>Sign Up</h3>
                <AuthForm 
                errors={[]}
                onSubmit={this.onSubmit.bind(this)}/>
            </div>
        )
    }
};
export default graphql(mutation)(SignupForm);