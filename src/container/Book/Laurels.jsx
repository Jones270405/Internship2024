import axios from 'axios';
import React from 'react';
import './Laurels.css'

class Book extends React.Component {
  constructor(){
  super()
  this.state = {firstname:'', 
    lastname:'',
    email:'',
    phone:'',
    numberofguests:'',
    bookingdate:'',
    bookingtime:''
  } 
  this.changefirstname=this.changefirstname.bind(this)
  this.changelastname=this.changelastname.bind(this)
  this.changeemail=this.changeemail.bind(this)
  this.changephone=this.changephone.bind(this)
  this.changenumberofguests=this.changenumberofguests.bind(this)
  this.changedate=this.changedate.bind(this)
  this.changetime=this.changetime.bind(this)
  this.onSubmit=this.onSubmit.bind(this)
  }
  changefirstname(event){
    this.setState({
      firstname:event.target.value
    })
  }
  changelastname(event){
    this.setState({
      lastname:event.target.value
    })
  }
  changeemail(event){
    this.setState({
      email:event.target.value
    })
  }
  changephone(event){
    this.setState({
      phone:event.target.value
    })
  }
  changenumberofguests(event){
    this.setState({
      numberofguests:event.target.value
    })
  }
  changedate(event){
    this.setState({
      bookingdate:event.target.value
    })
  }
  changetime(event){
    this.setState({
      bookingtime:event.target.value
    })
  }
  onSubmit(event){
    event.preventDefault()
    const booked={
      firstname:this.state.firstname,
      lastname:this.state.lastname,
      email:this.state.email,
      phone:this.state.phone,
      numberofguests:this.state.numberofguests,
      bookingdate:this.state.bookingdate,
      bookingtime:this.state.bookingtime
    }
    axios.post('http://localhost:4000/app/book',booked)
    .then(response=>console.log(response.data))
    window.location='/'
  }
  
  render() { 
    return (<div className='container-div'>
      <div className='form-div'>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="First Name" onChange={this.changefirstname} value={this.state.firstname}/><br/>
          <input type="text" placeholder="Last Name" onChange={this.changelastname} value={this.state.lastname}/><br/>
          <input type="email" placeholder="Email" onChange={this.changeemail} value={this.state.email}/><br/>
          <input type="tel" placeholder="Phone Number" onChange={this.changephone} value={this.state.phone} pattern="[0-9]{10}"/><br/>
          <input type="number" onChange={this.changenumberofguests} value={this.state.numberofguests}/><br/>
          <input type="date" onChange={this.changedate} value={this.state.bookingdate}/><br/>
          <input type="time" onChange={this.changetime} value={this.state.bookingtime} /><br/>
          <input type="submit" value="submit"/>
        </form>
      </div>

    </div>);
  }
}

export default Book;