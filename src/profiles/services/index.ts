import { Facebook } from './facebook'
import { Github } from './github'
import { Twitter } from './twitter'
import { Instagram } from './instagram'
import { HackerNews } from './hackerNews'
import { LinkedIn } from './linkedIn'
import { Service } from './service';

interface ValidateProofService{
   validateProof(proof: any, ownerAddress: string, name?: string): Promise<any>
}

export const profileServices: {
  [serviceName: string]: Service & ValidateProofService
} = {
  facebook: Facebook,
  github: Github,
  twitter: Twitter,
  instagram: Instagram,
  hackerNews: HackerNews,
  linkedIn: LinkedIn
}

export { containsValidProofStatement, containsValidAddressProofStatement } from './serviceUtils'
