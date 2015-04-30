'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
* Feed Schema
 */
var DiaperSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	timeFeed: {
		type: Number,
		default: 0,
		min: 0,
		max: 46
	},
	bottle: {
		type: Boolean
	},
	breast: {
		type: Boolean
	},
	amount: {
		type: Number,
		default: 0,
		min: 0,
		max: 39
	},
	comment: {
		type: String,
		default: '',
		trim: true
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Diaper', DiaperSchema);