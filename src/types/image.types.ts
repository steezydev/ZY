export interface IImageSize {
  url: string;
}

export interface IImageFormats {
  url: string;
  formats: {
    large: IImageSize;
    small: IImageSize;
    medium: IImageSize;
    thumbnail: IImageSize;
  };
}

export interface Image<T> {
  data: {
    id: number;
    attributes: T;
  };
}

export interface ImageArray<T> {
  id: number;
  attributes: T;
}
