export const character = {
  name: "Taiju Katsumata",
  status: "alive",
  stats: {
    judgement: 6,
    optimization: 6,
    charisma: 3,
    knowledge: 3,
    "E?": 3,
    "Y?": 3,
  },
  xp: 21,
  level: 2,
  gs: 160000,
  origin: "SB",
  alignment: "none",
  reputation: {
    raytech: {
      rep: 0,
      status: "neutral",
    },
    smith: {
      rep: 0,
      status: "neutral",
    },
    shimizawa: {
      rep: 0,
      status: "neutral",
    },
    vcg: {
      rep: 0,
      status: "neutral",
    },
    nmg: {
      rep: 0,
      status: "neutral",
    },
  },
  status_effect: ["status effect 1", "status effect 2"],
  upgrades: [
    {
      name: "Reinforced Skeleton",
    },
    {
      name: "EX Plate",
    },
    {
      name: "Chameleon Skin",
    },
    {
      name: "Thumbs",
    },
  ],
  weapons: [
    {
      name: "Bile Spewer",
      nickname: "Vomit",
      shots: "2d6",
      keywords: ["Hardpoint", "Magazine"],
      traits: ["Torrent 6", "Nimble"],
      effects: [],
      "range-min": 8,
      "range-max": 12,
      ammo: [
        {
          name: "Bio-Plasma",
          shortening: "BP",
          amount: 1,
          damage_type: "EM",
          strength: 6,
          damage: 1,
          special_effects: [],
        },
        {
          name: "Corrosive",
          shortening: "C",
          amount: 1,
          damage_type: "CH",
          strength: 5,
          damage: 2,
          special_effects: [],
        },
        {
          name: "Methane",
          shortening: "M",
          amount: 1,
          damage_type: "TH",
          strength: 5,
          damage: 1,
          special_effects: [
            "When wounding opponent will take 1 total structure damage at the start of ther activation - Duration: 2 Activations",
          ],
        },
      ],
      selected_ammo: "Bio-Plasma",
      equipped: true,
    },
    {
      name: "Scale Launcher",
      nickname: "Chipper",
      shots: "2d6",
      keywords: ["Hardpoint", "Magazine"],
      traits: ["Torrent 3", "Nimble"],
      effects: [],
      "range-min": 12,
      "range-max": 16,
      ammo: [
        {
          name: "",
          amount: 1,
        },
      ],
      selected_ammo: "none",
      equipped: true,
    },
    {
      name: "Bio Mortar",
      nickname: "Chucker",
      shots: 1,
      keywords: ["Hardpoint", "Salvo"],
      traits: ["Indirect Fire", "Cumbersome"],
      effects: ["CH + 2", "EX + 2"],
      "range-min": 60,
      "range-max": 100,
      ammo: [
        {
          name: "",
          amount: 1,
        },
      ],
      selected_ammo: "none",
      equipped: true,
    },
    {
      name: "Bone Spike Cannon",
      nickname: "Spiker",
      shots: 1,
      keywords: ["Hardpoint", "Magazine"],
      traits: ["Heavy", "Precision"],
      effects: ["CH + 2", "KN + 1"],
      "range-min": 36,
      "range-max": 48,
      ammo: [
        {
          name: "",
          amount: 1,
        },
      ],
      selected_ammo: "none",
      equipped: true,
    },
    {
      name: "Bone Spike Cannon",
      nickname: "Spiker",
      shots: 1,
      keywords: ["Hardpoint", "Magazine"],
      traits: ["Heavy", "Precision"],
      effects: ["CH + 2", "KN + 1"],
      "range-min": 36,
      "range-max": 48,
      ammo: [
        {
          name: "",
          amount: 1,
        },
      ],
      selected_ammo: "none",
      equipped: true,
    },
  ],
  mech_stats: {
    "movement": 6,
    "defenses": [
      {
        name: "Kinetic",
        shortening: "KN",
        amount: 7,
      },
      {
        name: "-",
        shortening: "CH",
        amount: 5,
      },
      {
        name: "-",
        shortening: "EM",
        amount: 6,
      },
      {
        name: "-",
        shortening: "TH",
        amount: 6,
      },
      {
        name: "-",
        shortening: "EX",
        amount: 6,
      },
      {
        name: "-",
        shortening: "EW",
        amount: 4,
      },
    ],
    "structure": {
      total: 20,
      cockpit: 10,
      core: 10,
      components: [
        {
          name: "Front left leg",
          shortening: "FLL",
          structure: 7,
        },
        {
          name: "Front Right leg",
          shortening: "FRL",
          structure: 7,
        },
        {
          name: "Middle left leg",
          shortening: "MLL",
          structure: 7,
        },
        {
          name: "Middle Right leg",
          shortening: "MRL",
          structure: 7,
        },
        {
          name: "Rear left leg",
          shortening: "RLL",
          structure: 7,
        },
        {
          name: "Rear right leg",
          shortening: "FRL",
          structure: 7,
        },
      ],
    },
    "keywords": ["Siege Enginge", "Bastion Instinct",
      "Cumbersome gains HEAVY"
    ],
    "image": "https://i.imgur.com/u0tRNe5.jpeg"
  },
};
