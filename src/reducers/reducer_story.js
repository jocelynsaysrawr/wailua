import { STORY_ACTION } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case STORY_ACTION:
      console.log("action.payload", action.payload);
      return action.payload.Item.stories.M.story.M.body.S;
    default: return state;
  }
}