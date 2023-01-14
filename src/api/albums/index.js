const AlbumsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'albums',
  version: '1.0.0',
  register: async (server, {
    albumsService,
    storageService,
    AlbumsValidator,
    UploadsValidator,
  }) => {
    const albumsHandler = new AlbumsHandler(
      albumsService,
      storageService,
      AlbumsValidator,
      UploadsValidator,
    );
    server.route(routes(albumsHandler));
  },
};
