import { STORY_ACTION } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case STORY_ACTION:
      return action.payload.Item.stories.M;
    default:
      return state;
  }
}

// .story.M.body.S
