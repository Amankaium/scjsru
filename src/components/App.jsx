import React from 'react';
import Article from './Article';
import articles from './../fixtures';

const App = () => {
    return (
        <div>
            <h2>ooh shit! Here we go again!..</h2>
            <Article article={articles[0]}/>
        </div>
    );
}

export default App;