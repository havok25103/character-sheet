class Creature < ApplicationRecord
  has_many :creature_actions, dependent: :destroy
  has_many :creature_features, dependent: :destroy
  has_many :creature_lair_actions, dependent: :destroy
  has_many :creature_legendary_actions, dependent: :destroy
  has_many :creature_regional_effects, dependent: :destroy
  has_many :creature_spells, dependent: :destroy
  accepts_nested_attributes_for :creature_actions, :creature_features, :creature_lair_actions, :creature_legendary_actions, :creature_regional_effects, :creature_spells, allow_destroy: true
end