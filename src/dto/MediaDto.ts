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

type Formats = {
  large?: MediaData;
  medium?: MediaData;
  small?: MediaData;
  thumbnail?: MediaData;
};

function toSingleMedia(data: Partial<MediaData>): MediaData {
  const {
    name = "",
    hash = "",
    ext = "",
    mime = "",
    width = 0,
    height = 0,
    size = 0,
    path = "",
    url = "",
  } = data;

  return {
    name,
    hash,
    ext,
    mime,
    width,
    height,
    size,
    path,
    url,
  };
}

export default interface MediaDto extends MediaData {
  alternativeText: string;
  caption: string;
  previewUrl: any;
  // provider: string;
  formats: Formats;
}

export function toMediaDto(data: Partial<MediaDto>): MediaDto {
  const partialMedia = toSingleMedia(data);
  const {
    alternativeText = "",
    caption = "",
    previewUrl = "",
    formats = {},
  } = data;

  const formatsParsed: Formats = {};
  Object.keys(formats as Formats).forEach((key: string) => {
    const formatsKey = key as keyof Formats;
    formatsParsed[formatsKey] = toSingleMedia(formats[formatsKey]!);
  });

  return {
    ...partialMedia,
    alternativeText,
    caption,
    previewUrl,
    formats: formatsParsed,
  };
}
