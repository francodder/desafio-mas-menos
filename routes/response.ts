import { Response, Request } from 'express'

const sendResponse = (res: Response, status: number, success: boolean, message: any, result?: any) => {

    res.status(status).json({
        success,
        message,
        result
    })
}

const sendNotAllowed = (req: Request, res: Response) => {

    res.status(405).json({
        success: false,
        message: 'Este método no está permitido, pruebe con POST'
    })
}

module.exports = {
    sendResponse,
    sendNotAllowed
}