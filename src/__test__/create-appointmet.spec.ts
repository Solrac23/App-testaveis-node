import { describe, expect, it } from "vitest";
import { InMemoryAppointmentsRepository } from "../../repositories/in-memory/in-memory-appointments-repository";
import { Appointment } from "../entities/appointment";
import { CreateAppointment } from "../use-cases/create-appointment";
import { getFutureDate } from './utils/get-future-date'

describe('Create Appointment', () => {
  it('should be able to create a new Appointment', () => {
    const appointmentsRepository = new InMemoryAppointmentsRepository()
    const createAppointment = new CreateAppointment(appointmentsRepository)

    const startsAt = getFutureDate('2022-11-21')
    const endsAt = getFutureDate('2022-11-22')

    expect(createAppointment.execute({
      customers: 'Jhon', 
      startsAt, 
      endsAt})).resolves.toBeInstanceOf(Appointment)

  })

  it('should not be able to create an Appointment with overlapping dates', async () => {
    const appointmentsRepository = new InMemoryAppointmentsRepository()
    const createAppointment = new CreateAppointment(appointmentsRepository)

    const startsAt = getFutureDate('2022-11-10')
    const endsAt = getFutureDate('2022-11-15')

    await createAppointment.execute({
      customers: 'Jhon',
      startsAt, 
      endsAt
    })

    expect(createAppointment.execute({
      customers: 'Jhon', 
      startsAt: getFutureDate('2022-11-14'), 
      endsAt: getFutureDate('2022-11-18')
    })).rejects.toBeInstanceOf(Error)

  })
})