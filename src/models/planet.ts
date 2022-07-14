type Planets =
  | "mercury"
  | "venus"
  | "earth"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune";

type CurrentPageInformation = "overview" | "internal" | "surface";

interface Information {
  name: string;
  overview: string;
  internal: string;
  surface: string;
  information: Array<{ title: string; value: string; unit: string }>;
}

export type { Planets, CurrentPageInformation, Information };
