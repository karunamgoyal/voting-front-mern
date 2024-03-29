import React from 'react';
import {connect} from 'react-redux';
import {vote} from '../store/actions';
import {Pie} from 'react-chartjs-2';
const color = () => {
    return ('#'+ Math.random().toString(16).slice(2,8));
}
const Poll = ({poll,vote}) => {
    const answers = poll.options && poll.options.map(option => (
        <button className='button' onClick={()=> vote(poll._id,{answer:option.option})}key={option._id}>{option.option}</button> 
    ));

    const data = poll.options && {
        labels:poll.options.map(option => option.option),
        datasets: [
            {
                label: poll.question,
                backgroundColor: poll.options.map(option => color()),
                borderColor: '#323643',
                data: poll.options.map(option => option.votes)
            }
        ]
    }
return (
<div>
    <h2 className='poll-title'>{poll.question}</h2>
    <div className='button_center'>{answers}</div>
    {poll.options && <Pie data = {data}></Pie>}
</div>)

};

export default connect(
    store => ({
        poll:store.currentPoll
    }),
    {
        vote
    }
)(Poll);