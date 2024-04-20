class Person {
  constructor(name) {
    this._name = this._captalize(name)
  }

  get name() {
    return this._name
  }

  set name(string) {
    this._name = this._captalize(string)
  }

  _captalize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
  }

  walk() {
    return `${this._name} esta andando`
  }

}

class Developer extends Person {
  constructor(name, codeLanguage) {
    super(name)
    this._codeLanguage = codeLanguage
  }
}

var person1 = new Person('Pedro')
person1.name = 'carlos'
console.log(person1)

var developer1 = new Developer('Marcos', 'JavaScript')
console.log(developer1)