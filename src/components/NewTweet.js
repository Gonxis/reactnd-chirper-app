import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewTweet extends Component {

    state = {
        text: ''
    }

    handleChange = event => {
        const text = event.target.value

        this.setState(() => ({
            text
        }))
    }

    handleSubmit = event => {
        event.preventDefault()

        const { text } = this.state

        // todo: Add Tweet to Store

        console.log("New tweet: ", text)

        this.setState(() =>({
            text: ''
        }))
    }

    render() {
        const { text } = this.state

        const tweetLeft = 280 - text.length
        return (
            <div>
                <h3 className="center">Compose new tweet</h3>
                <form className="new-tweet" onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder="What's happening"
                        value={text}
                        onChange={this.handleChange}
                        className="textarea"
                        maxLength={280}
                    />
                    {tweetLeft <= 100 && (
                        <div className="tweet-length">
                            {tweetLeft}
                        </div>
                    )}
                    <button
                        className='btn'
                        type="submit"
                        disabled={text === ''}
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default NewTweet