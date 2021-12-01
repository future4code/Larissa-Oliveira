import React, { useState } from 'react';
import ProfilePag from './components/ProfilePag/ProfilePag'
import Match from './components/Match/Match';

function App() {
	const [page, setPage] = useState(1)
	const changePage1 = () => {
		setPage(2)
	}

	const changePage2 = () => {
		setPage(1)
	}

	const handlePage = () => {
		switch (page) {
			case 1:
				return <ProfilePag switchPages={changePage1} myPage={page} />
			case 2:
				return <Match switchPages={changePage2} myPage={page} />
			default:
				return <ProfilePag switchPages={changePage1} myPage={page} />
		}
	}

	return (
		handlePage()
	)
}

export default App;