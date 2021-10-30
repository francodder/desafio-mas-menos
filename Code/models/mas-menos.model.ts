export default class MasMenos {

    private numbers: number[]

    constructor(numbers: number[]) {
        this.numbers = numbers
    }

    getResult(): number[] {
        const total = this.numbers.length 
        let positives = 0
        let negatives = 0
        let zeros = 0

        // Se establecen las cantidades 
        this.numbers.forEach(x => {
            if(x > 0) positives++;
            else if(x < 0) negatives++
            else zeros++
        })

        // Se formatean y retornan las fracciones
        return [
            Number.parseFloat((positives / total).toFixed(3)), 
            Number.parseFloat((zeros / total).toFixed(3)),
            Number.parseFloat((negatives / total).toFixed(3))
        ]
    }
}