export enum SelectedPage {
    AboutMe = "aboutme",
    Gallery = "gallery",
    ContactMe = "contactme",
  }


export interface ArtType {
  id: number;
  image: string;
  title: string;
  description: string;
}