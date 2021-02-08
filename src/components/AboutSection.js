//Import styles
import { Section, Description, Image, Hide } from '../style'
//Import images
import home1 from '../img/home1.png'

export default function AboutSection() {
	return (
		<Section>
			<Description>
				<div className="title">
					<Hide>
						<h2>We work to make</h2>
					</Hide>
					<Hide>
						<h2>
							your <span>dreams</span> come
						</h2>
					</Hide>
					<Hide>
						<h2>true</h2>
					</Hide>
				</div>
				<p>
					Contact us for any photography or videography ideas that you have. We
					have professionals with amazing skills
				</p>
				<button>Contact Us</button>
			</Description>
			<Image>
				<img src={home1} alt="Guy with a camera" />
			</Image>
		</Section>
	)
}
