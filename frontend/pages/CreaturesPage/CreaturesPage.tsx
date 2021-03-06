import React, { ReactElement, useEffect, useState } from 'react';
import { CreaturesTable } from '../../components/CreaturesTable/CreaturesTable';
import { getCreatures } from '../../utilities/Api/Creatures';
import { ICreature } from '../../types/models';

const CreaturesPage = (): ReactElement => {
  const [creatures, setCreatures] = useState<ICreature[]>([]);

  useEffect(() => {
    getCreatures().then(data => setCreatures(data.creatures));
  }, []);

  return (
    <div className="layout">
      <div className="full">
        <h1>Creatures</h1>
        <a href="/creatures/new">
          Create
        </a>
        <CreaturesTable creatures={creatures}/>
      </div>
    </div>
  );
};

export { CreaturesPage };
