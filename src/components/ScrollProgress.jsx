import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="scroll-progress transition-all duration-150 ease-out"
      style={{ width: `${progress}%` }}
    />
  );
}
