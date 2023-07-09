module.exports = (req, res, next) => {
  res.header('X-Hello', 'World')
  const method = req.method
  const url = req.url
  if (url === '/daterewards') {
    const day = new Date().getDay()
    res.send(String(day))
  } else if (method === 'GET') {
    next()
  } else if (url === '/users') {
    console.log(url)
    next()
  } else {
    res.sendStatus(404)
  }
}
