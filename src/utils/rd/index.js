
export default class UtilRD {

  constructor() {}

  isTablet(width) {
    return (width > 320 && width < 1024) ? true : false;
  }
}
