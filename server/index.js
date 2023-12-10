import express from 'express'
import cors from 'cors'
import path from 'path'
import 'dotenv/config'

const __dirname = path.resolve()

const port = process.env.PORT || 8080
const host = process.env.HOST || '127.0.0.1'

const app = express()

app.use(cors())
app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')))
app.use((req, res) => res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html')))

app.listen(port, host, () => {
    console.log(`server is start on http://${host}:${port}`)
})


process.on('SIGINT', () => {
    console.log('server close now')
    process.exit()
})