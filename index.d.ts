/** Configurable regexp of extname */
interface ExtRegExp extends RegExp {
  /** add extnames to regexp */
  add(...extname: string[]): ExtRegExp;
  /** remove extnames from regexp */
  remove(...extname: string[]): ExtRegExp;
  /** get raw regexp */
  valueOf(): RegExp;
  /** get extnames from regexp */
  readonly extname: string[];
  /** get suffixes from regexp */
  readonly suffix: string[];
}

/** Convert extname into regexp */
declare function extToRegexp(options: {
  /** suffixes of regexp */
  suffix?: string[];
  /** extnames of regexp */
  extname: string[];
}): ExtRegExp;

export = extToRegexp;
