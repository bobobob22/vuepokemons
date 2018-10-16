// 1
import gql from 'graphql-tag'

// 2
export const ALL_LINKS_QUERY = gql`
{
    pokemons(first: 30){
        id
        number
        name
        image
        attacks{
            fast{
                damage
            }
        }
    }
}`