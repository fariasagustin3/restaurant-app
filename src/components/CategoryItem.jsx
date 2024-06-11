const CategoryItem = (category, categorySelected, setCategorySelected) => {
  return (
    <button
      onClick={() => setCategorySelected(category.value)}
      className={categorySelected === category.value ? 'bg-transparent text-md text-[var(--wine-color)] font-semibold' : 'bg-transparent text-md text-[var(--white-color)] font-semibold'}
    >
      {category.name}
    </button>
  )
}

export default CategoryItem