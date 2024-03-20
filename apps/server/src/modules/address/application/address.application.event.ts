export namespace AddressApplicationEvent {
  export namespace AddressCreated {
    export const key = 'address.application.address.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
