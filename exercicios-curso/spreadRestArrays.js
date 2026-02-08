const frutas = ['Uva', 'Banana', 'Maçã', 'Kiwi']
const maisFrutas = ['Morango', 'Goiaba', 'Pêra']

const clone = [...frutas]

const todasAsFrutas = [...frutas, ...maisFrutas]

frutas.push('Pitanga')

console.log(frutas)
console.log(maisFrutas)
console.log(clone)
console.log(todasAsFrutas)

const [primeira, segunda, ...restante] = todasAsFrutas
console.log(primeira)
console.log(segunda)
console.log(restante)