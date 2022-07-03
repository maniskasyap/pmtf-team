import { env } from 'process';

export default {
  io: {
    host: env.IO_HOST,
    team: {
      new: env.IO_TEAM_NEW,
      getMemberAll: env.IO_TEAM_ALL,
      getMember: env.IO_TEAM_BY_ID,
    },
  },
};
