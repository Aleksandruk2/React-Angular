export interface ICategory {
  id: number;
  title: string;
  image?: string;
  urlSlug: string;
}

export interface ICategoryCreate {
  name: string;
  slug: string;
  image?: File | null;
}

export interface ICategoryEdit {
  id: number;
  name: string;
  slug: string;
  imageFile?: File | null;
}
