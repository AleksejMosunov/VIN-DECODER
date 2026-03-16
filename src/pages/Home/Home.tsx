import { Form } from 'react-router-dom';
import { useVinStore } from '../../store/useVinStore';
import { VinApi } from '../../api/vinApi';
import './styles.css';
import { useState } from 'react';

export default function Home() {
  const { lastVinResults, addVinResult, vinResults, apiError, setApiError } = useVinStore();
  const [formError, setFormError] = useState('');
  const [apiMessage, setApiMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError('');
    setApiMessage('');
    setApiError('');
    const formData = new FormData(e.currentTarget);
    const vin = formData.get('vin') as string;
    if (!vin) {
      setFormError('Введіть VIN-код');
      return;
    }
    if (vin.length > 17) {
      setFormError('VIN-код має бути не довше 17 символів');
      return;
    }
    VinApi.decodeVin(vin)
      .then(res => {
        addVinResult(res);
        setApiMessage(res.Message || '');
      })
      .catch(err => {
        setApiError('Помилка при декодуванні VIN');
        setApiMessage('');
      });
  };

  return (
    <div className="home-container">
      <form onSubmit={handleSubmit} className="vin-form">
        <input type="text" name="vin" placeholder="Введіть VIN" maxLength={17} className="vin-input" />
        <button type="submit" className="vin-btn">Декодувати</button>
      </form>
      {formError && <div className="vin-error">{formError}</div>}
      {apiError && <div className="vin-error">{apiError}</div>}
      {apiMessage && <div className="vin-message">{apiMessage}</div>}

      <div className="vin-history">
        <h2>Останні 3 VIN</h2>
        <ul>
          {lastVinResults.length === 0 && <li>Поки що немає історії</li>}
          {lastVinResults.map((item, idx) => (
            <li key={idx}
              onClick={() => addVinResult(item)}
              style={{ cursor: 'pointer' }}
            >{item.SearchCriteria?.replace('VIN:', '') || 'VIN'}</li>
          ))}
        </ul>
      </div>

      <div className="vin-results">
        <h2>Результати розшифровки</h2>
        {vinResults && vinResults.length > 0 ? (
          <ul>
            {vinResults.filter(r => r.Value).map((r, idx) => (
              <li key={idx} className="vin-result-row">
                <span className="vin-variable">{r.Variable}</span>
                <span className="vin-value">{r.Value}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Поки що немає результатів</p>
        )}
      </div>
    </div>
  );
}
