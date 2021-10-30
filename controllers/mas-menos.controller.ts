import { Request, Response } from "express";
const { sendResponse } = require('../routes/response')
import MasMenos from '../models/mas-menos.model'

const masMenos = (req: Request, res: Response) => {

    try {

        let respond = false
        const numbers: number[] = req.body

        // Valida si el payload es un Array
        if(!Array.isArray(numbers)) {
            sendResponse(res, 400, false, 'Debe proveer un array con valores numéricos')
            return
        }

        // Valida si los valores del array son numéricos
        numbers.forEach(x => {
            if (isNaN(x)) {
                sendResponse(res, 400, false, 'Solo se permiten valores numéricos')
                respond = true
            }
        })
        if(respond) return

        // Instancia la clase que procesa los números
        const masMenos = new MasMenos(numbers)
        const result = masMenos.getResult()

        sendResponse(res, 200, true, 'Acción completada', result)
        
    } catch(err) {
        sendResponse(res, 400, false, 'Debe proveer un array con valores numéricos')
    }
}

module.exports = {
    masMenos
}