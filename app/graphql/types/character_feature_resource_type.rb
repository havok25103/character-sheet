# frozen_string_literal: true

module Types
  class CharacterFeatureResourceType < Types::BaseObject
    field :id, ID, null: false
    field :character_id, Integer, null: false

    field :name, String, "The name of the resource."
    field :total, Integer, "How many of this resource a character has."

    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    field :character, Types::CharacterType, null: false
  end
end