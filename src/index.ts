import express from 'express'
import ApiRoute from './routes/index.routes'
import errorHandler from './middleware/errorHandler'

const PORT = 5000

const app = express()
app.use(express.json())
app.use('/api', ApiRoute)
app.use(errorHandler)

app.listen(PORT, () => console.log(`server running on ${PORT}`))