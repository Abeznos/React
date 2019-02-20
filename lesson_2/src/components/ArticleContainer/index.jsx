import React from 'react'
import ArticleList from './ArticleList'
import articles from '../../getArticles'
import {style} from './style.css'

function ArticleContainer() {
    return (
        <section className="article-container">
            <h1 className="section-heading">Список четверостиший</h1>
            <ArticleList articles = {articles}/>
        </section>
    )
}

export default ArticleContainer