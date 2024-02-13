export default function Category({result}){
    return (
        <>
          <li key={result.id}>{result.title}</li>
          {/* {console.log(result)}/\ */}
        </>
    )
}