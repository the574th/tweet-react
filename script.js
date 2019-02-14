class Tweet extends React.Component {
    render() {
        return (
            <div className="tweet-container">
                <div className="content">

                    <div className="top">
                        <a href="https://twitter.com/kanyewest">
                            <img className="profile-avatar" src={this.props.data.user.profile_image_url} />
                            <span className="fullName">
                                <strong>{this.props.data.user.name}</strong>
                                <span>&rlm;</span>
                                <span className="userBadge">
                                    <span className="icon"></span>
                                    <span class="UserNameBreak">&nbsp;</span>
                                </span>
                            </span>
                            <span className="userName">
                            @<b>{this.props.data.user.screen_name}</b>
                            </span>
                        </a>
                    </div>

                    <div className="middle">
                        <p className="tweet-text">
                            {this.props.data.text}
                        </p>
                    </div>

                    <div className="bottom">
                    </div>
                </div>
            </div>
            )
    }
}



ReactDOM.render(
    <Tweet data={tweets[1]} />,
    document.getElementById('root')
);