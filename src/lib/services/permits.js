import Sprites from '../../constants/sprite';

module.exports = {
  title: 'Permisos',
  shortTitle: 'Permisos',
  type: 'title',
  sprite: Sprites.Services.Permisos,
  logo: Sprites.Services.IconPermisos,
  intro: ['Permisos para Vehículos <br /> Comerciales en USA y <br /><b>Nuevos Entrantes</b>'],
  elements: [
    {
      title: 'Permisos <br />en USA',
      sprite: Sprites.Services.PermisosUsa,
      url: '',
      wrapper: {
        style: {}
      },
      elements: [
        {
          title: 'Licencia sobre Impuesto Diesel',
          url: ''
        },
        {
          title: 'Diesel-Interstate User Diesel Fuel Tax Return',
          url: ''
        },
        {
          title: 'IFTA-International Fuel Tax Agreement',
          url: ''
        },
        {
          title: 'CA Number',
          url: ''
        }
      ]
    }, // Trámites en USA
    {
      title: 'Nuevo <br />entrante',
      sprite: Sprites.Services.PermisosEntrante,
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
          title: 'MC Enterprise',
          url: ''
        },
        {
          title: 'MC',
          url: ''
        },
        {
          title: 'MX Op2',
          url: ''
        },
        {
          title: 'MX Op1',
          url: ''
        },
        {
          title: 'DOT Number',
          url: ''
        }
      ]
    }
  ]
};
