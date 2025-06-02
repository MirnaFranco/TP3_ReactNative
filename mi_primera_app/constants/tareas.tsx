export interface Subtarea {
  id: string;
  titulo: string;
  descripcion: string;
  estado: string;
}

export interface Tarea {
  id: string;
  titulo: string;
  subtareas: Subtarea[];
}

export const tareas: Tarea[] = [
  {
    id: '1',
    titulo: 'Lavar la ropa',
    subtareas: [
      {
        id: '1-1',
        titulo: 'Separar ropa por color',
        descripcion: 'Dividir ropa blanca, de color y oscura',
        estado: 'Pendiente',
      },
      {
        id: '1-2',
        titulo: 'Colocar ropa en el lavarropas',
        descripcion: 'Agregar jabón y suavizante. Iniciar ciclo de lavado.',
        estado: 'En progreso',
      },
      {
        id: '1-3',
        titulo: 'Tender la ropa',
        descripcion: 'Colgar la ropa en el patio para que se seque.',
        estado: 'Pendiente',
      },
    ],
  },
  {
    id: '2',
    titulo: 'Estudiar para el examen',
    subtareas: [
      {
        id: '2-1',
        titulo: 'Leer apuntes',
        descripcion: 'Revisar los apuntes de clase y resúmenes.',
        estado: 'Pendiente',
      },
      {
        id: '2-2',
        titulo: 'Resolver ejercicios',
        descripcion: 'Practicar con ejercicios del TP anterior.',
        estado: 'Pendiente',
      },
    ],
  },
];
