import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'

//Router
import { Switch, Route } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Nav />
			<Switch>
				<Route path="/" exact>
					<AboutUs />
				</Route>
				<Route path="/contact">
					<ContactUs />
				</Route>
				<Route path="/work">
					<OurWork />
				</Route>
			</Switch>
		</div>
	)
}

export default App
