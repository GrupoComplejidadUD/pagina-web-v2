interface MediaData {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: any;
  url: string;
  // provider_metadata: {
  //   public_id: string;
  //   resource_type: string;
  // };
}

export default interface MediaDto extends MediaData {
  alternativeText: string;
  caption: string;
  // previewUrl: any;
  // provider: string;
  formats?: {
    large?: MediaData;
    medium?: MediaData;
    small?: MediaData;
    thumbnail?: MediaData;
  };
}
