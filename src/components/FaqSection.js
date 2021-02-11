import styled from 'styled-components'
import { AnimateSharedLayout } from 'framer-motion'
import { colors } from './GlobalStyle'
import Toggle from './Toggle'
import { UseScroll } from './UseScroll'

//Import animations
import { scrollReveal } from '../animation'

//Import styles
import { Section } from '../style'

export default function FaqSection() {
	const [element, controls] = UseScroll()

	return (
		<Faq
			ref={element}
			variants={scrollReveal}
			initial="hidden"
			animate={controls}
		>
			<h2>
				Any Questions <span>FAQ</span>
			</h2>
			<AnimateSharedLayout>
				<Toggle title="How Do I Start">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
							tempore!
						</p>
					</div>
				</Toggle>
				<Toggle title="Daily Schedule">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
							tempore!
						</p>
					</div>
				</Toggle>
				<Toggle title="Different Payment">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
							tempore!
						</p>
					</div>
				</Toggle>
				<Toggle title="What products do you offer">
					<div className="answer">
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
							tempore!
						</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>
		</Faq>
	)
}

const Faq = styled(Section)`
	display: block;

	span {
		display: block;
	}

	h2 {
		margin-bottom: 2rem;
		font-weight: lighter;
	}

	.faq-line {
		background-color: ${colors.basicPurple};
		height: 0.2rem;
		margin: 2rem 0rem;
		width: 100%;
	}

	.question {
		padding: 3rem 0rem;
		cursor: pointer;
	}

	.answer {
		padding: 2rem 0rem;

		p {
			padding: 1rem 0rem;
		}
	}
`
