import React, { Component } from 'react'
import InterviewService from '../services/InterviewService'

class ListInterviewComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                interviews: []
        }
        this.addInterview = this.addInterview.bind(this);
        this.editInterview = this.editInterview.bind(this);
        this.deleteInterview = this.deleteInterview.bind(this);
    }

    deleteInterview(interviewId){
        InterviewService.deleteInterview(interviewId).then( res => {
            this.setState({interviews: this.state.interviews.filter(interview => interview.interviewId !== interviewId)});
        });
    }
    viewInterview(interviewId){
        this.props.history.push(`/view-interview/${interviewId}`);
    }
    editInterview(interviewId){
        this.props.history.push(`/add-interview/${interviewId}`);
    }

    componentDidMount(){
       // console.log("message")
        InterviewService.getInterviews().then((res) => {
            this.setState({interviews: res.data});
           // console.log(res.data)   
        });
    }

    addInterview(){
        this.props.history.push('/add-interview/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Interview Schedule List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addInterview}>Add Interview</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>

                                  
                                    <th> Interview Candidate Name</th>
                                    <th> Interview Start Time</th>
                                    <th> Interview End Time</th>
                                    <th> Interview Date</th>
                                    <th> Interview Location</th>
                                    <th> Department(HR/Tech)</th>
                                    <th> Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.interviews.map(
                                        interview => 
                                        <tr key = {interview.interviewId}>
                                         
                                             <td> { interview.interviewCandidateName} </td>  
                                             <td> { interview.interviewStartTime} </td>
                                             <td> { interview.interviewEndTime} </td>
                                             <td> { interview.interviewDate} </td>
                                             <td> { interview.interviewLocation} </td>
                                             <td> { interview.department} </td> 
                                             <td> {interview.email}</td>
                                             <td>
                                                 <button style={{marginLeft: "3%", backgroundColor: 'yellow', fontFamily:'cursive',borderRadius: '30%'}} onClick={ () => this.editInterview(interview.interviewId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "3%", fontFamily:'cursive',borderRadius: '30%'}} onClick={ () => {if (window.confirm('Are you sure you wish to delete this scheduled interview?'))  this.deleteInterview(interview.interviewId)}} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "3%", backgroundColor: 'dimgrey',border: 'black', fontFamily:'cursive', borderRadius: '30%'}} onClick={ () =>  this.viewInterview(interview.interviewId)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListInterviewComponent
