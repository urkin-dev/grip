import styled from 'styled-components'
import { colors } from './GlobalStyle'

//Import styles
import { Section } from '../style'

export default function FaqSection() {
	return (
		<Faq>
			<h2>
				Any Questions <span>FAQ</span>
			</h2>
			<div className="question">
				<h4>How Do I Start?</h4>
				<div className="answer">
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
						tempore!
					</p>
				</div>
				<div className="faq-line"></div>
			</div>
			<div className="question">
				<h4>Daily Schedule</h4>
				<div className="answer">
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
						tempore!
					</p>
				</div>
				<div className="faq-line"></div>
			</div>
			<div className="question">
				<h4>Different Payment</h4>
				<div className="answer">
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
						tempore!
					</p>
				</div>
				<div className="faq-line"></div>
			</div>
			<div className="question">
				<h4>What products do you offer?</h4>
				<div className="answer">
					<p>Lorem ipsum dolor sit amet.</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
						tempore!
					</p>
				</div>
				<div className="faq-line"></div>
			</div>
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
