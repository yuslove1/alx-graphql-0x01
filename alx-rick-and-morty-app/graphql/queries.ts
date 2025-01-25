import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
query getEpisodes($oage: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
        info {
        count
        pages
        next
        prev
        }
        results {
        id
        name
        air_date
        episode
        }
    }
    }
    `;