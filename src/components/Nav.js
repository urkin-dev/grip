import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { colors } from '../components/GlobalStyle'
import { useLocation } from 'react-router-dom'

export default function Nav() {
	const { pathname } = useLocation()

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
					<Line
						transition={{ duration: 0.75 }}
						initial={{ width: '0%' }}
						animate={{ width: pathname === '/' ? '100%' : '0%' }}
					/>
				</li>
				<li>
					<Link to="/work">Our Work</Link>
					<Line
						transition={{ duration: 0.75 }}
						initial={{ width: '0%' }}
						animate={{ width: pathname === '/work' ? '100%' : '0%' }}
					/>
				</li>
				<li>
					<Link to="/contact">Contact Us</Link>
					<Line
						transition={{ duration: 0.75 }}
						initial={{ width: '0%' }}
						animate={{ width: pathname === '/contact' ? '100%' : '0%' }}
					/>
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
	background-color: #c5a834;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
	position: sticky;
	top: 0;
	z-index: 9999;

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

	@media (max-width: 1300px) {
		flex-direction: column;
		padding: 2rem 1rem;

		.logo {
			display: inline-block;
			margin: 1rem;
		}

		ul {
			padding: 2rem;
			justify-content: space-around;
			width: 100%;

			li {
				padding: 0;
			}
		}
	}
`

const Line = styled(motion.div)`
	height: 0.3rem;
	background: ${colors.basicPurple};
	width: 0%;
	position: absolute;
	margin-top: 5px;

	@media (max-width: 1300px) {
		left: 0%;
	}
`
