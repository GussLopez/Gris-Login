import { rateLimit } from 'express-rate-limit'

export const limiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 10,
    message: {"error": "Haz alcanzado el límite de peticiones."}

})