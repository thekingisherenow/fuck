import Posts from "./Posts";
import Stories from "./Stories";

function Feed() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 
        md:max-w-3xl ml-2
        xl:grid-cols-3 xl:max-w-6xl mx-auto
        ">
            <section className="col-span-2" >
                <Stories/>
                <Posts />

            </section>
            <section>
                {/* Miniprofile */}
                {/* Suggestions */}
            </section>


        </main>
    )
}

export default Feed;