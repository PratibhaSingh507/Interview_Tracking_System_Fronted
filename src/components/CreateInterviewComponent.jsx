import React, { Component } from 'react'
import InterviewService from '../services/InterviewService';


class CreateInterviewComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
          
            interviewId: this.props.match.params.interviewId,    
    
            interviewCandidateName: '',
            interviewStartTime: '',
            interviewEndTime: '',
            interviewDate: '',
            interviewLocation: '',
            department: '',
            email: '',

            input:{},
            errors:{}
           /* interviewCandidateNameErr: "",
            interviewStartTimeErr: "",
            interviewEndTimeErr: "",
            interviewDateErr: "",
            interviewLocationErr: "",
            departmentErr: "",
            emailErr: ""
*/
        }
      
     
        this.changeInterviewCandidateNameHandler = this.changeInterviewCandidateNameHandler.bind(this);
        this.changeInterviewStartTimeHandler = this.changeInterviewStartTimeHandler.bind(this);
        this.changeInterviewEndTimeHandler = this.changeInterviewEndTimeHandler.bind(this);
        this.changeInterviewDateHandler = this.changeInterviewDateHandler.bind(this);
        this.changeInterviewLocationHandler = this.changeInterviewLocationHandler.bind(this);
        this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveOrUpdateInterview = this.saveOrUpdateInterview.bind(this);

       /* this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);*/
    }

 /*   handleChange(event) {
        let input = this.state.input;
        input[event.target.interviewCandidateName] = event.target.value;
      
        this.setState({
          input
        });
      }
      handleSubmit(event) {
        event.preventDefault();

        if(this.validate()){
            console.log(this.state);
      
            let input = {};
            input["interviewCandidateName"] = "";
            input["interviewStartTime"] = "";
            input["department"] = "";
            input["email"] = "";
            this.setState({input:input});
      
            alert('Successfully done');
        }
      }
      validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;
    
        if (!input["interviewCandidateName"]) {
          isValid = false;
          errors["interviewCandidateName"] = "Please enter name";
        }
    
       
    
        if (!input["interviewStartTime"]) {
          isValid = false;
          errors["interviewStartTime"] = "Please enter your starttime as a number.";
        }
    
        if (typeof input["interviewStartTime"] !== "undefined") {
            
          var pattern = new RegExp(/^[0-9\b]+$/);
          if (!pattern.test(input["interviewStartTime"])) {
            isValid = false;
            errors["interviewStartTime"] = "Please enter only number.";
          }else {
            isValid = false;
            errors["interviewStartTime"] = "Please enter valid start time.";
          }
        }

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
          }
      
          if (typeof input["email"] !== "undefined") {
              
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
              isValid = false;
              errors["email"] = "Please enter valid email address.";
            }
          }
    
    
        this.setState({
          errors: errors
        });
    
        return isValid;
    }
   */
    componentDidMount(){

        if(this.state.interviewId === '_add'){
            return
        }else{
            InterviewService.getInterviewById(this.state.interviewId).then( (res) =>{
                let interview = res.data;
                this.setState(
                    {
              
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
        let interview = {interviewCandidateName: this.state.interviewCandidateName,interviewStartTime: this.state.interviewStartTime,interviewEndTime: this.state.interviewEndTime,interviewDate: this.state.interviewDate,interviewLocation: this.state.interviewLocation, department: this.state.department, email: this.state.email};
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
