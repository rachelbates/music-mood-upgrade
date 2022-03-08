import { useRouter } from 'next/router';
import Header from '../components/Header.js'

export default function Home() {
	return (
		<>
		<Header></Header>
			<div className="grid background-main">
				<h1 className="text-center mb-5 pt-5">Begin Your Musical Mood Journal</h1>
				<div className="container-sm d-lg-flex pt-5 justify-content-around">
					<div className="background-element col-lg-5 mb-5 mb-5 p-4 rounded neu-shadow-1 blue-module">
						<form className="form-signin" action="/login" method="POST">
							<h2 className="form-signin-heading text-center mb-4">Sign In</h2>

							<div className="form-group">
								<input
									type="email"
									name="username"
									className="form-control input-lg"
									placeholder="Email Address"
									required
									autofocus
								/>
							</div>

							<div className="form-group">
								<input
									type="password"
									name="password"
									className="form-control input-lg"
									placeholder="Password"
									required
								/>
							</div>

							<div className="display-block text-center">
								<button className="btn btn-lg neu-button-1 btn-block btn-blue" type="submit">
									Sign In
								</button>
							</div>
						</form>
					</div>

					{/* <!-- REGISTER HERE--> */}
					<div className="background-element col-lg-5 mb-5 p-4 rounded neu-shadow-1 register-module">
						<form className="form-signin" action="/register" method="POST">
							<h2 className="text-center mb-4">Create Account</h2>
							<div className="form-group">
								<input
									type="email"
									name="username"
									className="form-control input-lg"
									placeholder="Email Address"
									required
									autofocus
								/>
							</div>

							<div className="form-group">
								<input
									type="password"
									name="password"
									className="form-control input-lg"
									placeholder="Password"
									required
								/>
							</div>

							<div className="form-group">
								<input
									type="fname"
									name="fname"
									className="form-control input-lg"
									placeholder="First Name"
									required
								/>
							</div>
							<div className="form-group">
								<input
									name="zipcode"
									className="form-control input-lg"
									type="text"
									p
									attern="[0-9]*"
									placeholder="Zip Code"
									required
								/>
							</div>
							<div className="display-block text-center">
								<button className="btn btn-lg neu-button-1 btn-block btn-green" type="submit">
									Register
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
