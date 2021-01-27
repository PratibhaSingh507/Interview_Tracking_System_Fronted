import React, { Component } from 'react'
import InterviewService from '../services/InterviewService'

class ViewInterviewComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            interviewId: this.props.match.params.interviewId,
            interview: { }
        }
    }

    componentDidMount(){ 
        InterviewService.getInterviewById(this.state.interviewId).then( res => {
            this.setState({interview: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Interview Details</h3>
                    <div className = "card-body">
                   
                        <div className = "row">
                            <label> Interview Candidate Name: </label>
                            <div> { this.state.interview.interviewCandidateName }</div>
                        </div>
                        <div className = "row">
                        <label>Interview Start Time: </label>
                            <div> { this.state.interview.interviewStartTime }</div>
                        </div>
                        <div className = "row">
                        <label> Interview End Time: </label>
                            <div> { this.state.interview.interviewEndTime }</div>
                        </div>
                        <div className = "row">
                        <label>Interview Date: </label>
                            <div> { this.state.interview.interviewDate }</div>
                        </div>
                        <div className = "row">
                        <label> Interview Location: </label>
                            <div> { this.state.interview.interviewLocation }</div>
                        </div>
                        <div className = "row">
                        <label> Department: </label>
                            <div> { this.state.interview.department }</div>
                        </div>
                        <div className = "row">
                        <label> Email Id: </label>
                            <div> { this.state.interview.email }</div>
                        </div>
                        
                    </div>

                </div>
            </div>
           
        )
    }
}

export default ViewInterviewComponent

