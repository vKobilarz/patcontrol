import React from 'react';
import Subtitle from '../../../../components/Subtitle';
import Card, { CardHeader, CardRow } from '../../../../components/Card';
import formatDateToString from '../../../../utils/formatDateToString';

const PatrimonyGroup = ({ title, patrimonies = [] }) => {
  return (
    <>
      <Subtitle>{title}</Subtitle>
      {patrimonies.map((patrimony) => (
        <Card key={patrimony.id}>
          <CardHeader>{patrimony.description || 'Sem descrição'}</CardHeader>
          <CardRow title="Número:">{patrimony.number}</CardRow>
          <CardRow title="Último Scan:">
            {formatDateToString(patrimony?.last_scanned_date)}
          </CardRow>
        </Card>
      ))}
    </>
  );
};

export default PatrimonyGroup;
