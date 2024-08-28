import { Hono } from 'hono'
import { api } from './router/router.api'

const app = new Hono()

app.route('/api', api)

console.log("Started devserver http://localhost:3000")

export default app