import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/base.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

fetch('/api/comments/show?id=4199740256395164&page=1')
	.then(res => res.json())
	.then(data => {
		console.log('data = ', data)
	})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
