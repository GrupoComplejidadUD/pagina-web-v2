import MediaDto from "./MediaDto";

export default interface SeoDto {
  title: string;
  description: string;
  keywords: string;
  image: MediaDto;
}
