import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import Header from './components/Header'
import Articles from './components/Articles'
import './assets/scss/style.scss'
import axios from 'axios'

const App = () => {
    const [filter, setFilter] = useState([
        'arts',
        'automobiles',
        'books',
        'business',
        'fashion',
        'food',
        'health',
        'home',
        'insider',
        'magazine',
        'movies',
        'national',
        'nyregion',
        'obituaries',
        'opinion',
        'politics',
        'realestate',
        'science',
        'sports',
        'sundayreview',
        'technology',
        'theater',
        'tmagazine',
        'travel',
        'upshot',
        'world',
    ])
    const [selectedFilter, setSelectedFilter] = useState('')
    const [loading, setLoading] = useState(false)
    const [articles, setArticles] = useState([])

    const onChange = e => {
        setSelectedFilter(e.target.value)
    }

    try {
        useEffect(() => {
            const fetchData = async () => {
                const apiKey = '.json?api-key=0751ffff01d7a70710354972fa0ad4a9'
                let url =
                    'https://api.nytimes.com/svc/topstories/v2/' +
                    selectedFilter +
                    apiKey
                if (selectedFilter) {
                    setLoading(true)
                    await axios
                        .get(url)
                        .then(response => setArticles(response.data.results))
                    setLoading(false)
                }
            }
            fetchData()
        }, [selectedFilter])
    } catch (error) {
        throw new Error(error)
    }

    return (
        <>
            <Header
                onChange={() => onChange}
                filter={filter}
                selectedFilter={selectedFilter}
            />
            <Articles 
                articles={articles} 
                loading={loading} 
            />
            <footer>© Copyright 2019 INSTANEWS</footer>
        </>
    )
}

const rootElement = document.getElementById('app')
render(<App />, rootElement)
