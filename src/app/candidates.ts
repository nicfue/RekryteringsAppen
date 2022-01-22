import { Status } from "./recruitment/model/status.model";

export const CANDIDATES = [
  {
    id: 32,
    firstName: 'Pelle',
    lastName: 'Nilsson',
    age: 44,
    email: 'pelle.nilsson@test.se',
    address: 'Pellegatan 4',
    status: Status.Kontakt
  },
  {
    id: 76,
    firstName: 'Kalle',
    lastName: 'Svensson',
    age: 21,
    email: 'kalle.svensson@test.se',
    address: 'Kallegatan 8',
    status: Status.Avslutad
  },
  {
    id: 44,
    firstName: 'Nisse',
    lastName: 'Nilsson',
    age: 44,
    email: 'nisse.nilsson@test.se',
    address: 'nissegatan 65',
    status: Status.Erbjudande
  },
  {
    id: 3,
    firstName: 'Putte',
    lastName: 'Puttson',
    age: 44,
    email: 'putte.puttson@test.se',
    address: 'Puttegatan 88',
    status: Status.Intervju
  },
  {
    id: 8,
    firstName: 'Svenne',
    lastName: 'Svensson',
    age: 42,
    email: 'svenne.svensson@test.se',
    address: 'svennegatan 65',
    status: Status.Kontakt
  }
]
