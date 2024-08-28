import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { api } from './router/router.api'

const app = new Hono()

app.route('/api', api)

app.get('/*', serveStatic({ root: 'dist/app' }))

export default app