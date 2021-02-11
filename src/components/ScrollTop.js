import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollTop() {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
		})
	}, [pathname])

	return null
}
