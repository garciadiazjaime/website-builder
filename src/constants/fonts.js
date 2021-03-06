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
      case 'introA':
        return _.merge({}, this.style, {
          color: Colors.blueDark,
          fontSize: '14px'
        });
      case 'headerA':
        return _.merge({}, this.style, {
          color: Colors.grayDark,
          fontSize: '16px'
        });
      case 'homeA':
        return _.merge({}, this.style, {
          color: Colors.white,
          fontSize: '16px'
        });
      case 'procedureA':
        return _.merge({}, this.style, {
          color: Colors.white,
          fontSize: '25px'
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
      case 'procedureD':
        return _.merge({}, this.style, {
          color: Colors.grayDark,
          fontSize: '12px'
        });
      case 'procedureC':
        return _.merge({}, this.style, {
          color: Colors.grayMedium,
          fontSize: '12px'
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
      case 'procedureA':
        return _.merge({}, this.style, {
          color: Colors.grayDark,
          fontSize: '21px',
        });
      case 'homeC':
        return _.merge({}, this.style, {
          color: Colors.white,
          fontSize: '25px',
        });
      case 'procedureE':
        return _.merge({}, this.style, {
          color: Colors.red,
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
      case 'procedureB':
        return _.merge({}, this.style, {
          color: Colors.yellow,
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

export class NoFont {

  static getVariation(variation) {
    switch (variation) {
      case 'procedureA':
        return {
          color: Colors.blueDark,
          fontSize: '12px'
        };
      default:
        return null;
    }
  }
};


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
    color: '#fff',
    fontFamily: 'noto-sans-bold',
    fontSize: '50px'
  },
  typeD: {
    color: '#fff',
    fontFamily: 'noto-sans-regular',
    fontSize: '25px'
  },
  typeE: {
    color: Colors.blueDark,
    fontFamily: 'noto-sans-bold',
    fontSize: '25px',

    textTransform: 'uppercase'
  },
  typeF: {
    color: Colors.blueDark,
    fontFamily: 'noto-sans-bold',
    fontSize: '30px'
  },
  typeG: {
    color: Colors.yellow,
    fontFamily: 'noto-sans-bold',
    fontSize: '25px'
  },
  typeH: {
    color: '#fff',
    fontFamily: 'noto-sans-bold',
    fontSize: '16px'
  },
  typeI: {
    color: '#fff',
    fontFamily: 'noto-sans-regular',
    fontSize: '16px'
  },
  typeJ: {
    color: '#fff',
    fontFamily: 'noto-sans-bold',
    fontSize: '35px'
  },
  typeK: {
    color: 'white',
    fontSize: '30px',
    fontFamily: 'noto-sans-bold'
  },
  typeL: {
    color: Colors.yellow,
    fontSize: '25px',
    fontWeight: 'bold'
  },
  typeM: {
    color: Colors.white,
    fontFamily: 'noto-sans-regular',
    fontSize: '16px'
  },
  typeN: {
    color: Colors.blueDark,
    fontFamily: 'noto-sans-regular',
    fontSize: '35px'
  },
  typeO: {
    color: Colors.blueDark,
    fontFamily: 'noto-sans-bold',
    fontSize: '16px'
  },
  typeP: {
    color: 'white',
    fontFamily: 'noto-sans-bold',
    fontSize: '25px'
  }
}
