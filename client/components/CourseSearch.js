import styles from '../styles/courseSearch.module.css'

const CourseSearch = () => {
	return (
		<div className={styles.courseSearchContainer}>
			<div className={styles.searchContainer}>
				<input 
					placeholder="Biology and computers ..."
					maxlength="100"
				/>
			</div>
			<div className={styles.courseContainer}>
				
			</div>
		</div>
	)
}

export default CourseSearch 