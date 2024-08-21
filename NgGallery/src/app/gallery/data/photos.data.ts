import { Guid } from "guid-typescript";
import { Photo } from '../types/photo.type';

export const photos: Photo[] = [
    {
      id: Guid.create(),
      title: 'Mi perro Boby',
      created_at: new Date(),
      description: 'Mi perro Boby es muy juguetón',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      favorite: false,
    },
    {
      id: Guid.create(),
      title: 'Climbing',
      created_at: new Date(),
      description:
        'Climbing the mountain, never coming down, break into the contents, never falling down',
      image:
        'https://images.unsplash.com/photo-1719937206930-84afb0daf141?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      favorite: true
    },
    {
      id: Guid.create(),
      title: 'My house into the woods',
      created_at: new Date(),
      description:
        'My house is in the woods, three kilometers from the village',
      image:
        'https://plus.unsplash.com/premium_photo-1686090450479-370d5ddf4de1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      favorite: true
    },
    {
      id: Guid.create(),
      title: 'Nature and Waterfalls',
      created_at: new Date(),
      description:
        'Nature and Waterfalls, the perfect combination to relax and enjoy the view',
      image:
        'https://images.unsplash.com/photo-1724094505377-ac01c7813010?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      favorite: true
    },
    {
      id: Guid.create(),
      title: 'My new Samsung battery',
      created_at: new Date(),
      description:
        'My new Samsung battery, the best battery in the market, 100% recommended',
      image:
        'https://images.unsplash.com/photo-1719937050601-969f4f25d060?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      favorite: false
    },
    {
      id: Guid.create(),
      title: 'Lost in the hardware assembling',
      created_at: new Date(),
      description:
        'Lost in the hardware assembling, the best way to learn how to build a computer',
      image:
        'https://images.unsplash.com/photo-1721332153282-3be1f363074d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      favorite: false
    },
  ];
