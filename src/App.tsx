import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { NavBar } from './components';
import {
	AboutPage,
	ArticlePage,
	ArticlesListPage,
	HomePage,
	NotFoundPage,
} from './pages';

function App(): JSX.Element {
	return (
		<BrowserRouter>
			<div className="App">
				<NavBar></NavBar>
				<div id="page-body">
					<Routes>
						<Route path="/" element={<HomePage />}></Route>
						<Route path="/about" element={<AboutPage />}></Route>
						<Route path="/articles" element={<ArticlesListPage />}></Route>
						<Route path="/article/:name" element={<ArticlePage />}></Route>
						<Route path="*" element={<NotFoundPage />}></Route>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
