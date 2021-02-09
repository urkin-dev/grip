import AboutSection from '../components/AboutSection'
import FaqSection from '../components/FaqSection'
import ServicesSection from '../components/ServicesSection'
//Import animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

export default function AboutUs() {
	return (
		<motion.div
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<AboutSection />
			<ServicesSection />
			<FaqSection />
		</motion.div>
	)
}
