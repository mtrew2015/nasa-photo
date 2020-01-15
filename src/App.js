import React from 'react';
import './App.scss';
import Card from './components/cardComponent/Card';
import Mars from './components/Mars/Mars.js';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
	return (
        <div className='App'>
            <Route path="/">
            <Header/>
            </Route>
			<Route path='/' exact>
				<Card />
			</Route>
			<Route path='/mars' exact>
				<Mars />
			</Route>
		</div>
	);
}

export default App;
