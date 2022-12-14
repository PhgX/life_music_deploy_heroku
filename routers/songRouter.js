const auth = require("../middleware/auth")
const songRouter = require('express').Router()
const FileController = require("../controllers/FileController");

songRouter.post('/song', auth, FileController.addNewSong);
songRouter.get('/songs',FileController.getAllPublicSong)
songRouter.patch('/song/:id', auth, FileController.updateSong);
songRouter.patch('/song/status/:id', auth, FileController.songPublicOrPrivate);
songRouter.delete('/song/:id', auth, FileController.deleteSong);
songRouter.get('/song/uploaded', auth, FileController.getUploadedSongs);
songRouter.get('/song/:id', auth, FileController.getSongById);
 
// songRouter.get('/song-new', FileController.getSongNew);
songRouter.get('/song-random', FileController.getSongRandom);


songRouter.get('/song/:id', auth, FileController.getSongUser);
songRouter.get('/song/search/:key', FileController.searchSong);
// songRouter.get('/song', auth, FileController.getUserSong);
module.exports = songRouter
