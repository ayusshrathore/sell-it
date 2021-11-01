const Item = require("../model/item");

exports.addItem = (req, res) => {
	let { id, title, price, image } = req.body;
	let item = new Item({
		id,
		title,
		price,
		image,
	});
	item.save()
		.then((item) => {
			if (item) {
				console.info("Item saved");
				res.status(200).send(item);
			}
		})
		.catch((err) => {
			console.error(err);
			res.status(500).send(err);
		});
};

exports.getItem = (req, res) => {
	Item.find()
		.then((items) => {
			if (items) {
				res.status(200).send(items);
			}
		})
		.catch((err) => {
			res.status(500).send(err);
		});
};
