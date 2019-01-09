import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    imageAvatar={faker.image.avatar()} 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    text="That's awesome!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    imageAvatar={faker.image.avatar()} 
                    author="Alex"   
                    timeAgo="Today at 2:00AM" 
                    text="Oh, wow! Send me an invite next time, pleace :)" 
                />
            </ApprovalCard> 
            <ApprovalCard>
                <CommentDetail 
                    imageAvatar={faker.image.avatar()} 
                    author="Jane" 
                    timeAgo="Today at 5:00PM" 
                    text="That looks like fun."
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))