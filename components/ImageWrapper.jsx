export default function ImageWrapper({ children }) {
  return <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden rounded-lg">{children}</div>;
}
