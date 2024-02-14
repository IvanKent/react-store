export default function Category({category, onCategoryClick}){
    return (
        <>
          <li onClick={() => onCategoryClick(category.id)}>{category.title}</li>
          {/* {console.log(result)}/\ */}
        </>
    )
}