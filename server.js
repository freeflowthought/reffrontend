// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const { queryParserMiddleware, launchEditorMiddleware } = require("react-dev-inspector/plugins/webpack")
const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
let port = 3000
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const middlewares = [
        /**
         * react-dev-inspector configuration two middlewares for nextjs
         */
        queryParserMiddleware,
        launchEditorMiddleware,

        /** Next.js default app handle */
        (req, res) => handle(req, res),
      ]

      const middlewarePipeline = middlewares.reduceRight(
        (next, middleware) => () => {
          middleware(req, res, next)
        },
        () => {}
      )

      middlewarePipeline()
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })

  const listenServer = () => {
    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://${hostname}:${port}`)
      }).on("error", (err) => {
         if (err.code === 'EADDRINUSE') {
            port++
            listenServer()
         }
      })
  }
  listenServer()
})