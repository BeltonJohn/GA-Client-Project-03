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
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [userSearches, searchByField]);

  return (
    <>
      <body className='searched-pod'>
        {!podcast.length ? (
          <><div class='loader-wrapper'>
            <div class='loader is-loading'></div>
          </div><p>No Results</p></>
        ) : (
          podcast.map((item) => {
            return (
              <div
                key={item._id}
                className='column card is-one-fifth mt-2 mx-1'
              >
                <Link
                  to={`/podcasts/${item._id}`}
                  onClick={
                    <Link
                      to={`/podcast/${item._id}`}
                      className='navbar-item'
                    ></Link>
                  }
                >
                  <h2 className='card-header'>{item.title}</h2>
                  <div className='card-image'>
                    <figure className='image is-1by1'>
                      <img src={item.img} alt={item.title} />
                    </figure>
                  </div>
                </Link>
              </div>
            );
          })
        )}
      </body>
    </>
  );
};

export default SearchPodcast;
