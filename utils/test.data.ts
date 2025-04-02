import {faker} from '@faker-js/faker'

export function generateUser(){
    const username = faker.internet.username().toLowerCase()
    const password = generatePassword()
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    return{ username, password, firstName, lastName}
}

export function generatePassword(){
    return faker.string.alpha({casing: 'upper', length: 1}) + faker.internet.password({length: 8, memorable: true}) + "2!" // Added some extra chars to meet the passwords criteria :) 
}