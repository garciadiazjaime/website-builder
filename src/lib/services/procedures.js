import Sprites from '../../constants/sprite';

module.exports = {
  title: 'Trámites',
  type: 'title',
  sprite: Sprites.Services.Tramites,
  elements: [
    {
      title: 'Trámites en USA',
      sprite: Sprites.Services.TramitesUsa,
      url: '',
      wrapper: {
        style: {}
      },
      elements: [
        {
          title: 'PNP- Pull Notice Programa',
          url: ''
        },
        {
          title: 'BIT- Biennial Inspection of Terminals',
          url: ''
        },
        {
          title: 'SCAC- Standard Carrier Alpha Code',
          url: ''
        },
        {
          title: 'Forma 2290UCR -Unified Carrier Registration',
          url: ''
        },
        {
          title: 'Decal (User Fee) -US Customs',
          url: ''
        },
        {
          title: 'FASTID Badge US CBP- (Gafete USA)',
          url: ''
        },
        {
          title: 'Pago de TicketsARB- Air Resources Board',
          url: ''
        },
        {
          title: 'Permisos temporales para otros Estados',
          url: ''
        },
        {
          title: 'Hazardous Material (Hazmat)',
          url: ''
        },
        {
          title: 'Cumplimiento para DOT',
          url: ''
        }
      ]
    }, // Trámites en USA
    {
      title: 'Trámites en México',
      sprite: Sprites.Services.TramitesMx,
      url: '',
      wrapper: {
        style: {
          main: {
            marginTop: '150px'
          },
          right: {
            marginTop: '35px'
          }
        }
      },
      elements: [
        {
          title: 'CAAT- Código Alfanumerico Armonizado para <br />Transportista',
          url: ''
        },
        {
          title: 'Gafete para Transportista Aduana',
          url: ''
        }
      ]
    }
  ]
}
