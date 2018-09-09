export const chamanData = {
  name: "chaman",
  initialPoints: 3,
  initialAttributes: {
    baseMorale: { value: 6 },
    actionSpeed: { value: 2 },
    advanceBoxes: { 
      value: 1, 
      condition: "por asalto; pasará a moverse 2 casilleros cuando se supere +3PD constante"
    },
    energyOptionsCost: {
      value: "Agregar 5 a coste de energía en talento que ocupe tiempo, " + 
        "o 11 de energía a talento pasivo con coste o instantáneo, y " +
        "obtiene +3 ataque acumulativo por el resto de la batalla" 
    },
    fortitude: { value: 3 },
    will: { value: 4 },
    intelligenceTests: { value: 1 },
  },
  initialRaceAttributes: {
    maon: {
      attributes: {
        totalEnergy: { value: 11 },
        totalHealthPoints: { value: 14 },
        reflexes: { value: 1 },
        dexterityTests: { value: 3 },
        fortitude: {
          conditionalValue: {
            value: 5,
            condition: 'by empty hand'
          }
        },
        strengthTests: {
          conditionalValue: {
            value: 8,
            condition: 'by empty hand'
          }
        }
      },
      notes: "El Hombre de Maón puede ocupar sólo rodela como potencial racial."
    },
    mediano: {
      attributes: {
        totalEnergy: { value: 23 },
        totalHealthPoints: { value: 8 },
        reflexes: {
          conditionalValue: {
            value: 8,
            condition: 'by empty hand'
          },
          value: 3
        },
        stealth: { value: 6 },
        clevernessAndDeduction: { value: 2 },
      },
      notes: "El Mediano puede ocupar sólo rodela como potencial racial."
    }
  },
  initialNotes: [
    "Nivel 1: Límite de crítico: Cabeza, 17. Torso, 10. Brazos, 15. Manos, 17. Piernas, 15. Pies, 17."
  ]
}