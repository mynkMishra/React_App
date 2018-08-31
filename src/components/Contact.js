import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Consumer} from '../Context'
import '../stylesheets/Contact.css'

class Contact extends Component{
    state = {
        showContactInfo : false
    }

    //changing the state of component on click event
    onClickShow = (e)=>{
        this.setState({showContactInfo : !this.state.showContactInfo})
    }
    onDelete = (id, dispatch)=>{
        dispatch({type : 'DELETE', payload : id});
        // this.props.deleteClickHandler();
    }
    render(){
        const {showContactInfo} = this.state;
        const {id, name, email, phoneNumber} = this.props.contact;
        // const {contact} = this.props;
        return(
            <Consumer>
            {value => {
                const {dispatch} = value;
                return(
                    <div className='col-md-10 container'>
                <div className='card'>
            <div className = 'card-header'>
                <p>{name} <i style={{cursor : 'pointer'}} onClick={this.onClickShow} 
                className={showContactInfo ? 'fas fa-caret-up' : 'fas fa-caret-down'}></i>
                <i onClick={this.onDelete.bind(this, id, dispatch)} className="fas fa-times" style={{float : 'right', cursor : 'pointer', color: 'red'}}></i></p>
            </div>
            {showContactInfo ? (<div className='card-body'>
            <p className='card-text'>{email}</p>
            <p className='card-text'>{phoneNumber}</p>
            </div>) : null}   
            </div>
            </div>
                )
            }}
        
            </Consumer>
            
        );
    }
}



Contact.propTypes = {
    contact : PropTypes.object.isRequired,
    // name : PropTypes.string.isRequired,
    // email : PropTypes.string.isRequired,
    // phoneNumber : PropTypes.number.isRequired, 
    // deleteClickHandler : PropTypes.func.isRequired
}
export default Contact;