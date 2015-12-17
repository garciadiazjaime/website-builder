import Sprites from '../../constants/sprite';

module.exports = {
  title: 'Seguros para Vehículos Comerciales',
  type: 'title',
  sprite: Sprites.Services.Seguros,
  elements: [
    {
      title: 'Seguros con <br />cobertura en <br />USA',
      sprite: Sprites.Services.SegurosUsa,
      url: '',
      wrapper: {
        style: {}
      },
      elements: [
        {
          title: 'Liability Truck',
          url: ''
        },
        {
          title: 'Cargo Insurance',
          url: ''
        },
        {
          title: 'Trailer Interchange',
          url: ''
        },
        {
          title: 'Physical Damage',
          url: ''
        },
        {
          title: 'General Liability',
          url: ''
        }
      ]
    },
    {
      title: 'Seguros con <br /> cobertura en <br />México',
      sprite: Sprites.Services.SegurosMx,
      url: '',
      wrapper: {
        style: {
          main: {
            marginTop: '150px'
          }
        }
      },
      elements: [
        {
          title: 'Responsabilidad Civil a Terceros',
          url: ''
        },
        {
          title: 'Daños Fisicos (Cobertura Amplia)',
          url: ''
        },
        {
          title: 'Seguro de Mercancias',
          url: ''
        },
        {
          title: 'Accidentes Personales',
          url: ''
        }
      ]
    }
  ]
};
