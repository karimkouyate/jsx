import React from 'react'

function CategoryCard({cat}) {
  return (
        <div class="card col-md-3 col-6" >
            <img src={cat.image_path} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{cat.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
  )
}

export default CategoryCard