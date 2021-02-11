import { motion } from 'framer-motion'
import { titleAnimation, fadeAnimation, photoAnimation } from '../animation'
import Wave from './Wave'

//Import styles
import { Section, Description, Image, Hide } from '../style'
//Import images
import home1 from '../img/home1.png'

export default function AboutSection() {
	return (
		<Section>
			<Description>
				<motion.div>
					<Hide>
						<motion.h2 variants={titleAnimation}>We work to make</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnimation}>
							your <span>dreams</span> come
						</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnimation}>true</motion.h2>
					</Hide>
				</motion.div>
				<motion.p variants={fadeAnimation}>
					Contact us for any photography or videography ideas that you have. We
					have professionals with amazing skills
				</motion.p>
				<motion.button variants={fadeAnimation}>Contact Us</motion.button>
			</Description>
			<Image>
				<motion.img
					variants={photoAnimation}
					src={home1}
					alt="Guy with a camera"
				/>
			</Image>
			<Wave />
		</Section>
	)
}
