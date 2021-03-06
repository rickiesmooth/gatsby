const convertHrtime = require(`convert-hrtime`)

module.exports = startTime => {
  const elapsed = process.hrtime(startTime)

  return convertHrtime(elapsed)[`seconds`].toFixed(3)
}
