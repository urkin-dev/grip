import styled from 'styled-components'

export default function Nav() {
	return (
		<StyledNav>
			<h1>
				<a href="#" className="logo">
					Grip
				</a>
			</h1>
			<ul>
				<li>
					<a href="#">About Us</a>
				</li>
				<li>
					<a href="#">Our Work</a>
				</li>
				<li>
					<a href="#">Contact Us</a>
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
	background-color: #E9C42F;
	box-shadow: 0px 0px 10px 0px #3d3d3d;

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
