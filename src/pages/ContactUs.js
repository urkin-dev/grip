import { motion } from 'framer-motion'
import styled from 'styled-components'

//Import colors
import { colors } from '../components/GlobalStyle'

//Import animation
import { pageAnimation, titleAnimation } from '../animation'
import ScrollTop from '../components/ScrollTop'

export default function ContactUs() {
	return (
		<ContactStyle
			exit="exit"
			variants={pageAnimation}
			initial="hidden"
			animate="show"
		>
			<Title>
				<Hide>
					<motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
				</Hide>
			</Title>
			<div>
				<Hide>
					<Social variants={titleAnimation}>
						<Circle />
						<h2>Send Us A Message</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnimation}>
						<Circle />
						<h2>Send an email.</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnimation}>
						<Circle />
						<h2>Social Media</h2>
					</Social>
				</Hide>
			</div>
		<ScrollTop />
		</ContactStyle>
	)
}

const ContactStyle = styled(motion.div)`
	padding: 5rem 10rem;
	color: #fff;
	min-height: 90vh;

	h2 {
		color: #fff;
	}

	@media (max-width: 1500px) {
		padding: 2rem;
		font-size: 1rem;
	}
`

const Title = styled.div`
	margin-bottom: 4rem;
	color: black;

	@media (max-width: 1500px) {
		margin-top: 5rem;
	}
`

const Hide = styled.div`
	overflow: hidden;
`

const Circle = styled.div`
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	background: ${colors.basicPurple};
`
const Social = styled(motion.div)`
	display: flex;
	align-items: center;

	h2 {
		margin: 2rem;
	}
`
