export interface AppointmentProps {
   customers: string
   startsAt: Date
   endsAt: Date
}

export class Appointment {
  private props: AppointmentProps
  constructor(props: AppointmentProps) {
    const { startsAt, endsAt } = props

    if(startsAt <= new Date()) {
      throw new Error('startsAt must be greate than date now')
    }

    if(endsAt <= startsAt) {
      throw new Error('Endsat must be greater than Startsat')
    }

    this.props = props
  }
  

  
  get startAt() { 
    return this.props.startsAt
  }
  
  get endAt() { 
    return this.props.endsAt
  }

  get customer() { 
    return this.props.customers
  }
}