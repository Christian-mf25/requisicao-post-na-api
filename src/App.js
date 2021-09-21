import Login from "./components/Login"
import { useState } from "react"
import "./App.css"

function App() {

	const [dataContent, setDataContent] = useState("")

	return (
		<div className="App">
			<Login
				setDataContent={setDataContent}
			/>
			<h2>
				{dataContent}
			</h2>
		</div>
	)
}

export default App