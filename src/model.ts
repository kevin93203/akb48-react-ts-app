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

export interface memberDetail {
  teamIcon: string
  teamMedal: string | null
  memberImg: string
  jpname: string
  name: string
  enName: string
  agency: string
  nickname: string
  birthday: string
  birthPlace: string
  twitter : string | null
  instagram: string | null
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