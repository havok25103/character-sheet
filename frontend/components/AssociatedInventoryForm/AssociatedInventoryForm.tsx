import React, { ReactElement, useState } from 'react';
import { ICharacter, ICharacterItem } from '../../types/models';

interface IAssociatedInventoryFormProps {
  buttonLabel: string,
  character: ICharacter;
  handleSubmit: (characterItems: ICharacterItem[]) => void;
}

const AssociatedInventoryForm = ({
  buttonLabel,
  character,
  handleSubmit
}: IAssociatedInventoryFormProps): ReactElement => {
  const [newItems, setNewItems] = useState<ICharacterItem[]>([]);
  const [updatedItems, setUpdatedItems] = useState<ICharacterItem[]>(
    (character.characterItems || []).map(item => ({ ...item }))
  );

  const handleFormChange = (index: number, key: string, value: any) => {
    const updatedForm = updatedItems.map(item => ({ ...item }));
    updatedForm[index][key] = value;
    setUpdatedItems(updatedForm);
  };

  const handleNewFieldsChange = (index: number, key: string, value: any) => {
    const updatedForm = newItems.map(item => ({ ...item }));
    updatedForm[index][key] = value;
    setNewItems(updatedForm);
  };

  const getItem = (
    item: ICharacterItem,
    index: number,
    isNewField: boolean
  ): ReactElement => {
    const { _destroy, name, total } = item;

    const func = isNewField ? handleNewFieldsChange : handleFormChange;

    return (
      <fieldset>
        <label>Name</label>
        <textarea
          onChange={e => func(index, 'name', e.target.value)}
          value={name}>  
        </textarea>
        <label>Total</label>
        <input
          onChange={e => func(index, 'total', e.target.value)}
          type="number"
          value={total}/>
        {
          isNewField ? (
            <button onClick={e => {
              e.preventDefault();
              setNewItems(newItems.filter((_item, i) => i !== index ))
            }}>
              Remove
            </button>
          ) : (
            <label>
              Mark for deletion
              <input
                checked={_destroy}
                name="_destroy"
                onChange={e => func(index, '_destroy', e.target.checked)}
                type="checkbox"/>
            </label>
          )
        }
      </fieldset>
    );
  };

  return (
    <>
      <form onSubmit={e => {
        e.preventDefault();
        handleSubmit([...updatedItems, ...newItems])
      }}>
        <button type="submit">
          {buttonLabel}
        </button>
        <h2>Inventory</h2>
        {updatedItems.map((item, index) => getItem(item, index, false))}
        <hr/>
        <button onClick={e => {
          e.preventDefault()
          setNewItems([...newItems, { name: '', total: 0 }])
        }}>
          Add
        </button>
        {newItems.map((item, index) => getItem(item, index, true))}
      </form>
    </>
  );
};

export { AssociatedInventoryForm };
