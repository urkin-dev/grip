import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../components/GlobalStyle'
import { UseScroll } from '../components/UseScroll'

//Import images
import athlete from '../img/athlete-small.png'
import goodtimes from '../img/goodtimes-small.png'
import theracer from '../img/theracer-small.png'

//Import animations
import { motion } from 'framer-motion'
import {
	pageAnimation,
	fadeAnimation,
	photoAnimation,
	lineAnimation,
	slider,
	sliderContainer,
} from '../animation'

import ScrollTop from '../components/ScrollTop'

export default function OurWork() {
	const [element, controls] = UseScroll()
	const [element2, controls2] = UseScroll()

	return (
		<Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
			<motion.div variants={sliderContainer}>
				<Frame1 variants={slider}></Frame1>
				<Frame2 variants={slider}></Frame2>
				<Frame3 variants={slider}></Frame3>
				<Frame4 variants={slider}></Frame4>
			</motion.div>
			<Movie>
				<motion.h2 variants={fadeAnimation}>The Athlete</motion.h2>
				<motion.div className="line" variants={lineAnimation}></motion.div>
				<Link to="/work/the-athlete">
					<Hide>
						<motion.img variants={photoAnimation} src={athlete} alt="Athlete" />
					</Hide>
				</Link>
			</Movie>
			<Movie
				ref={element}
				variants={fadeAnimation}
				initial="hidden"
				animate={controls}
			>
				<h2>The Racer</h2>
				<motion.div className="line" variants={lineAnimation}></motion.div>
				<Link to="/work/the-racer">
					<Hide>
						<motion.img
							variants={photoAnimation}
							src={theracer}
							alt="The Racer"
						/>
					</Hide>
				</Link>
			</Movie>
			<Movie
				ref={element2}
				variants={fadeAnimation}
				initial="hidden"
				animate={controls2}
			>
				<h2>Good Times</h2>
				<motion.div className="line" variants={lineAnimation}></motion.div>
				<Link to="/work/good-times">
					<Hide>
						<motion.img
							variants={photoAnimation}
							src={goodtimes}
							alt="Good Times"
						/>
					</Hide>
				</Link>
			</Movie>
			<ScrollTop />
		</Work>
	)
}

const Work = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;
	color: #fff;

	@media (max-width: 1300px) {
		padding: 2rem 2rem;
	}

	h2 {
		padding: 1rem 0rem;
	}
`

const Movie = styled(motion.div)`
	padding-bottom: 10rem;

	.line {
		height: 0.5rem;
		background: ${colors.basicPurple};
		margin-bottom: 3rem;
	}

	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`

const Hide = styled.div`
	overflow: hidden;
`

//Frame animation
const Frame1 = styled(motion.div)`
	position: fixed;
	top: 10%;
	left: 0;
	width: 100%;
	height: 100vh;
	background: #fffebf;
	z-index: 2;
`
const Frame2 = styled(Frame1)`
	background: #ff8efb;
`

const Frame3 = styled(Frame1)`
	background: #8ed2ff;
`

const Frame4 = styled(Frame1)`
	background: #8effa0;
`
