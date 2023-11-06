export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}
//Creamos una interfaz para utilizarla mas tarde como tipo de variable de nuestro componente home.component.ts
//Interfaz creada con el comando ng generate interface housinglocation
