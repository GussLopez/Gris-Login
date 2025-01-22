import { rateLimit } from 'express-rate-limit'

export const limiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 5,
    message: {"Error": "Haz alcanzado el límite de peticiones."}

})