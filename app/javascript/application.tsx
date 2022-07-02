import {
  CharacterAttackForm,
  CharacterFeatureForm,
  CharacterItemForm,
  CharacterResourceForm
} from './components/CharacterForm';
import {
  CreatureActionsForm,
  CreatureFeatureForm,
  CreatureLairActionForm,
  CreatureLegendaryActionForm,
  CreatureRegionalEffectsForm
} from './components/CreatureForm';
import {
  DiceRollerComponent
} from './components/DiceRoller';
import {
  ToggleItem
} from './components/ToggleItem';

import { factionPageBootstrapper } from './pages/FactionPage';
import { factionCreatePageBootstrapper } from './pages/FactionCreatePage';
import { factionEditPageBootstrapper } from './pages/FactionEditPage';
import { factionsPageBootstrapper } from './pages/FactionsPage';
import { homePageBootstrapper } from './pages/HomePage';
import { locationCreatePageBootstrapper } from './pages/LocationCreatePage';
import { locationEditPageBootstrapper } from './pages/LocationEditPage';
import { locationPageBootstrapper } from './pages/LocationPage';
import { locationsPageBootstrapper } from './pages/LocationsPage';
import { magicItemCreatePageBootstrapper } from './pages/MagicItemCreatePage';
import { magicItemEditPageBootstrapper } from './pages/MagicItemEditPage';
import { magicItemPageBootstrapper } from './pages/MagicItemPage';
import { magicItemsPageBootstrapper } from './pages/MagicItemsPage';
import { spellPageBootstrapper } from './pages/SpellPage';
import { spellCreatePageBootstrapper } from './pages/SpellCreatePage';
import { spellEditPageBootstrapper } from './pages/SpellEditPage';
import { spellsPageBootstrapper } from './pages/SpellsPage';

import '../assets/stylesheets/application.scss';

const characterAttackForm = new CharacterAttackForm();
const characterFeatureForm = new CharacterFeatureForm();
const characterItemForm = new CharacterItemForm();
const characterResourceForm = new CharacterResourceForm();
const creatureActionsForm = new CreatureActionsForm();
const creatureFeatureForm = new CreatureFeatureForm();
const creatureLairActionForm = new CreatureLairActionForm();
const creatureLegendaryActionForm = new CreatureLegendaryActionForm();
const creatureRegionalEffectsForm = new CreatureRegionalEffectsForm();
const diceRollerComponent = new DiceRollerComponent();
const toggleItem = new ToggleItem();

window.onload = ():void => {
  characterAttackForm.run();
  characterFeatureForm.run();
  characterItemForm.run();
  characterResourceForm.run();
  creatureActionsForm.run();
  creatureFeatureForm.run();
  creatureLairActionForm.run();
  creatureLegendaryActionForm.run();
  creatureRegionalEffectsForm.run();
  diceRollerComponent.run();
  toggleItem.run();

  factionPageBootstrapper();
  factionCreatePageBootstrapper();
  factionEditPageBootstrapper();
  factionsPageBootstrapper();

  homePageBootstrapper();

  locationCreatePageBootstrapper();
  locationEditPageBootstrapper();
  locationPageBootstrapper();
  locationsPageBootstrapper();
  
  magicItemCreatePageBootstrapper();
  magicItemEditPageBootstrapper();
  magicItemPageBootstrapper();
  magicItemsPageBootstrapper();

  spellPageBootstrapper();
  spellCreatePageBootstrapper();
  spellEditPageBootstrapper();
  spellsPageBootstrapper();
};
