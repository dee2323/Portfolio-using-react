import Card from './Card';
import './style.css'
import { works } from './works'
const FeaturedWork = () => {
    const listWorks = works.map(work => <Card {...work} />)

    return (
        <section id="works">
            <h2>Featured Works</h2>
            <div class="featureWorks">
                {listWorks}
            </div>
        </section>



    )
}
export default FeaturedWork;