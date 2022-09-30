import { describe, expect, it } from "vitest";
import { Appointment } from "../entities/appointment";
import { CreateAppointment } from "../use-cases/create-appointment";

describe('Create Appointment', () => {
  it('should be able to create a new Appointment', () => {
    const createAppointment = new CreateAppointment()

    const startsAt = new Date()
    const endsAt = new Date()

    endsAt.setDate(endsAt.getDate() + 1)

    expect(createAppointment.execute({
      customers: 'Jhon', 
      startsAt, 
      endsAt})).resolves.toBeInstanceOf(Appointment)

  })
})