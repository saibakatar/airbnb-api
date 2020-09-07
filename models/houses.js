const mongoose = require('mongoose')

module.exports = mongoose.model('houses', {
	amenities: [
		{
			name: {
				type: String,
				required: [true, 'name is required']
			},
			icon: {
				type: String,
				required: [true, 'icon is required']
			}
		}
	],
	plus: {
		type: Boolean,
		default: false
	},
	images: [String],
	title: {
		type: String,
		required: [true, 'title is required']
	},
	description: {
		type: String,
		required: [true, 'description is required']
	},
	type: {
		name: {
			type: String,
			required: [true, 'name is required']
		}
	},
	city: {
		type: String,
		required: [true, 'city is required']
	},
	region: {
		type: String,
		required: [true, 'region is required']
	},
	price: {
		type: Number,
		required: [true, 'price is required']
	},
	guests: {
		type: Number,
		required: [true, 'guests is required']
	},
	bathrooms: {
		type: Number,
		required: [true, 'bathrooms is required']
	},
	bedrooms: {
		type: Number,
		required: [true, 'bedrooms is required']
	},
	rating: Number,
	host: {
		name: {
			type: String,
			required: [true, 'name is required']
		},
		email: {
			type: String,
			required: [true, 'email is required']
		},
		avatar: {
			type: String
		},
		location: {
			type: String
		},
		password: {
			type: String,
			required: [true, 'password is required']
		}
	},
	lat: {
		type: Number
	},
	lng: {
		type: Number
	},
	reviews: [
		{
			author: {
				name: {
					type: String,
					required: [true, 'name is required']
				},
				email: {
					type: String,
					required: [true, 'email is required']
				},
				avatar: {
					type: String
				},
				location: {
					type: String
				},
				password: {
					type: String,
					required: [true, 'password is required']
				}
			},
			rating: {
				type: Number,
				default: 0
			},
			content: {
				type: String,
				required: [true, 'content is required']
			}
		}
	]
})
