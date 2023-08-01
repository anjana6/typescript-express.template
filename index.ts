import express from 'express'
import ApiRoute from './src/routes/index.routes'

const PORT = 5000

const app = express()
app.use(express.json())
app.use('/api', ApiRoute)

app.listen(PORT, () => console.log(`server running on ${PORT}`))