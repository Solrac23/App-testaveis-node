import { expect, test } from 'vitest'
import { Appointment } from '../entities/appointment'
import { getFutureDate } from '../__test__/utils/get-future-date'

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
  const startsAt = getFutureDate('2022-11-22')
  const endsAt = getFutureDate('2022-11-22')

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
