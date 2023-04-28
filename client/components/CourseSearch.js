import { useState, useEffect } from 'react'
import getConfig from 'next/config';

import axios from 'axios';
import CourseCard from '../components/CourseCard.js'
import styles from '../styles/courseSearch.module.css'

const { publicRuntimeConfig } = getConfig();

const CourseSearch = () => {
	const [prompt, setPrompt] = useState("")

	// Input Errors
	const [showError, setShowError] = useState(false)
	const [inputError, setInputError] = useState("")

	// Loading Courses
	const [showLoading, setShowLoading] = useState(false)
	const [coursesList, setCoursesList] = useState("")
	const [courseUpdate, setCourseUpdate] = useState("")

	 useEffect(() => {
		if (courseUpdate !== ""){
			setCoursesList(createCourseCard(courseUpdate))
		}
	 },[courseUpdate])

	// Check if user prompt is valid
	const validateInput = (prompt) => {
		if (typeof(prompt) != "string"){
			setInputError("Prompt should be a string!")
			return false
		}
		if (prompt.length > 100){
			setInputError("Prompt should be at most 100 characters!")
			return false
		}
		if (prompt.length == 0){
			setInputError("Prompt cannot be empty!")
			return false
		}
		return true
	}

	// Run if user presses the enter key
	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault()
			setShowError(false)

			// If input is valid send request to api
			if (validateInput(prompt)){
				const url = publicRuntimeConfig.SERVER_URL + "api/"
				axios.post(url, { prompt: prompt})
					.then((response) => {
						// Remove loading text
						setShowLoading(false)
						setCourseUpdate(response.data)
					})
					.catch((error) => {
						// console.log(error)
					})
			}
			else{
				setShowError(true)
			}
			// Show loading text until response from server is recieved
			setShowLoading(true)
		}
	}

	// Run whenever user starts to type
	const handleInputChange = (e) => {
		setPrompt(e.target.value)
	}

	// Create cards to display each course
	const createCourseCard = (data) => {
		return data.courses.map((course, id) =>{
			return (
				<CourseCard 
					code={course.code}
					name={course.name}
					credits={course.credits}
					description={course.description}
					prerequisites={course.prerequisites}
					key={id}
				/>
			)
		})
	}

	return (
		<div className={styles.courseSearchContainer}>
			<div className={styles.searchContainer}>
				<input 
					placeholder="Biology and computers ..."
					maxLength="100"
					value={prompt}
					onChange={handleInputChange}
					onKeyDown={handleKeyDown}
				/>
				{showError && <span>{inputError}</span>}
				<p>Press enter to search</p>

				<div className={styles.promptOptionsContainer}>
					<div className={styles.promptOptionsGreen} onClick={()=>{setPrompt("Biology and Programming")}}>
						Biology and Programming
					</div>
					<div className={styles.promptOptionsBlue} onClick={()=>{setPrompt("AI and Robotics")}}>
						AI and Robotics
					</div>
					<div className={styles.promptOptionsOrange} onClick={()=>{setPrompt("Business and Machine Learning")}}>
						Business and Machine Learning
					</div>
				</div>
			</div>

			<div className={styles.courseContainer}>
				{showLoading && <p>Loading courses ...</p>}
				{!showLoading && coursesList}
			</div>
		</div>
	)
}

export default CourseSearch 