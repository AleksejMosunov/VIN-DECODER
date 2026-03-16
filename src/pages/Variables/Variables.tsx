import { useEffect } from 'react';
import { useVinStore } from '../../store/useVinStore';
import { Link } from 'react-router-dom';
import { VinApi } from '../../api/vinApi';
import './styles.css';

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, '');
}

export default function Variables() {
  const { variablesList, setVariablesList } = useVinStore();
  return (
    <div className="variables-container">
      <h2>Всі змінні</h2>
      <ul className="variables-list">
        {variablesList.map(v => (
          <li key={v.ID} className="variable-item">
            <Link to={`/variables/${v.ID}`} className="variable-link">{v.Name}</Link>: <span className="variable-desc">{stripHtml(v.Description)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
