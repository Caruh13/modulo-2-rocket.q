module.exports = {
  create(req, res) {
    let roomId = 123456
    for (var i = 0; i < 6; i++) {
      roomID += Math.floor(Math.random() * 10).toString()
    }

    res.redirect(`/room/${roomId}`)
  }
}