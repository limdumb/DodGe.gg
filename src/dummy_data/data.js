
export const lol = {
    "type": "champion",
    "format": "standAloneComplex",
    "version": "12.21.1",
    "data": {
      "Aatrox": {
        "id": "Aatrox",
        "key": "266",
        "name": "아트록스",
        "title": "the Darkin Blade",
        "image": {
          "full": "http://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/Aatrox.png",
          "sprite": "champion0.png",
          "group": "champion",
          "x": 0,
          "y": 0,
          "w": 48,
          "h": 48
        },
        "lore": "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance.",
        "blurb": "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...",
        "allytips": [
          "Use Umbral Dash while casting The Darkin Blade to increase your chances of hitting the enemy.",
          "Crowd Control abilities like Infernal Chains or your allies' immobilizing effects will help you set up The Darkin Blade.",
          "Cast World Ender when you are sure you can force a fight."
        ],
        "enemytips": [
          "Aatrox's attacks are very telegraphed, so use the time to dodge the hit zones.",
          "Aatrox's Infernal Chains are easier to exit when running towards the sides or at Aatrox.",
          "Keep your distance when Aatrox uses his Ultimate to prevent him from reviving."
        ],
        "tags": [
          "전사",
          "탱커"
        ],
        "spells": [
          {
            "id": "AatroxQ",
            "name": "The Darkin Blade",
            "description": "Aatrox slams his greatsword down, dealing physical damage. He can swing three times, each with a different area of effect.",
            "tooltip": "Aatrox slams his greatsword, dealing <physicalDamage>{{ qdamage }} physical damage</physicalDamage>. If they are hit on the edge, they are briefly <status>Knocked Up</status> and they take <physicalDamage>{{ qedgedamage }}</physicalDamage> instead. This Ability can be <recast>Recast</recast> twice, each one changing shape and dealing 25% more damage than the previous one.{{ spellmodifierdescriptionappend }}",
            "leveltip": {
              "label": [
                "Cooldown",
                "Damage",
                "Total AD Ratio"
              ],
              "effect": [
                "{{ cooldown }} -> {{ cooldownNL }}",
                "{{ qbasedamage }} -> {{ qbasedamageNL }}",
                "{{ qtotaladratio*100.000000 }}% -> {{ qtotaladrationl*100.000000 }}%"
              ]
            },
            "maxrank": 5,
            "cooldown": [
              14,
              12,
              10,
              8,
              6
            ],
            "cooldownBurn": "14/12/10/8/6",
            "cost": [
              0,
              0,
              0,
              0,
              0
            ],
            "costBurn": "0",
            "datavalues": {
              
            },
            "effect": [
              null,
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ]
            ],
            "effectBurn": [
              null,
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0"
            ],
            "vars": [
              
            ],
            "costType": "No Cost",
            "maxammo": "-1",
            "range": [
              25000,
              25000,
              25000,
              25000,
              25000
            ],
            "rangeBurn": "25000",
            "image": {
              "full": "https://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/AatroxQ.png",
              "sprite": "spell0.png",
              "group": "spell",
              "x": 288,
              "y": 48,
              "w": 48,
              "h": 48
            },
            "resource": "No Cost"
          },
          {
            "id": "AatroxW",
            "name": "Infernal Chains",
            "description": "Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters have to leave the impact area quickly or they will be dragged to the center and take the damage again.",
            "tooltip": "Aatrox fires a chain, <status>Slowing</status> the first enemy hit by {{ wslowpercentage*-100 }}% for {{ wslowduration }} seconds and dealing <physicalDamage>{{ wdamage }} physical damage</physicalDamage>. Champions and large jungle monsters have {{ wslowduration }} seconds to leave the impact area or be <status>Pulled</status> back to the center and damaged again for the same amount.{{ spellmodifierdescriptionappend }}",
            "leveltip": {
              "label": [
                "Cooldown",
                "Damage"
              ],
              "effect": [
                "{{ cooldown }} -> {{ cooldownNL }}",
                "{{ wbasedamage }} -> {{ wbasedamageNL }}"
              ]
            },
            "maxrank": 5,
            "cooldown": [
              20,
              18.5,
              17,
              15.5,
              14
            ],
            "cooldownBurn": "20/18.5/17/15.5/14",
            "cost": [
              0,
              0,
              0,
              0,
              0
            ],
            "costBurn": "0",
            "datavalues": {
              
            },
            "effect": [
              null,
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ]
            ],
            "effectBurn": [
              null,
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0"
            ],
            "vars": [
              
            ],
            "costType": "No Cost",
            "maxammo": "-1",
            "range": [
              825,
              825,
              825,
              825,
              825
            ],
            "rangeBurn": "825",
            "image": {
              "full": "https://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/AatroxW.png",
              "sprite": "spell0.png",
              "group": "spell",
              "x": 336,
              "y": 48,
              "w": 48,
              "h": 48
            },
            "resource": "No Cost"
          },
          {
            "id": "AatroxE",
            "name": "Umbral Dash",
            "description": "Passively, Aatrox heals when damaging enemy champions. On activation, he dashes in a direction.",
            "tooltip": "<spellPassive>Passive:</spellPassive> Aatrox gains <lifeSteal>{{ espellvamp }}% Omnivamp</lifeSteal> against champions, increased to <lifeSteal>{{ espellvampempowered }}% Omnivamp</lifeSteal> during <keywordMajor>World Ender</keywordMajor>.<br /><br /><spellActive>Active:</spellActive> Aatrox dashes. He can use this Ability while winding up his other Abilities.{{ spellmodifierdescriptionappend }}",
            "leveltip": {
              "label": [
                "Cooldown",
                "Healing %",
                "Healing % during World Ender"
              ],
              "effect": [
                "{{ cooldown }} -> {{ cooldownNL }}",
                "{{ espellvamp }}% -> {{ espellvampNL }}%",
                "{{ espellvampempowered }}% -> {{ espellvampempoweredNL }}%"
              ]
            },
            "maxrank": 5,
            "cooldown": [
              9,
              8,
              7,
              6,
              5
            ],
            "cooldownBurn": "9/8/7/6/5",
            "cost": [
              0,
              0,
              0,
              0,
              0
            ],
            "costBurn": "0",
            "datavalues": {
              
            },
            "effect": [
              null,
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ],
              [
                0,
                0,
                0,
                0,
                0
              ]
            ],
            "effectBurn": [
              null,
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0"
            ],
            "vars": [
              
            ],
            "costType": "No Cost",
            "maxammo": "1",
            "range": [
              25000,
              25000,
              25000,
              25000,
              25000
            ],
            "rangeBurn": "25000",
            "image": {
              "full": "https://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/AatroxE.png",
              "sprite": "spell0.png",
              "group": "spell",
              "x": 384,
              "y": 48,
              "w": 48,
              "h": 48
            },
            "resource": "No Cost"
          },
          {
            "id": "AatroxR",
            "name": "World Ender",
            "description": "Aatrox unleashes his demonic form, fearing nearby enemy minions and gaining attack damage, increased healing, and Move Speed. If he gets a takedown, this effect is extended.",
            "tooltip": "Aatrox reveals his true demonic form, <status>Fearing</status> nearby minions for {{ rminionfearduration }} seconds and gaining <speed>{{ rmovementspeedbonus*100 }}% Move Speed</speed> decaying over {{ rduration }} seconds. He also gains <scaleAD>{{ rtotaladamp*100 }}% Attack Damage</scaleAD> and increases <healing>self-healing by {{ rhealingamp*100 }}%</healing> for the duration.<br /><br />Champion takedowns extend the duration of this effect by {{ rextension }} seconds and refresh the <speed>Move Speed</speed> effect.{{ spellmodifierdescriptionappend }}",
            "leveltip": {
              "label": [
                "Total Attack Damage Increase",
                "Healing Increase",
                "Move Speed",
                "Cooldown"
              ],
              "effect": [
                "{{ rtotaladamp*100.000000 }}% -> {{ rtotaladampnl*100.000000 }}%",
                "{{ rhealingamp*100.000000 }}% -> {{ rhealingampnl*100.000000 }}%",
                "{{ rmovementspeedbonus*100.000000 }}% -> {{ rmovementspeedbonusnl*100.000000 }}%",
                "{{ cooldown }} -> {{ cooldownNL }}"
              ]
            },
            "maxrank": 3,
            "cooldown": [
              120,
              100,
              80
            ],
            "cooldownBurn": "120/100/80",
            "cost": [
              0,
              0,
              0
            ],
            "costBurn": "0",
            "datavalues": {
              
            },
            "effect": [
              null,
              [
                0,
                0,
                0
              ],
              [
                0,
                0,
                0
              ],
              [
                0,
                0,
                0
              ],
              [
                0,
                0,
                0
              ],
              [
                0,
                0,
                0
              ],
              [
                0,
                0,
                0
              ],
              [
                0,
                0,
                0
              ],
              [
                0,
                0,
                0
              ],
              [
                0,
                0,
                0
              ],
              [
                0,
                0,
                0
              ]
            ],
            "effectBurn": [
              null,
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0",
              "0"
            ],
            "vars": [
              
            ],
            "costType": "No Cost",
            "maxammo": "-1",
            "range": [
              25000,
              25000,
              25000
            ],
            "rangeBurn": "25000",
            "image": {
              "full": "https://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/AatroxR.png",
              "sprite": "spell0.png",
              "group": "spell",
              "x": 432,
              "y": 48,
              "w": 48,
              "h": 48
            },
            "resource": "No Cost"
          }
        ],
        "passive": {
          "name": "Deathbringer Stance",
          "description": "Periodically, Aatrox's next basic attack deals bonus <physicalDamage>physical damage</physicalDamage> and heals him, based on the target's max health. ",
          "image": {
            "full": "https://ddragon.leagueoflegends.com/cdn/12.21.1/img/passive/Aatrox_Passive.png",
            "sprite": "passive0.png",
            "group": "passive",
            "x": 0,
            "y": 0,
            "w": 48,
            "h": 48
          }
        },
        "recommended": [
          
        ]
      }
    }
  }

  