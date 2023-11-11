
import ArticleListingTemplate from 'app/templates/article/listing/article-listing.template';

export async function getServerSideProps(context) {
  // Fetch data from external API

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .map(x => ({
      id: x, name: 'name',
      categories: 'categories',
      created_at: (new Date()).toDateString(),
      updated_at: (new Date()).toDateString(),
      action: 'aaa'
    })
    )
  return { props: { data } }
}

export default class ArticleListing extends ArticleListingTemplate {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    }
  }// end constructor
} //end class
