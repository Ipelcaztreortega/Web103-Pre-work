// src/types/Creator.ts
export interface Creator {
    id?: string; // id is optional when creating a new creator
    name: string;
    imageURL: string;
    description: string;
    youtube_url: string;
    twitter_url: string;
    instagram_url: string;
}
