import { Appointment } from "../entities/appointment"

interface CreateAppointmentRequest{
  customers: string
  startsAt: Date
  endsAt: Date
}
type CreateAppointmentResponse = Appointment

export class CreateAppointment{
  async execute({ 
    customers, 
    startsAt, 
    endsAt}: CreateAppointmentRequest): Promise<CreateAppointmentResponse>{
    const appointment = new Appointment({
      customers, 
      startsAt, 
      endsAt
    })

    return appointment
  } 
}