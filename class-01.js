/**
 * https://www.dofactory.com/javascript/variables
 * // 
 * 1. string
 * 2. number
 * 3. boolean
 * 4. undefined
 * 5. null
 * 
 * // 
 * 6. symbol
 * 7. function
 * 8. object
 * 9. bigint
 */


// STRING AND NUMBER

var number = 1 /// number
var variable1 = 'meu texto' /// string

var variable1_02 = String(number) /// string
var variable1_03 = `${number} não pode ser ${2}` /// convert ou concatenate 
var variable1_04 = 'meu balanço é igual a :' + number /// concatenate

var variable1_04_extra = number.toString() /// string

var stringNumber = '1'
var variable1_05 = Number(stringNumber) /// number
var variable1_06 = +stringNumber /// number


/// BOOLEAN

var variable2 = false
var variable2_01 = true

var variable2_02 = Boolean() /// false
var variable2_03 = Boolean('any string') /// true
var variable2_04 = Boolean(0) /// false
var variable2_05 = Boolean(1) /// true
var variable2_06 = Boolean('false') /// true
var variable2_07 = Boolean('') /// false
var variable2_08 = Boolean(undefined) /// false
var variable2_09 = Boolean(null) /// false



///  UNDEFINED / NULL

var variable3 = undefined  /// absence of value
var variable3_01; /// undefined


var variable4 = null


/// SCOPES
const str = String('string');/// global scope

{
    const str = String('hello') /// custom scope 
    {
        const str = String('World') /// Inner scope
        {
            const str3 = 'not accessible'
            /// str3 only works here
        }
    }
}

const str2 = str3  /// error





// let  variable2 = 'ola' /// string
// const variable3 = 'ola' /// string

// variable1 = 'tchau'
// variable2 = 'tchau'
// variable3 = 'tchau' /// error

// const CONFIGURACAO_DO_SISTEMA = 'version_02'
// const configuracaoDoSistema = 'version_02'


/// Composition [key:value]
// const objeto = {
//     ola: true
// }

// objeto.tchau = true

// objeto.ola = 'false'
