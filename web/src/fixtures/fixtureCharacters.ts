import type { Character } from "../types/character";
import charactersJson from "./characters.json";

export const characters = charactersJson as Character[];
