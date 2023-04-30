import styles from '../styles/header.module.css'

const Header = () => {
	return (
		<div className={styles.headerContainer}>
			<h1>Davis Course Search</h1>
			{/* <h2>Semantic searching for UC Davis courses</h2> */}
			<h2>AI powered search for UC Davis Courses</h2>
		</div>
	)
}

export default Header