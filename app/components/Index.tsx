
var selectedOperator: string | null = null;

export default function Index({ categories = [] }: {
  categories: string[];
}) {
  function setSelectedOperator(category: string): void {
    selectedOperator = category;
  }

  return (
    <section className="flex-1 p-4 overflow-y-auto">
      <nav className="space-y-1">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedOperator(category)}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 ${selectedOperator === category
                ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                : "text-gray-300 hover:text-white hover:bg-neutral-700/50"
              }`}>
            {category}
          </button>
        ))}
      </nav>
    </section>
  )
}
