import Head from 'next/head'

import Header from '../components/Header.js'
import CourseSearch from '../components/CourseSearch.js'
import Footer from '../components/Footer.js'
import styles from '../styles/home.module.css'

const Home = () => {
	return (
		<>
			<Head>
				<title>Davis Course Search</title>
				<meta 
					name="description" 
					content="Semantic searching for UC Davis courses"
				/>
				{/* <link rel="canonical" href="/" /> */}
				<meta property="og:title" content="Davis Course Search" />
				<meta property="og:url" content="" />
				<meta 
					property="og:description" 
					content="Semantic searching for UC Davis Courses"
				/>
				<meta name="twitter:site" content="" />
				<meta name="twitter:description" content="Semantic searching for UC Davis Courses" />
			</Head>

			<div className={styles.homeContainer}>
				<Header />
				<CourseSearch />
				<Footer />
			</div>
		</>
	)
}

export default Home