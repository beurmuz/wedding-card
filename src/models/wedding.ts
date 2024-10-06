export interface Wedding {
  id: number
  date: string
  location: Location

  message: {
    intro: string
    invitation: string
  }
  galleryImages: string[]
  attendCount: number

  groom: Person & { parents: Person[] } // Person을 갖되 parents는 Person의 Array
  bride: Person & { parents: Person[] }
}

export interface Location {
  lat: number
  lng: number
  name: string
  address: string
  link: string
  waytocome: {
    metro: string[]
    bus: string[]
  }
}

export interface Account {
  bankName: string
  accountNumber: string
}

export interface Person {
  name: string
  phoneNumber: string
  account: Account
}
