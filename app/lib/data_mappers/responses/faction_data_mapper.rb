# frozen_string_literal: true

module DataMappers
  module Responses
    class FactionDataMapper < DataMappers::Responses::BaseDataMapper
      def run(faction)
        image_url = get_image_url faction, :image

        {
          alignment: faction.alignment,
          allies: faction.allies,
          characters: characters_response(faction),
          creatures: creatures_response(faction),
          description: faction.description,
          goals: faction.goals,
          id: faction.id,
          ideals: faction.ideals,
          imageUrl: image_url,
          name: faction.name,
          rivals: faction.rivals
        }
      end

      private

      def characters_response(faction)
        characters = faction.characters || []

        characters.map do |character|
          image_url = get_image_url character, :image

          {
            ac: character.ac,
            acrobaticsMod: character.acrobatics_mod,
            acrobaticsProf: character.acrobatics_prof,
            age: character.age,
            alignment: character.alignment,
            animalHandlingMod: character.animal_handling_mod,
            animalHandlingProf: character.animal_handling_prof,
            arcanaMod: character.arcana_mod,
            arcanaProf: character.arcana_prof,
            athleticsMod: character.athletics_mod,
            athleticsProf: character.athletics_prof,
            armorProficiencies: character.armor_proficiencies,
            background: character.background,
            backstory: character.backstory,
            bonds: character.bonds,
            characterClass: character.character_class,
            characterClassHitDice: character.character_class_hit_dice,
            characterClassLevel: character.character_class_level,
            characterSubClass: character.character_sub_class,
            charismaMod: character.charisma_mod,
            charismaProf: character.charisma_prof,
            charismaSave: character.charisma_save,
            charismaScore: character.charisma_score,
            conditionImmunities: character.condition_immunities,
            conditionResistances: character.condition_resistances,
            conditionVulnerabilities: character.condition_vulnerabilities,
            constitutionMod: character.constitution_mod,
            constitutionProf: character.constitution_prof,
            constitutionSave: character.constitution_save,
            constitutionScore: character.constitution_score,
            copperPieces: character.copper_pieces,
            damageImmunities: character.damage_immunities,
            damageResistances: character.damage_resistances,
            damageVulnerabilities: character.damage_vulnerabilities,
            deceptionMod: character.deception_mod,
            deceptionProf: character.deception_prof,
            dexterityMod: character.dexterity_mod,
            dexterityProf: character.dexterity_prof,
            dexteritySave: character.dexterity_save,
            dexterityScore: character.dexterity_score,
            electrumPieces: character.electrum_pieces,
            eyes: character.eyes,
            flaws: character.flaws,
            goldPieces: character.gold_pieces,
            hair: character.hair,
            height: character.height,
            historyMod: character.history_mod,
            historyProf: character.history_prof,
            hp: character.hp,
            id: character.id,
            ideals: character.ideals,
            imageUrl: image_url,
            initiative: character.initiative,
            insightMod: character.insight_mod,
            insightProf: character.insight_prof,
            intelligenceMod: character.intelligence_mod,
            intelligenceProf: character.intelligence_prof,
            intelligenceSave: character.intelligence_save,
            intelligenceScore: character.intelligence_score,
            intimidationMod: character.intimidation_mod,
            intimidationProf: character.intimidation_prof,
            investigationMod: character.investigation_mod,
            investigationProf: character.investigation_prof,
            languages: character.languages,
            medicineMod: character.medicine_mod,
            medicineProf: character.medicine_prof,
            multiclassClass: character.multiclass_class,
            multiclassClassHitDice: character.multiclass_class_hit_dice,
            multiclassClassLevel: character.multiclass_class_level,
            multiclassSubClass: character.multiclass_sub_class,
            passivePerception: character.passive_perception,
            proficiencyBonus: character.proficiency_bonus,
            name: character.name,
            natureMod: character.nature_mod,
            natureProf: character.nature_prof,
            perceptionMod: character.perception_mod,
            perceptionProf: character.perception_prof,
            performanceMod: character.performance_mod,
            performanceProf: character.performance_prof,
            personalityTraits: character.personality_traits,
            persuasionMod: character.persuasion_mod,
            persuasionProf: character.persuasion_prof,
            platinumPieces: character.platinum_pieces,
            race: character.race,
            religionMod: character.religion_mod,
            religionProf: character.religion_prof,
            senses: character.senses,
            silverPieces: character.silver_pieces,
            skin: character.skin,
            sleightOfHandMod: character.sleight_of_hand_mod,
            sleightOfHandProf: character.sleight_of_hand_prof,
            speed: character.speed,
            spellSlotsFirst: character.spell_slots_first,
            spellSlotsSecond: character.spell_slots_second,
            spellSlotsThird: character.spell_slots_third,
            spellSlotsFourth: character.spell_slots_fourth,
            spellSlotsFifth: character.spell_slots_fifth,
            spellSlotsSixth: character.spell_slots_sixth,
            spellSlotsSeventh: character.spell_slots_seventh,
            spellSlotsEighth: character.spell_slots_eighth,
            spellSlotsNinth: character.spell_slots_ninth,
            spellcastingAbility: character.spellcasting_ability,
            spellcastingModifier: character.spellcasting_modifier,
            spellcastingSaveDc: character.spellcasting_save_dc,
            stealthMod: character.stealth_mod,
            stealthProf: character.stealth_prof,
            strengthMod: character.strength_mod,
            strengthProf: character.strength_prof,
            strengthSave: character.strength_save,
            strengthScore: character.strength_score,
            subRace: character.sub_race,
            survivalMod: character.survival_mod,
            survivalProf: character.survival_prof,
            toolProficiencies: character.tool_proficiencies,
            weaponProficiencies: character.weapon_proficiencies,
            weight: character.weight,
            wisdomMod: character.wisdom_mod,
            wisdomProf: character.wisdom_prof,
            wisdomSave: character.wisdom_save,
            wisdomScore: character.wisdom_score
          }
        end
      end

      def creatures_response(faction)
        creatures = faction.creatures || []

        creatures.map do |creature|
          image_url = get_image_url creature, :image

          {
            ac: creature.ac,
            alignment: creature.alignment,
            armor: creature.armor,
            backstory: creature.backstory,
            bonds: creature.bonds,
            charismaMod: creature.charisma_mod,
            charismaSave: creature.charisma_save,
            charismaScore: creature.charisma_score,
            conditionImmunities: creature.condition_immunities,
            conditionResistances: creature.condition_resistances,
            conditionVulnerabilities: creature.condition_vulnerabilities,
            constitutionMod: creature.constitution_mod,
            constitutionSave: creature.constitution_save,
            constitutionScore: creature.constitution_score,
            cr: creature.cr,
            creatureCategory: creature.creature_category,
            creatureType: creature.creature_type,
            damageImmunities: creature.damage_immunities,
            damageResistances: creature.damage_resistances,
            damageVulnerabilities: creature.damage_vulnerabilities,
            description: creature.description,
            dexterityMod: creature.dexterity_mod,
            dexteritySave: creature.dexterity_save,
            dexterityScore: creature.dexterity_score,
            flaws: creature.flaws,
            hp: creature.hp,
            id: creature.id,
            ideals: creature.ideals,
            imageUrl: image_url,
            intelligenceMod: creature.intelligence_mod,
            intelligenceSave: creature.intelligence_save,
            intelligenceScore: creature.intelligence_score,
            languages: creature.languages,
            lairActionsText: creature.lair_actions_text,
            legendaryActionsText: creature.legendary_actions_text,
            name: creature.name,
            personalityTraits: creature.personality_traits,
            regionalEffectsText: creature.regional_effects_text,
            senses: creature.senses,
            size: creature.size,
            skills: creature.skills,
            speed: creature.speed,
            spellSlotsFirst: creature.spell_slots_first,
            spellSlotsSecond: creature.spell_slots_second,
            spellSlotsThird: creature.spell_slots_third,
            spellSlotsFourth: creature.spell_slots_fourth,
            spellSlotsFifth: creature.spell_slots_fifth,
            spellSlotsSixth: creature.spell_slots_sixth,
            spellSlotsSeventh: creature.spell_slots_seventh,
            spellSlotsEighth: creature.spell_slots_eighth,
            spellSlotsNinth: creature.spell_slots_ninth,
            spellcastingAbility: creature.spellcasting_ability,
            spellcastingLevel: creature.spellcasting_level,
            spellcastingModifier: creature.spellcasting_modifier,
            spellcastingSaveDc: creature.spellcasting_save_dc,
            strengthMod: creature.strength_mod,
            strengthSave: creature.strength_save,
            strengthScore: creature.strength_score,
            wisdomMod: creature.wisdom_mod,
            wisdomSave: creature.wisdom_save,
            wisdomScore: creature.wisdom_score
          }
        end
      end
    end
  end
end