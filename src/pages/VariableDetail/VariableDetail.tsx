import React from 'react';
import { useParams } from 'react-router-dom';
import { useVinStore } from '../../store/useVinStore';


export default function VariableDetail() {
  const { variableId } = useParams();
  const { variablesList } = useVinStore();
  const variable = variablesList.find(v => String(v.ID) === String(variableId));

  if (!variable) return <div>Змінна не знайдена</div>;

  return (
    <div>
      <h2>{variable.Name}</h2>
      <p>{variable.Description}</p>
      <p>ID: {variable.ID}</p>
    </div>
  );
}
