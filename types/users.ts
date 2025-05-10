interface Address {
  city: string;
  geo: Geo;
  street: string;
  suite: string;
  zipcode: string;
}
interface Geo {
  lat: string;
  lng: string;
}
interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}
export interface IUsersResponse {
  id: string;
  address: Address;
  company: Company;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
}
