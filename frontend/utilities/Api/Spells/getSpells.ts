import { ISpell } from '../../../types/models';

type IGetSpellsResponse = {
  spells: ISpell[];
};

const getSpells = (): Promise<IGetSpellsResponse> => {
  return fetch('/api/spells', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());
};

export { getSpells };
