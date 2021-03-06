import React, { ReactElement, useState } from 'react';
import { ICreature, ICreatureLairAction } from '../../types/models';

interface IAssociatedLairActionsFormProps {
  buttonLabel: string,
  creature: ICreature;
  handleSubmit: (lairActionsText: string, creatureLairActions: ICreatureLairAction[]) => void;
}

const AssociatedLairActionsForm = ({
  buttonLabel,
  creature,
  handleSubmit
}: IAssociatedLairActionsFormProps): ReactElement => {
  const [newLairActions, setNewLairActions] = useState<ICreatureLairAction[]>([]);
  const [lairActionsText, setLairActionsText] = useState(creature.lairActionsText || '');
  const [updatedLairActions, setUpdatedLairActions] = useState<ICreatureLairAction[]>(
    (creature.creatureLairActions || []).map(action => ({ ...action }))
  );

  const handleFormChange = (index: number, key: string, value: any) => {
    const updatedForm = updatedLairActions.map(action => ({ ...action }));
    updatedForm[index][key] = value;
    setUpdatedLairActions(updatedForm);
  };

  const handleNewFieldsChange = (index: number, key: string, value: any) => {
    const updatedForm = newLairActions.map(actions => ({ ...actions }));
    updatedForm[index][key] = value;
    setNewLairActions(updatedForm);
  };

  const getLairAction = (action: ICreatureLairAction, index: number): ReactElement => {
    const { _destroy, description } = action;

    return (
      <fieldset>
        <label>Description</label>
        <textarea
          onChange={e => handleFormChange(index, 'description', e.target.value)}
          value={description}>  
        </textarea>
        <label>
          Mark for deletion
          <input
            checked={_destroy}
            name="_destroy"
            onChange={e => handleFormChange(index, '_destroy', e.target.checked)}
            type="checkbox"/>
        </label>
      </fieldset>
    );
  };

  const getNewLairAction = (action: ICreatureLairAction, index: number): ReactElement => {
    const { description } = action;

    return (
      <fieldset>
        <label>Description</label>
        <textarea
          onChange={e => handleNewFieldsChange(index, 'description', e.target.value)}
          value={description}>  
        </textarea>
        <button onClick={e => {
          e.preventDefault();
          setNewLairActions(newLairActions.filter((_action, i) => i !== index ))
        }}>
          Remove
        </button>
      </fieldset>
    );
  };

  return (
    <>
      <form onSubmit={e => {
        e.preventDefault();
        handleSubmit(lairActionsText, [...updatedLairActions, ...newLairActions])
      }}>
        <button type="submit">
          {buttonLabel}
        </button>
        <h2>Lair Actions Text</h2>
        <fieldset>
          <label>Lair Actions Text</label>
          <textarea
            onChange={e => setLairActionsText(e.target.value)}
            value={lairActionsText}>
          </textarea>
        </fieldset>
        <h2>Lair Actions</h2>
        {updatedLairActions.map(getLairAction)}
        <hr/>
        <button onClick={e => {
          e.preventDefault()
          setNewLairActions([...newLairActions, { description: '' }])
        }}>
          Add
        </button>
        {newLairActions.map(getNewLairAction)}
      </form>
    </>
  );
};

export { AssociatedLairActionsForm };
