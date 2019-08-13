# [@appgeist/storage](https://github.com/appgeist/storage) example with authentication

An example to demonstrate the usage of [@appgeist/storage](https://github.com/appgeist/storage) with authentication.

## Running

1. `yarn install` or `npm install`
2. `yarn dev` or `npm run dev`
3. Upload files by `POST`ing requests to paths such as `http://localhost:3000` or `http://localhost:3000/subfolder/to/store`. In Postman, make sure to:

   - set Authorization to **Bearer Token** and set the token to `--DUMMY-TOKEN--` (as specified in [auth.js](auth.js));
   - set Body type to `form-data`, add a File property with `file` key and select a file to upload.

4. In Postman, set Authorization to **Bearer Token** and set the token to `--DUMMY-TOKEN--` and request uploaded files by `GET`ting from URLs such as `http://localhost:3000/ceb88dea-5135-4321-8af8-846e29b7efc4.webp`, `http://localhost:3000/assets/ceb88dea-5135-4321-8af8-846e29b7efc4.jpg`, `http://localhost:3000/ceb88dea-5135-4321-8af8-846e29b7efc4-w200-h200.webp`, `http://localhost:3000/ceb88dea-5135-4321-8af8-846e29b7efc4-w50-h50-lq.jpg`, where `ceb88dea-5135-4321-8af8-846e29b7efc4` is the UUID returned by successfully uploading a picture to `http://localhost:3000`.

See [@appgeist/storage](https://github.com/appgeist/storage) README for more info and feel free to inspect the source code.

## License

The [ISC License](LICENSE).
