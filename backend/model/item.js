const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
	id: {
		type: Number,
	},
	title: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		// required: true,
	},
});

module.exports = mongoose.model("item", itemSchema, "item");
