import React, { Component } from 'react'
import InterviewService from '../services/InterviewService';


class CreateInterviewComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
          
            interviewId: this.props.match.params.interviewId,    
       //     interviewId: '',
            interviewCandidateName: '',
            interviewStartTime: '',
            interviewEndTime: '',
            interviewDate: '',
            interviewLocation: '',
            department: '',
            email: ''
        }
      
      //  this.changeInterviewIdHandler = this.changeInterviewIdHandler.bind(this);
        this.changeInterviewCandidateNameHandler = this.changeInterviewCandidateNameHandler.bind(this);
        this.changeInterviewStartTimeHandler = this.changeInterviewStartTimeHandler.bind(this);
        this.changeInterviewEndTimeHandler = this.changeInterviewEndTimeHandler.bind(this);
        this.changeInterviewDateHandler = this.changeInterviewDateHandler.bind(this);
        this.changeInterviewLocationHandler = this.changeInterviewLocationHandler.bind(this);
        this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveOrUpdateInterview = this.saveOrUpdateInterview.bind(this);
    }

   
    componentDidMount(){

        if(this.state.interviewId === '_add'){
            return
        }else{
            InterviewService.getInterviewById(this.state.interviewId).then( (res) =>{
                let interview = res.data;
                this.setState(
                    {
                //   interviewId: interview.interviewId,   
                    interviewCandidateName: interview.interviewCandidateName,
                    interviewStartTime: interview.interviewStartTime,
                    interviewEndTime: interview.interviewEndTime,
                    interviewDate: interview.interviewDate,
                    interviewLocation: interview.interviewLocation,
                    department: interview.department,
                    email : interview.email
                });
            });
        }        
    }
    saveOrUpdateInterview = (i) => {
        i.preventDefault();
        let interview = { /*interviewId: this.state.interviewId, */ interviewCandidateName: this.state.interviewCandidateName,interviewStartTime: this.state.interviewStartTime,interviewEndTime: this.state.interviewEndTime,interviewDate: this.state.interviewDate,interviewLocation: this.state.interviewLocation, department: this.state.department, email: this.state.email};
        console.log('interview => ' + JSON.stringify(interview));

        if(this.state.interviewId === '_add'){
            InterviewService.createInterview(interview).then(res =>{
                console.log("Creating interview");
                this.props.history.push('/getAllInterviews');
            });
        }else{
            InterviewService.updateInterview(interview, this.state.interviewId).then( res => {
                this.props.history.push('/getAllInterviews');
            });
        }
    }
    

   /* changeInterviewIdHandler= (event) => {
        this.setState({interviewId: event.target.value});
    }*/

    changeInterviewCandidateNameHandler= (event) => {
        this.setState({interviewCandidateName: event.target.value});
    }

    changeInterviewStartTimeHandler= (event) => {
        this.setState({interviewStartTime: event.target.value});
    }

    changeInterviewEndTimeHandler= (event) => {
        this.setState({interviewEndTime: event.target.value});
    }

    changeInterviewDateHandler= (event) => {
        this.setState({interviewDate: event.target.value});
    }

    changeInterviewLocationHandler= (event) => {
        this.setState({interviewLocation: event.target.value});
    }

    changeDepartmentHandler= (event) => {
        this.setState({department: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.history.push('/getAllInterviews');
    }

    getTitle(){
        if(this.state.interviewId === '_add'){
            return <h3 className="text-center">Add Interview</h3>
       }else{
           return <h3 className="text-center">Update Interview</h3>
        }   
    }
    render() {
        return (
         
            <div>
                    
                <br></br>
                   <div className = "container">
                
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                              
                                    <form>
                                    
                                   
                                        <div className = "form-group">
                                            <label> Interview Candidate Name: </label>
                                            <input placeholder="Interview Candidate Name" name="interviewCandidateName" className="form-control" 
                                                value={this.state.interviewCandidateName} onChange={this.changeInterviewCandidateNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Interview Start Time: </label>
                                            <input placeholder="Interview Start Time" name="interviewStartTime" className="form-control" 
                                                value={this.state.interviewStartTime} onChange={this.changeInterviewStartTimeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Interview End Time: </label>
                                            <input placeholder="Interview End Time" name="interviewEndTime" className="form-control" 
                                                value={this.state.interviewEndTime} onChange={this.changeInterviewEndTimeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Interview Date: </label>
                                            <input placeholder="Interview Date" name="interviewDate" className="form-control" 
                                                value={this.state.interviewDate} onChange={this.changeInterviewDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Interview Location: </label>
                                            <input placeholder="Interview Location" name="interviewLocation" className="form-control" 
                                                value={this.state.interviewLocation} onChange={this.changeInterviewLocationHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Department: </label>
                                            <input placeholder="Department" name=" department" className="form-control" 
                                                value={this.state.department} onChange={this.changeDepartmentHandler}/>
                                        </div>
                                       
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button block={true} className="btn btn-success" onClick={this.saveOrUpdateInterview}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                  
                   </div>
                 
            </div>
           
        )
    }
}




export default CreateInterviewComponent 
