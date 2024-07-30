export interface PlayerData {
    player_id: number;
    player_identifier: string;
}

export interface CurrPlayerData extends PlayerData {
    session_token: string;
    seen_before: boolean;
}

export interface PlayerLeaderboardEntry {
    player: 
    {
        name: string;
        public_uid: string;
        id: number;
        ulid: string;
    };
    metadata: string;
    member_id: number;
    rank: number;
    score: number;
}