import { ClaimItem } from './components'
import util from 'util'

export default class Claims {
  constructor (config = {}) {
    this.address = config.address || ''
    this.net = config.net || 'NoNet'
    this.claims = config.claims ? config.claims.map(c => ClaimItem(c)) : []
  }

  [util.inspect.custom] (depth, opts) {
    const claimsDump = this.claims.map(c => {
      return `${c.txid} <${c.index}>: ${c.claim.toString()}`
    })
    return `[Claims(${this.net}): ${this.address}]\n${JSON.stringify(claimsDump, null, 2)}`
  }

  /**
   * Returns a Claims object that contains part of the total claims starting at [[start]], ending at [[end]].
   * @param {number} start
   * @param {number} [end]
   * @return {Claims}
   */
  slice (start, end = undefined) {
    return new Claims({
      address: this.address,
      net: this.net,
      claims: this.claims.slice(start, end)
    })
  }
}
