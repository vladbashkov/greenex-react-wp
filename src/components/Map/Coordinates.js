const getMapJSON = require('dotted-map').getMapJSON;
const mapJsonString = getMapJSON({ height: 60, grid: 'diagonal' });

export default mapJsonString;