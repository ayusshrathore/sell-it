const User = require("../model/user");

exports.registerUser = (req, res) => {
	let { name, email, password } = req.body;
	let user = new User({ name, email, password });
	user.save()
		.then((user) => {
			if (user) {
				console.log("User saved");
				return res.status(200).send(user);
			}
		})
		.catch((err) => {
			console.log(err);
			return res.status(500).send(err);
		});
};

exports.loginUser = (req, res) => {
	let { email, password } = req.body;
	User.findOne({ email, password })
		.then((user) => {
			if (user) {
				console.log("User logged in");
				return res.status(200).send(user);
			}
		})
		.catch((err) => {
			console.log(err);
			return res.status(500).send(err);
		});
};

exports.getUsers = (req, res) => {
	User.findOne()
		.then((users) => {
			if (users) return res.status(200).send(users);
		})
		.catch((err) => {
			res.status(500).send(err);
		});
};
