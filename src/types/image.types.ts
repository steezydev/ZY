export interface IImageSize {
  url: string;
}

export interface IImageFormats {
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
