import React from 'react';
import './styles/styles.css'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Works from './Works'
import Contact from './Contact'

function App() {
	return (
    	<div>
			<Header />

			<Works />
			<About />
			<Contact />

			<Footer />
		</div>
	);
}

export default App;
