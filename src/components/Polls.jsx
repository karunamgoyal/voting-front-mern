import React,{Fragment} from 'react';
import {connect} from 'react-redux';
import {getPolls,getUserPolls,getCurrentPoll} from '../store/actions';
class Polls extends React.Component{
    constructor(props){
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }
    componentDidMount(){
         const {getPolls} = this.props;
         getPolls();
    }
    handleSelect(id){
        const {history} = this.props;
        history.push(`/poll/${id}`);
    }
    render(){
        const {auth, getUserPolls,getPolls} = this.props;
        const polls = this.props.polls.map(poll => (<li onClick={()=>this.handleSelect(poll._id)} key={poll._id}>{poll.question}</li>));
        return <Fragment>
            {auth.isAuthenticated && (
                <div className='button_center'>
                    <button className='button' onClick={getPolls}>All Polls</button>
                    <button className='button' onClick={getUserPolls}>My Polls</button>
                </div>    
            )}
            <ul className='polls'>{polls}</ul>
        </Fragment>;
    } 
}

export default connect(store => ({
    auth: store.auth,
    polls: store.polls
}),{getPolls,getUserPolls,getCurrentPoll})(Polls);