export interface Author {
    pfp_url: string;
    display_name: string;
    username: string;
  }
  
  export interface Cast {
    hash: string;
    author: Author;
    text: string;
    embeds: any[]; // Adjust the type based on the structure of your embeds
  }
  
  export interface Feed {
    casts: Cast[];
  }
  