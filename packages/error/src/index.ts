export enum ec {
  ok = 0,
  no_data
}

const messages = {
  [ec.ok]: 'ok',
  [ec.no_data]: 'no data'
}

export function err_msg(code: ec): string {
  const ret = messages[code]
  if (ret) {
    return ret
  } else {
    return 'unknown'
  }
}
