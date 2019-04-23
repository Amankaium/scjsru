import React, {Component} from 'react';

class Article extends Component {
    state = {
        isOpen: true
    }

    render() {
        const {article} = this.props;
        const body = this.state.isOpen && <section>{article.text}</section>;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.closeText}>
                    {this.state.isOpen ? 'close': 'open'}
                </button>
                {body}
                <h4>current date: {(new Date(article.date)).toDateString()}</h4>
            </div>
        );
    }

    closeText = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}



export default Article;