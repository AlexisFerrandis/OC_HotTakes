const mongoose = require("mongoose");

const sauceSchema = mongoose.Schema({
	userId: { type: String, required: true },
	name: { type: String, required: true, maxLength: 32 },
	manufacturer: { type: String, required: true, maxLength: 32 },
	description: { type: String, required: true, maxLength: 62 },
	mainPepper: { type: String, required: true, maxLength: 32 },
	imageUrl: { type: String, required: true },
	heat: { type: Number, required: true },
	likes: { type: Number },
	dislikes: { type: Number },
	usersLiked: { type: Array },
	usersDisliked: { type: Array },
});

module.exports = mongoose.model("Sauce", sauceSchema);
