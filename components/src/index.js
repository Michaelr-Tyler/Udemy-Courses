import React from 'react'
import ReactDom from 'react-dom'
import { CommentDetail } from './CommentDetail'
import { ApprovalCard } from './ApprovalCard'
const App = (props) => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                author= "Sam"  
                timeAgo="Today at 4:45PM" 
                image='https://source.unsplash.com/random' 
                mainContent="Yo that is cool!" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author= "Jane" 
                timeAgo="Today at 4:45PM" 
                image='https://source.unsplash.com/random' 
                mainContent="Yo that is rad!" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author= "Alex" 
                timeAgo="Today at 4:45PM" 
                image='https://source.unsplash.com/random' 
                mainContent="Yo that is fun!" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author= "Fern" 
                timeAgo="Today at 4:45PM" 
                image='https://source.unsplash.com/random' 
                mainContent="Yo that is lame!" 
                />
            </ApprovalCard>
        </div>
    )
}

ReactDom.render(<App />, document.querySelector('#root'))