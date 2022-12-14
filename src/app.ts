import { Server } from '@hapi/hapi'
// import { routes } from './routes/user.routes'
import { routes } from './modules/User/routes'
import './database'

const init = async () => {
    const server: Server = new Server({
        port: 8080,
        host: 'localhost'
    })

    routes(server);

    await server.start()
    console.log(`server running on ${server.info.uri}`)
}

init();