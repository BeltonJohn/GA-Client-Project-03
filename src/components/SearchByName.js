import React from 'react';
import { getPodcastByName } from '../api/podcasts';
import { Link } from 'react-router-dom';

const SearchPodcast = ({ userSearches, searchByField }) => {
  const [podcast, setPodcast] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getPodcastByName(userSearches, searchByField);
        setPodcast(data);
      } catch (err) {}
    };
    getData();
  }, [userSearches, searchByField]);


  return (
    <>
      {!podcast.length ? (
        <>Loading...or no results</>
      ) : (
        podcast.map((item) => {
          return (
            <>
              <div key={item.title}>{item.title}</div>
              <div key={item._id} className="column card">
                <Link
                  to={`/podcasts/${item._id}`}
                  onClick={
                    <Link
                      to={`/podcast/${item._id}`}
                      className="navbar-item"
                    ></Link>
                  }
                >
                  <h2 className="card-header">Title: {item.title}</h2>
                  <div className="card-image">
                    <figure className="image">
                      <img src={item.img} alt={item.title} />
                    </figure>
                  </div>
                </Link>
              </div>
            </>
          );
        })
      )}
    </>
  );
};

export default SearchPodcast;
