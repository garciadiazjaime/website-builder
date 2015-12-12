import Colors from './colors';



export class FontA {

  static style = {
    fontFamily: 'noto-sans-regular'
  };

  static getVariation(variation) {
    switch (variation) {
      case 'headerA':
        return _.merge({}, this.style, {
          color: Colors.grayDark,
          fontSize: '16px'
        });
      case 'IntroA':
        return _.merge({}, this.style, {
          color: Colors.blueDark,
          fontSize: '14px'
        });
      default:
        return null;
    }
  }
};

export class FontABold {

  static style = {
    fontFamily: 'noto-sans-bold'
  }

  static getVariation(variation) {
    switch (variation) {
      case 'headerA':
        return _.merge({}, this.style, {
          color: Colors.grayDark,
          fontSize: '16px',
        });
      case 'menuA':
        return _.merge({}, this.style, {
          color: Colors.grayDark,
          fontSize: '12px',
          textTransform: 'uppercase'
        });

      default:
        return null;
    }
  }
}


export default {
  typeA: {
    color: Colors.grayDark,
    fontFamily: 'noto-sans-regular',
    fontSize: '16px'
  },
  typeB: {
    color: Colors.grayDark,
    fontFamily: 'noto-sans-bold',
    fontSize: '12px',
    textTransform: 'uppercase'
  },
  typeC: {
    color: 'white',
    fontSize: '25px',
    fontFamily: 'noto-sans-bold'
  },
  typeD: {
    color: 'white',
    fontSize: '30px',
    fontFamily: 'noto-sans-bold'
  },
  typeE: {
    color: Colors.yellow,
    fontSize: '25px',
    fontWeight: 'bold'
  },
  typeF: {
    color: Colors.white,
    fontFamily: 'noto-sans-regular',
    fontSize: '16px'
  },
  typeG: {
    color: Colors.blueDark,
    fontFamily: 'noto-sans-regular',
    fontSize: '14px'
  },
  typeH: {
    color: Colors.blueDark,
    fontFamily: 'noto-sans-bold',
    fontSize: '12px'
  }
}
