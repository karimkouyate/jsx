
import CategoryCard from './components/CategoryCard';

function App() {

  let categories = [{
    id: 1,
    title : "Foot",
    image_path : "https://www.foot01.com/img/images/650x600/2023/Nov/04/lionel-messi-fait-deux-annonces-tonitruantes-icon_xxjpbee007017_20231031_pepfn0a001-1-367517.jpg?mrf-size=m"
  },
  {
    id : 2,
    title : "BasketBall",
    image_path : "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png"
  },

  {
    id : 3,
    title : "Tennis",
    image_path : "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/11/04/3819459-77622108-2560-1440.jpg"
  },

  {
    id : 4,
    title : "Natation",
    image_path : "https://gwuwi2.files.wordpress.com/2021/09/michael-phelps.jpg?w=1545&h=1200&crop=1"
  }
]

  return (
    
      <div className="category-container row">
        {
          categories.map(cat => {
            return  <CategoryCard cat={cat}/>
          })
        }
        
      </div>
    
  );
}

export default App;
