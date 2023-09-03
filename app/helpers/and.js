import { helper } from '@ember/component/helper';

export function and(params) {
  return params.every(Boolean);
}

export default helper(and);
