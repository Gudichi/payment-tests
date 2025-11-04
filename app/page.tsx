import AboveTheFold from "./atf";
import { getVersion } from "./versions";

export default function HomePage() {
  const version = getVersion();

  return <AboveTheFold version={version} />;
}
