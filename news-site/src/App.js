import React from 'react'
import './App.scss'
import { ArticleList } from './components/article-list/article-list';
import {Header} from './components/header/header'


export class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
            <Header />
            <ArticleList />
            </div>
        )
    }
}


