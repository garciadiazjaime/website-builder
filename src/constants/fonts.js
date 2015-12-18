import Colors from './colors';



export class FontA {

  static style = {
    fontFamily: 'noto-sans-regular'
  };

  static getVariation(variation) {
    switch (variation) {
      case 'servicesA':
        return _.merge({}, this.style, {
          color: Colors.grayDark,
          fontSize: '12px'
        });
      case 'headerA':
        return _.merge({}, this.style, {
          color: Colors.grayDark,
          fontSize: '16px'
        });
      case 'introA':
        return _.merge({}, this.style, {
          color: Colors.blueDark,
          fontSize: '14px'
        });
      case 'homeA':
        return _.merge({}, this.style, {
          color: Colors.white,
          fontSize: '16px'
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
      case 'buttonA':
        return _.merge({}, this.style, {
          color: Colors.blueDark,
          fontSize: '12px'
        });
      case 'buttonC':
        return _.merge({}, this.style, {
          color: Colors.white,
          fontSize: '12px'
        });
      case 'menuA':
        return _.merge({}, this.style, {
          color: Colors.grayDark,
          fontSize: '12px',
          textTransform: 'uppercase'
        });
      case 'homeD':
        return _.merge({}, this.style, {
          color: Colors.white,
          fontSize: '15px',
        });
      case 'headerA':
        return _.merge({}, this.style, {
          color: Colors.grayDark,
          fontSize: '16px',
        });
      case 'servicesC':
        return _.merge({}, this.style, {
          color: Colors.grayMedium,
          fontSize: '16px',
        });
      case 'homeC':
        return _.merge({}, this.style, {
          color: Colors.white,
          fontSize: '25px',
        });
      case 'servicesE':
        return _.merge({}, this.style, {
          color: Colors.red,
          fontSize: '30px'
        });
      case 'homeA':
        return _.merge({}, this.style, {
          color: Colors.blueDark,
          fontSize: '35px'
        });
      case 'homeB':
        return _.merge({}, this.style, {
          color: Colors.white,
          fontSize: '35px'
        });
      case 'servicesA':
        return _.merge({}, this.style, {
          color: Colors.red,
          fontSize: '35px'
        });
      case 'servicesB':
        return _.merge({}, this.style, {
          color: Colors.grayDark,
          fontSize: '35px'
        });
      case 'servicesD':
        return _.merge({}, this.style, {
          color: Colors.white,
          fontSize: '50px',
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
