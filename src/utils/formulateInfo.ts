import { DailyInfo } from '../types/NeoResponseInterface';

export const formulateInfo = (dailyInfo: DailyInfo[]) => {
  let maxEstDiameter: number =
    dailyInfo[0].estimated_diameter.kilometers.estimated_diameter_max;

  const closestNeo: string = dailyInfo[0].close_approach_data[0].miss_distance.kilometers;

  const fastestNeo: string =
    dailyInfo[0].close_approach_data[0].relative_velocity.kilometers_per_hour;

  let hazardousNeoCounter = 0;

  for (let i = 0; i < dailyInfo.length; i += 1) {
    // Diameter check
    if (
      dailyInfo[i].estimated_diameter.kilometers.estimated_diameter_max > maxEstDiameter
    ) {
      maxEstDiameter = dailyInfo[i].estimated_diameter.kilometers.estimated_diameter_max;
    }
    // Hazardous check
    if (dailyInfo[i].is_potentially_hazardous_asteroid) {
      hazardousNeoCounter += 1;
    }
    // Closest check
    if (dailyInfo[i].close_approach_data[0].miss_distance.kilometers > closestNeo) {
      dailyInfo[i].close_approach_data[0].miss_distance.kilometers = closestNeo;
    }
    // Fastest check
    if (
      dailyInfo[i].close_approach_data[0].relative_velocity.kilometers_per_hour >
      fastestNeo
    ) {
      dailyInfo[i].close_approach_data[0].relative_velocity.kilometers_per_hour =
        fastestNeo;
    }
  }

  return {
    maxEstDiameter,
    hazardousNeoCounter,
    closestNeo,
    fastestNeo,
  };
};
