import { TextField, Button } from "@material-ui/core"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import axios from "axios"
import "./style.css"

const Login = ({ setDataContent }) => {

	const schema = yup.object().shape({
		userName: yup.string().required("Email obrigatório"),
		password: yup.string().required("Senha obrigatória")
	})

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ resolver: yupResolver(schema) })

	const handleForm = ({ userName, password }) => {
		console.log(userName, password)
		const formData = { username: userName, password: password }
		axios
			.post("https://kenzieshop.herokuapp.com/sessions/", formData)
			.then(setDataContent("Requisição Completa"))
			.catch(() => setDataContent("Requisição Falhou"))
	}

	return (

		<section>

			<form
				onSubmit={handleSubmit(handleForm)}
				className="register">

				<div
					className="text-field" >
					<TextField
						label="User name"
						margin="normal"
						variant="outlined"
						size="medium"
						color="info"
						{...register("userName")}
						helperText={errors.userName?.message}
					/>

					<TextField
						label="Senha"
						margin="normal"
						variant="outlined"
						size="medium"
						color="info"
						type="password"
						{...register("password")}
						helperText={errors.password?.message}
					/>
				</div>

				<div>
					<Button
						type="submit"
						variant="contained"
						color="primary" >
						Enviar
					</Button>
				</div>


			</form>
		</section>

	)
}

export default Login