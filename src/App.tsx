import React from 'react';
import Page from './components/organism/CrudPage'
import './App.css';

const App = () => {
    /**
     * @return App() main theme.
     */
    return (
        <div className="container">
            {/* The section where all crud operations take place */}
            <Page/>
        </div>
    );
}

/**
* @return App().
*/
export default App;