import Sprites from '../../constants/sprite';

module.exports = {
  title: 'Consultoría',
  shortTitle: 'Consultoría',
  type: 'title',
  sprite: Sprites.Services.Consultoria,
  logo: Sprites.Services.IconConsultoria,
  intro: ['Programa de Servicio de Auditorias<br /> (México y USA)'],
  elements: [
    {
      title: 'Consultoría y <br /> Servicio de <br />Auditorías <br /> (México y USA)',
      sprite: Sprites.Services.ConsultoriaMxusa,
      url: '',
      wrapper: {
        style: {
          main: {
            marginBottom: '150px'
          }
        }
      },
      elements: [
        {
          title: 'Apoyo para pre-auditorias',
          url: ''
        },
        {
          title: 'Apoyo durante la Auditoria',
          url: ''
        },
        {
          title: 'Apoyo posterior a la Auditoria',
          url: ''
        }
      ]
    }
  ]
};
