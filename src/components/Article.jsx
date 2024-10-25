function Article (){
    const name = "muhammad";
    const titles = ["Tutorial reach.js","Tutorial nextjs","tutorial nodejs"];
    
    // titles.map(item => item)
    return (
        <>
        <div>{name}</div>
        <div>
            {titles.map((title) => {
                return(
                    <>
                    <div>{title}</div>
                    <div>{title}</div>
                    </>
                );
            })}
        </div>
        </>
    );
        
    
} 

export default Article;