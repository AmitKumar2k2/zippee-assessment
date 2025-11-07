export default function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-700 p-4 h-48 flex flex-col justify-between">
      <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
      </div>
    </div>
  );
}
