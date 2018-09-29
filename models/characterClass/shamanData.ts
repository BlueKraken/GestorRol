export interface AttributeFromJson {
  name: string,
  value?: number,
  conditionalValue?: {
    value: number,
    condition: string
  }
};

export const ShamanData = {
  name: "chaman",
  initialPoints: 3,
  initialAttributes: [
    { name: 'baseMorale', value: 6 },
    { name: 'actionSpeed', value: 2 },
    {
      name: 'advanceBoxes', 
      value: 1, 
      conditionalValue: {
        value: 2,
        condition: 'cuando se supere +3PD constante'
      }
    },
    // TODO: diseñar este tipo de atributo
    /*{ name: 'energyOptionsCost',
      value: "Agregar 5 a coste de energía en talento que ocupe tiempo, " + 
        "o 11 de energía a talento pasivo con coste o instantáneo, y " +
        "obtiene +3 ataque acumulativo por el resto de la batalla" 
    },*/
    { name: 'fortitude', value: 3 },
    { name: 'will', value: 4 },
    { name: 'intelligenceTests', value: 1 },
  ],
  initialRaceAttributes: {
    maon: {
      attributes: [
        { name: 'totalEnergy', value: 11 },
        { name: 'totalHealthPoints', value: 14 },
        { name: 'reflexes', value: 1 },
        { name: 'dexterityTests', value: 3 },
        { name: 'fortitude',
          conditionalValue: {
            value: 5,
            condition: 'by empty hand'
          }
        },
        { name: 'strengthTests',
          conditionalValue: {
            value: 8,
            condition: 'by empty hand'
          }
        }
      ],
      notes: "El Hombre de Maón puede ocupar sólo rodela como potencial racial."
    },
    mediano: {
      attributes: [
        { name: 'totalEnergy', value: 23 },
        { name: 'totalHealthPoints', value: 8 },
        { name: 'reflexes',
          conditionalValue: {
            value: 8,
            condition: 'by empty hand'
          },
          value: 3
        },
        { name: 'stealth', value: 6 },
        { name: 'clevernessAndDeduction', value: 2 },
      ],
      notes: "El Mediano puede ocupar sólo rodela como potencial racial."
    }
  },
  initialNotes: [
    "Nivel 1: Límite de crítico: Cabeza, 17. Torso, 10. Brazos, 15. Manos, 17. Piernas, 15. Pies, 17."
  ]
}