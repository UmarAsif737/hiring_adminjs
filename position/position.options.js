const { Position } = require("./position.model");
const { hiringMenu } = require("../common/navigation");

const PositionResourceOptions = {
  resource: Position,
  options: {
    navigation: {
      icon: "Briefcase", // Use the name of the Font Awesome icon without the 'fa-' prefix
      name: null, // This keeps the resource at the top level without any menu group
    },
    properties: {
      _id: {
        isVisible: false,
      },
    },
  },
};

module.exports = {
  PositionResourceOptions,
};
