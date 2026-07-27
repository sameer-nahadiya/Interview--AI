const moongose = require('mongoose');


const blacklistTokenSchema = new moongose.Schema({
    token: {
        type: String,
        required: [true, "token is required to be added in the blacklist"],
    }
},{
    timestamps: true
})

const TokenBlacklistModel = moongose.model("blacklistToken", blacklistTokenSchema)

module.exports = TokenBlacklistModel