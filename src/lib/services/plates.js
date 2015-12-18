import Sprites from '../../constants/sprite';

module.exports = {
  type: 'subtitle',
  title: 'Placas',
  wrapper: {
    style: {
      marginTop: '150px'
    }
  },
  elements: [
    {
      title: 'DMV',
      subtitle: '(Commercial Registrations)',
      sprite: Sprites.Services.PlacasUsa,
      url: '',
      wrapper: {
        style: {
          main: {
            marginTop: '50px'
          }
        }
      },
      elements: [
        {
          title: 'California',
          url: ''
        },
        {
          title: 'Interstate Registration (IRP) (Apportioned)',
          url: ''
        },
        {
          title: 'Titles',
          url: ''
        }
      ]
    }, // Trámites en USA
    {
      title: 'SCT',
      subtitle: '(Transfers, Estatales, Federales)',
      sprite: Sprites.Services.PlacasMx,
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
          title: 'Registro Nuevo',
          url: ''
        },
        {
          title: '(Transfers,Estatales y Federales)',
          url: ''
        },
        {
          title: 'Registro Nuevo Transfronterizo',
          url: ''
        },
        {
          title: 'Renovaciones',
          url: ''
        },
        {
          title: '(Transfers,Estatales y Federales)',
          url: ''
        },
        {
          title: 'Altas de Unidad',
          url: ''
        },
        {
          title: 'Bajas de Unidad',
          url: ''
        }
      ]
    }
  ]
}
