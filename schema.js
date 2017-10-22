const uuid = require('uuid');
const mongoose = require('mongoose');

const toolSchema = mongoose.Schema({
	toolName: {type: String, require: true},
	toolQuality: {type: String, require: true},
	toolPrice: {type: String, require: true},
	toolPriceUnit: {type: String, require: true},
	toolDescription: {type: String, require: true},
	toolImgUrl: {type: [String]},
	toolLocation: {type: [String], require: true},
	toolProjectType: {type: String, require: true},
	toolType: {type: String, require: true},
	toolOwner: {type: String, require: true},
	toolAvailable: {type: String, require: true}      
});

toolSchema.methods.apiRepr = function() {
	return {
		id: this._id,
		toolName: this.toolName,
		toolQuality: this.toolQuality,
		toolPrice: this.toolPrice,
		toolPriceUnit: this.toolPriceUnit,
		toolDescription: this.toolDescription,
		toolImgUrl: this.toolImgUrl,
		toolLocation: this.toolLocation,
		toolProjectType: this.toolProjectType,
		toolType: this.toolType,
		toolOwner: this.toolOwner,
		toolAvailable: this.toolAvailable
	};
}

const ToolPackage = mongoose.model('ToolPackage', toolSchema);

module.exports = {ToolPackage};