import {Component} from 'react'
import './index.css'

class Comments extends Component{
    render(){
        return(
            <div className='comments-section'>
                <div className='new-comment-section'>
                    <div className='new-comment'>
                    <p>What would you like to share with world?</p>
                    <textarea rows="10" cols="100"></textarea>
                    </div>
                    <button className='submit-button'>Submit</button>
                </div>
                <div className='comments-filter'>
                    <div className='comments-filter-section'>
                        <h1>Comments</h1>
                        <button className='submit-button'>Filter</button>
                    </div>
                    <div className='filtered-comments'>
                        <p className='mail-id'>user1@gmail.com</p>
                        <textarea rows="5" cols="50">This is a random comment</textarea>
                    </div>
                    <div className='filtered-comments'>
                        <p className='mail-id'>user2@gmail.com</p>
                        <textarea rows="5" cols="50">This is a random comment</textarea>
                    </div>
                </div>
            </div>
        )
    }
}
export default Comments