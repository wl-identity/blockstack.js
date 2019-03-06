
import { randomBytes } from 'crypto'
import { ECPair, address as baddress, crypto as bcrypto } from 'bitcoinjs-lib'

export function getEntropy(numberOfBytes: number) {
  if (!numberOfBytes) {
    numberOfBytes = 32
  }
  return randomBytes(numberOfBytes)
}

export function makeECPrivateKey() {
  const keyPair = ECPair.makeRandom({ rng: getEntropy })
  return keyPair.privateKey.toString('hex')
}

export function publicKeyToAddress(publicKey: string) {
  const publicKeyBuffer = Buffer.from(publicKey, 'hex')
  const publicKeyHash160 = bcrypto.hash160(publicKeyBuffer)
  const address = baddress.toBase58Check(publicKeyHash160, 0x00)
  return address
}

export function getPublicKeyFromPrivate(privateKey: string) {
  const keyPair = ECPair.fromPrivateKey(Buffer.from(privateKey, 'hex'))
  return keyPair.publicKey.toString('hex')
}
