const Platform = require('../models/platform-model');
const Message = require('../models/message-model');

module.exports = async (req, res, next) => {
  const foundPlatforms = await Platform.find({});
  const foundMessages = await Message.find({});
  messagesArray = [];
  foundPlatforms.forEach(platform => {
    const temp = {
      platformName: platform.platform,
      platformMessages: foundMessages.filter(message => message.platformId == platform._id)
    };
    messagesArray.push(temp);
  });

  req.messagesArray = messagesArray;
  next();
}
