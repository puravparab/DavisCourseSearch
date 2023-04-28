import { useState } from 'react'
import getConfig from 'next/config';

import axios from 'axios';
import styles from '../styles/courseSearch.module.css'

const { publicRuntimeConfig } = getConfig();

const CourseSearch = () => {
	const [prompt, setPrompt] = useState("")

	// Input Errors
	const [showError, setShowError] = useState(false)
	const [inputError, setInputError] = useState("")

	// Loading Courses
	const [showLoading, setShowLoading] = useState(false)

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
						console.log(response.data)
					})
					.catch((error) => {
						console.log(erro)
					})
			}
			else{
				setShowError(true)
			}

			// Show loading text until response from server is recieved
			setShowLoading(true)
		}
	}
	const handleInputChange = (e) => {
		setPrompt(e.target.value)
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

			</div>
			<div className={styles.courseContainer}>
				{showLoading && <p>Loading courses ...</p>}
			</div>
		</div>
	)
}

export default CourseSearch 