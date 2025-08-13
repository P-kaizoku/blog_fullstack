export interface IBlogClient {
  _id: string;
  title: string;
  content: string;
  thumbnailUrl?: string;
  category?: string;
  author?: { _id: string; name: string; email: string }; // id as string
  likes?: { _id: string; name: string }[];
  createdAt?: string; // ya Date, tum parse karo to Date
  updatedAt?: string;
}
