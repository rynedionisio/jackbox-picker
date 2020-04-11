namespace Types {
  export interface GamesInterface {
    id?: number;
    title: string;
    pack: number;
    min_players: number;
    max_players: number;
    extended_timers: boolean;
    img: string;
    family_mode: boolean;
    audience: boolean;
    drawing: boolean;
    game_length?: number;
    steam_id: number;
  }

  export interface EmojiInterface {
    symbol: string;
    label: string;
  }

  export interface FilterInterface {
    onShowImagesChange: any;
    onPlayersChange: any;
    onJbGamesChange: any;
    jbGames: any;
  }

  export interface GamesAppInterface extends GamesInterface {
    show_images: boolean;
  }
}

export default Types;
