import React from 'react';

class YouTubeDebugger extends React.Component {
    
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
            resolution: '1080p'
          }
        }
    }

    clickBit = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    clickRes = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: this.state.settings.bitrate,
                video: {
                    resolution: '720p'
                }
            }
        })
    }
    
    render(){
        console.log(this.state.settings.video.resolution)
        return (
            <div>
                <button onClick={this.clickBit} className="bitrate">bitrate</button>
                <br />
                <button onClick={this.clickRes} className="resolution">resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger