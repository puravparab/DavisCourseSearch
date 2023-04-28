import styles from '../styles/courseSearch.module.css'

const CourseCard = ( props ) => {
	return (
		<div className={styles.courseCard}>
			<div className={styles.courseHeader}>
				<h3>{props.code}</h3>
				<h3>{props.name}</h3>
			</div>
			<p>Credits: {props.credits}</p>
			<div className={styles.courseBody}>
				<p>{props.description}</p>
			</div>
			{/* <div className={styles.courseFooter}> */}
			{/* 	<p>{props.prerequisites}</p> */}
			{/* </div> */}
		</div>
	)
}

export default CourseCard