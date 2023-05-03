
export type {default as Settings} from './settings';

import Locale from '../locale';

const prefix = Locale.branding.toLowerCase();

const _key = (key:string) => {
  return `${prefix}.${key}`;
}


let MEM_STORE = {};


const memStorage = {
  get(key:string, fallback:any = null): any | null {
    var res = MEM_STORE[_key(key)];
    if(res != null) {
      return JSON.parse(res);
    }

    return fallback;
  },

  set(key:string, value:any) {
    MEM_STORE[_key(key)] = JSON.stringify(value);
  },

  delete(key:string): any | null {
    let res = this.get(_key(key));

    if(res != null) {
      delete MEM_STORE[_key(key)];
    }

    return res;
  },

  clear() {
    MEM_STORE = {};    
  }
}

export default
 (typeof window === 'undefined') 
 ? memStorage
 : {
  get(key:string, fallback:any = null): any | null {
    var res = localStorage.getItem(_key(key));
    if(res != null) {
      return JSON.parse(res);
    }

    return fallback;
  },

  set(key:string, value:any) {
    localStorage.setItem(_key(key), JSON.stringify(value));
  },

  delete(key:string): any | null {
    let res = this.get(_key(key));

    if(res != null) {
      localStorage.removeItem(_key(key));
    }

    return res;
  },

  clear() {
    localStorage.clear();
  }
 }