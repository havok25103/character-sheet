import React, { ReactElement } from 'react';
import { ISpell } from '../../types/models';

interface ISpellCardProps {
  spell: ISpell;
}

const SpellCard = ({
  spell: {
    castingTime,
    components,
    concentration,
    description,
    descriptionHigherLevels,
    duration,
    level,
    materialComponents,
    range,
    ritual,
    school,
    somaticComponents,
    target,
    verbalComponents
  } = ({} as ISpell)
}: ISpellCardProps): ReactElement => {
  const getComponentString = () => {
    const ritualString = ritual ? 'R' : '';
    const materialsString = materialComponents ? 'M' : '';
    const somaticString = somaticComponents ? 'S' : '';
    const verbalString = verbalComponents ? 'V' : '';
    const concentrationString = concentration ? 'C' : '';

    return `(${ritualString}${materialsString}${somaticString}${verbalString}${concentrationString}) ${components}`;
  };

  return (
    <div className="card">
      <p><strong>Level: </strong>{level}</p>
      <p><strong>School: </strong>{school}</p>
      <p><strong>Components: </strong>{getComponentString()}</p>
      <p><strong>Cating Time: </strong>{castingTime}</p>
      <p><strong>Duration: </strong>{duration}</p>
      <p><strong>Range: </strong>{range}</p>
      <p><strong>Target: </strong>{target}</p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
      <p>
        <strong>Description at Higher Levels: </strong>
        {descriptionHigherLevels}
      </p>
    </div>
  );
};

export { SpellCard };