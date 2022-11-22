import { expect, test } from 'vitest'
import { Appointment } from '../entities/appointment'

test('create an appointment', () => {
  const startsAt = new Date()
  const endsAt = new Date()

  startsAt.setDate(startsAt.getDate() +1)
  endsAt.setDate(endsAt.getDate() +2)

  const appointment = new Appointment({
    customers: 'Jhon',
    startsAt,
    endsAt
  })
  expect(appointment).toBeInstanceOf(Appointment)
  expect(appointment.customer).toEqual('Jhon') 
})

test('cannot create an appointment with same end date and start date', () => {
  const startsAt = new Date()
  const endsAt = new Date()
  
  startsAt.setDate(startsAt.getDate() +2)
  endsAt.setDate(endsAt.getDate() +1)

  expect(() => {
    return  new Appointment({
      customers: 'Jhon',
      startsAt, 
      endsAt
    })
  }).toThrow()

})

test('cannot create an appointment with start date before now', () => {
  const startsAt = new Date()
  const endsAt = new Date()

  startsAt.setDate(startsAt.getDate() -1)
  endsAt.setDate(endsAt.getDate() +3)

  expect(() => {
    return  new Appointment({
      customers: 'Jhon',
      startsAt, 
      endsAt
    })
  }).toThrow()

})
