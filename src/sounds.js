import Pizzicato from 'pizzicato'

let sounds = []
let soundsFrequencies = [659.255, 587.33, 523.251, 493.883, 440]

for(let i = 0 ; i < 5; i++){
    sounds.push(
        new Pizzicato.Sound({
            source: 'wave',
            options: {
                type: 'triangle',
                frequency: soundsFrequencies[i]
            }
        })
    )
}

export default sounds