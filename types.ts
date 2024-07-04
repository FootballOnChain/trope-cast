
// CASTS
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
  

  // CHANNEL 

export interface User {
  active_status: string;
  custody_address: string;
  display_name: string;
  fid: number;
  follower_count: number;
  following_count: number;
  notes: {
    active_status: string;
  };
  object: string;
  pfp_url: string;
  power_badge: boolean;
  profile: {
    bio: {
      text: string;
    };
  };
  username: string;
  verifications: string[];
  verified_addresses: {
    eth_addresses: string[];
    sol_addresses: string[];
  };
}

export interface Channel {
  created_at: number;
  description: string;
  follower_count: number;
  hosts: User[];
  id: string;
  image_url: string;
  lead: User;
  name: string;
  object: string;
  parent_url: string;
  url: string;
}

export interface FeedChannel {
  channel: Channel;
}
