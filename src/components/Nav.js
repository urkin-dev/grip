import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Nav() {
	return (
		<StyledNav>
			<h1>
				<Link to="/" className="logo">
					Grip
				</Link>
			</h1>
			<ul>
				<li>
					<Link to="/">About Us</Link>
				</li>
				<li>
					<Link to="/work">Our Work</Link>
				</li>
				<li>
					<Link to="/contact">Contact Us</Link>
				</li>
			</ul>
		</StyledNav>
	)
}

const StyledNav = styled.nav`
	min-height: 10vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 10rem;
	background-color: #e9c42f;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

	a {
		color: #fff;
		text-decoration: none;
	}

	ul {
		display: flex;
		list-style: none;
	}

	.logo {
		font-size: 1.5rem;
		font-family: 'Lobster', cursive;
		font-weight: lighter;
	}

	li {
		margin-left: 5rem;
		position: relative;
	}
`
