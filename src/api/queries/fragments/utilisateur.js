import gql from 'graphql-tag'
import fragmentPermission from './permission'

const fragmentUtilisateur = gql`
  fragment utilisateur on Utilisateur {
    id
    email
    nom
    prenom
    telephoneMobile
    telephoneFixe
    administration {
      id
      nom
    }
    entreprise {
      id
      nom
      legalSiren
    }
    permission {
      ...permission
    }
  }

  ${fragmentPermission}
`

export default fragmentUtilisateur
