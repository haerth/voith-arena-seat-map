import { FC } from 'react';

import './style.css';

const areas = [
  {
    name: 'Saalpläne Sparkassen BusinessClub 1',
    plans: [
      {
        name: 'Abgetrennte Variante für 112 Personen mit Tanzfläche',
        src: 'https://www.voith-arena.de/fileadmin/user_upload/Downloads/SBC1_Abgetrennte_Variante_fuer_112_Personen_mit_Tanzflaeche.jpg',
      },
      {
        name: 'Parlamentarische Bestuhlung für 60 Personen',
        src: 'https://www.voith-arena.de/fileadmin/user_upload/Downloads/SBC1_Parlamentarische_Bestuhlung_fuer_60_Personen.jpg',
      },
      {
        name: 'Spieltagsbestuhlung für 300 Personen',
        src: 'https://www.voith-arena.de/fileadmin/user_upload/Downloads/SBC1_Spieltagsbestuhlung_fuer_300_Personen.jpg',
      },
    ],
  },
  {
    name: 'Saalpläne Sparkassen BusinessClub 2',
    plans: [
      {
        name: 'Gala-Tische für 184 Personen',
        src: 'https://www.voith-arena.de/fileadmin/user_upload/Downloads/SBC2_Gala-Tische_fuer_184_Personen.jpg',
      },
      {
        name: 'Kinobestuhlung Bühne für 420 Personen',
        src: 'https://www.voith-arena.de/fileadmin/user_upload/Downloads/SBC2_Kinobestuhlung_Buehne_fuer_420_Personen.jpg',
      },
      {
        name: 'Parlamentarische Bestuhlung für 174 Personen',
        src: 'https://www.voith-arena.de/fileadmin/user_upload/Downloads/SBC2_Parlamentarische_Bestuhlung_fuer_174_Personen.jpg',
      },
      {
        name: 'Spieltagsbestuhlung für 368 Personen',
        src: 'https://www.voith-arena.de/fileadmin/user_upload/Downloads/SBC2_Spieltagsbestuhlung_fuer_368_Personen.jpg',
      },
    ],
  },

  {
    name: 'Saalpläne Sparkassen BusinessClub 3',
    plans: [{ name: 'Spieltagsbestuhlung für 556 Personen', src: '' }],
  },
  {
    name: 'Saalpläne Logen',
    plans: [
      {
        name: 'Gala für 28 Personen',
        src: 'https://www.voith-arena.de/fileadmin/user_upload/Downloads/LOGEN_Gala_fuer_28_Personen.jpg',
      },
      {
        name: 'Tafel für 18 Personen',
        src: 'http://voi15.code-inc.net/fileadmin/user_upload/Downloads/LOGEN_Tafel_fuer_18_Personen.jpg',
      },
      {
        name: 'U-Form für 19 Personen',
        src: 'https://www.voith-arena.de/fileadmin/user_upload/Downloads/LOGEN_U-Form_fuer_19_Personen.jpg',
      },
    ],
  },
  {
    name: 'Saalpläne Ecklounges',
    plans: [
      {
        name: 'Blockbestuhlung für 12 Personen',
        src: 'https://www.voith-arena.de/fileadmin/user_upload/Downloads/ECKLOUNGES_Blockbestuhlung_fuer_12_Personen.jpg',
      },
      {
        name: 'Ecklounge leer mit Grundausstattung',
        src: 'https://www.voith-arena.de/fileadmin/user_upload/Downloads/ECKLOUNGES_Grundausstattung_und_5_Stehtische.jpg',
      },
      {
        name: 'Grundausstattung und 5 Stehtische',
        src: 'https://www.voith-arena.de/fileadmin/user_upload/Downloads/ECKLOUNGES_Grundausstattung_und_5_Stehtische.jpg',
      },
      {
        name: 'Kinobestuhlung für 15 Personen',
        src: 'https://www.voith-arena.de/fileadmin/user_upload/Downloads/ECKLOUNGES_Kinobestuhlung_fuer_15_Personen.jpg',
      },
    ],
  },
  {
    name: 'Saalpläne Presseraum',
    plans: [
      {
        name: 'Kinobestuhlung für 28 Personen',
        src: 'https://www.voith-arena.de/fileadmin/user_upload/Downloads/PRESSERAUM_Kinobestuhlung_fuer_28_Personen.jpg',
      },
      {
        name: 'Parlamentarisch für 24 Personen',
        src: 'https://www.voith-arena.de/fileadmin/user_upload/Downloads/PRESSERAUM_Parlamentarisch_fuer_24_Personen.jpg',
      },
    ],
  },
];

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};
