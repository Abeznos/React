import React, {Component} from 'react'

class Article extends Component {
    state = {
        isOpen: false,
    }
        
    render() {
        const {article} = this.props
        const articleContent = this.state.isOpen &&
                <div className="article-content">
                    <p>{article.text1}</p>
                    <p>{article.text2}</p>
                    <p>{article.text3}</p>
                    <p>{article.text4}</p>
                </div>
              
        return (
            <article className="article-item">
                <header className="article-header">
                    <h3 className="article-title">{article.title}</h3>
                </header>
                {articleContent}
                <footer className="article-footer">
                    <h3 className="articl-date">{article.date}</h3>
                    <button onClick={this.handleClick} className="btn state-toggle-btn">
                        {this.state.isOpen ? 'Скрыть текст' : 'Показать текст'}
                    </button>
                </footer>
            </article>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article