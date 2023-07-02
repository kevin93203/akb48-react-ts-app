export interface member {
    id: string
    name: string
    kana: string
    nickname: string
    alphabet: string
    image_url: string
    team_id: string
    team_name: string
  }

// export enum team {
//   teamA = 'チームA',
//   teamK = 'チームK',
//   teamB = 'チームB',
//   team4 = 'チーム4',
//   E = '研究生',
//   S = '支配人',
//   all = null
// }

export type team = 'チームA' | 'チームK'| 'チームB' | 'チーム4' | '研究生' | '支配人' | null